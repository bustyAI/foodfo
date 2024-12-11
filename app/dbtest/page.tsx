import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const page = async () => {
  const users = await prisma.user.findMany();
  const pantry = await prisma.pantry.findMany();
  console.log(users);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1>Pantry: </h1>
        <h4>
          {pantry.map((pan) => (
            <strong key={pan.id}>{pan.title}</strong>
          ))}
        </h4>
      </div>
      <div className="flex flex-col">
        <h1>Users: </h1>
        <h4>
          {users.map((us) => (
            <strong key={us.id}>{us.name}</strong>
          ))}
        </h4>
      </div>
    </div>
  );
};

export default page;
