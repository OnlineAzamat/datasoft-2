import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
