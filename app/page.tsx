import Features from "@/app/components/home/Features";
import Showcase from "./components/home/Showcase";
import Pricing from "./components/home/Pricing";
import Faq from "./components/home/Faq";
import Content from "./components/home/Content";
import Portfolio from "./components/home/Portfolio";

export default function Home() {
  return (
    <main className="bg-white">
      <Showcase />
      <Features />
      <Portfolio />
      <Pricing />
      <Faq />
    </main>
  );
}
