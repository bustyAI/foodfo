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

    const prompt = `Extract only the food items with their price from this text only respond with the json no other text:
                  ${ocrText}
                  can you also add estimated expiration dates, category they belong to only using these categories
                    vegetables, fruits, dairy, meat, grains, snacks, beverages, condiments and format it into JSON
                    like this example format:
                  [
                   {
                      name: "Milk"
                      price: 3.50,
                      category: "dairy",
                      expDate: "02/15/2025",
                   },
                   {
                      name: "Apples"
                      price: 5.37,
                      category: "fruit",
                      expDate: "02/12/2025",
                    }
                  ]`;
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

    const structuredData = response.text();

    return NextResponse.json({ structuredData }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to process text please try again" },
      { status: 500 }
    );
  }
}
