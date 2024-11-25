import React from "react";

// Auth
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

// Components
import { Button } from "../components";

export default withPageAuthRequired(
  async function Pantry() {
    const session = await getSession();

    return (
      <div>
        <h1>hello there</h1>
        <h2>this is the pantry</h2>
        <h3>this is your token</h3>
        <h1>User</h1>
        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
        <a href="/api/auth/logout">
          <Button
            buttonText="Logout"
            textColor="text-orange-500"
            borderColor="border-orange-500"
          />
        </a>
      </div>
    );
  },
  { returnTo: "/pantry" }
);
