import type { Metadata } from "next";

// Auth
import { UserProvider } from "@auth0/nextjs-auth0/client";

import "./globals.css";
import { Navbar } from "./components";

export const metadata: Metadata = {
  title: "foodfo",
  description: "Keep track of your pantry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`antialiased`}>
          <Navbar />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
