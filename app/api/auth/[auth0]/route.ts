import auth0 from "@/utils/auth0";

export const GET = await auth0.handleAuth({
  login: await auth0.handleLogin({
    returnTo: "/pantry",
  }),
});
