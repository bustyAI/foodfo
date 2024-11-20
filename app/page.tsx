import { Navbar, Hero, Button } from "@/app/components";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Navbar />
      <Hero />

      <div className="flex justify-center mt-12">
        <Button
          borderColor="border-orange-500"
          textColor="text-orange-500"
          buttonText="Get Started"
          buttonHoverColor="bg-orange-500"
          textHoverColor="text-white"
        />
      </div>
    </main>
  );
}
