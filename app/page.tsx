import { Navbar, Hero, Button, Footer } from "@/app/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <Hero />

      <Link href={"/login"}>
        <Button
          borderColor="border-orange-500"
          buttonText="Get Started"
          textColor="text-orange-500"
          buttonHoverColor="bg-orange-500"
          textHoverColor="text-white"
        />
      </Link>
      <Footer />
    </main>
  );
}
