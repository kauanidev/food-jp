import { Feedbacks } from "@/components/feedbacks";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Instructions } from "@/components/instructions";
import { Menu } from "@/components/menu";
import { Placement } from "@/components/placement";
import Head from "next/head";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-dark-40">
      <Head>
        <title>FoodJP - Comida Oriental</title>
      </Head>
      <Header />
      <Hero />
      <Instructions />
      <Menu />
      <Feedbacks />
      <Placement />
      <Footer />
    </main>
  );
}
