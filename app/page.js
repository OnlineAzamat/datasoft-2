import About from "@/sections/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Explore } from "@/sections/Explore";
import { GetStarted } from "@/sections/GetStarted";
import { WhatsNew } from "@/sections/WhatsNew";
import { Feedback } from "@/sections/Feedback";
import { Insights } from "@/sections/Insights";
import { World } from "@/sections/World";

export default function Home() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
    </div>
  );
}
