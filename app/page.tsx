import { Hero, Button, Footer } from "@/app/components";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col overflow-hidden">
      <Hero />

      <Button
        href="/api/auth/login"
        classParams=" mb-24 hover:bg-orange-500 hover:text-white"
        borderColor="border-orange-500"
        buttonText="Get Started"
        textColor="text-orange-500"
      />

      <Footer />
    </main>
  );
}
