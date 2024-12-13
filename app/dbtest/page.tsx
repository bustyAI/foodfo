import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const page = async () => {
  const users = await prisma.user.findMany();
  const pantries = await prisma.pantry.findMany();

  console.log(users);
  console.log(pantries);

  return <div></div>;
};

export default page;
