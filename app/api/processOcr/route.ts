import prisma from "@/lib/prisma";

// Auth
import auth0 from "@/utils/auth0";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = new NextResponse();
  try {
    const session = await auth0.getSession(req, res);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY as string);
    const { ocrText } = await req.json();

    if (!ocrText) {
      return NextResponse.json(
        { error: "No reciept data entered try again" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Extract only the food items with their price from this text also only respond with the JSON schema:
                  ${ocrText}
                  can you also add estimated expiration dates these are estimates, but make sure they have an expiration date
                  , if there is anything you cant make out set the value to 1 for ints and floats and N/A for stirngs
                   and category they belong to only using these categories
                    vegetables, fruits, dairy, meat, grains, snacks, beverages, condiments using this JSON schema:

                    Food = {'name': string, 'price':float, 'quantity': int, 'category': string, 'expDate': DateTime, 'expired': Boolean,}
                    Return: Array<Food>
                    `;
    const result = await model.generateContent(prompt);

    if (!result) {
      return NextResponse.json(
        { error: "Error generating content try again" },
        { status: 400 }
      );
    }
    const response = await result.response;

    if (!response) {
      return NextResponse.json(
        { error: "Error fetching response try again" },
        { status: 503 }
      );
    }

    const textResponse = await response.text();
    const jsonMatch = textResponse.match(/```json\s*([\s\S]*?)\s*```/);
    const cleanedJson = jsonMatch ? jsonMatch[1] : textResponse.trim();

    const structuredData = JSON.parse(cleanedJson);

    if (!Array.isArray(structuredData)) {
      return NextResponse.json(
        { error: "Invalid Data from Gemini" },
        { status: 500 }
      );
    }

    const { user } = session;
    const pantry = await prisma.pantry.findUnique({
      where: {
        // Placeholder
        userId: "google-oauth2|106992489073321534816",
      },
    });

    if (!pantry) {
      return NextResponse.json({ error: "No Pantry found" }, { status: 404 });
    }

    const savedItems = await prisma.food.createMany({
      data: structuredData.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        expDate: item.expDate,
        category: item.category,
        expired: false,
        pantryId: pantry.id,
      })),
    });

    console.log(structuredData);

    return NextResponse.json({ structuredData }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to process text please try again" },
      { status: 500 }
    );
  }
}
