import { Navbar, Hero, Button, Footer } from "@/app/components";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <Hero />

      <Button
        borderColor="border-orange-500"
        buttonText="Get Started"
        textColor="text-orange-500"
        buttonHoverColor="bg-orange-500"
        textHoverColor="text-white"
      />
      <Footer />
    </main>
  );
}
