import React from "react";
import auth0 from "@/utils/auth0";
import Image from "next/image";
import { Button } from "../components";

interface User {
  name?: string;
  email?: string;
  picture?: string;
}

async function Pantry() {
  // Get the session object and destructure user from it
  const session = await auth0.getSession();
  const user: User | undefined = session?.user; // Handle possible undefined/null session

  return (
    <div>
      <h1>Hello {user?.name || "Guest"}</h1>
      <h1>{JSON.stringify(user)}</h1>
      <Image
        src={`${user?.picture}`}
        alt="profile-pic"
        width={50}
        height={50}
      />
      <a href="/api/auth/logout">
        <Button
          buttonText="Logout"
          textColor="text-orange-500"
          borderColor="border-orange-500"
        />
      </a>
    </div>
  );
}

export default Pantry;
