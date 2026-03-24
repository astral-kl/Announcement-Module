import { Megaphone } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Announcement <span className="text-[#C8102E]">Board</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Stay informed with the latest news, updates and important information from the University Student Government
        </p>
      </div>
    </section>
  );
}
