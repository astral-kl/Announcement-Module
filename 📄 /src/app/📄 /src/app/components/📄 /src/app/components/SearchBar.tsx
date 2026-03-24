import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function SearchBar() {
  return (
    <section className="bg-gray-50 py-8 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 items-center max-w-5xl mx-auto">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for Contents, News, Updates..."
              className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
            />
          </div>

          {/* Filter Button */}
          <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 h-12 px-5 rounded-full border-gray-300 hover:bg-gray-100"
          >
            <SlidersHorizontal className="h-4 w-4 text-gray-600" />
          </Button>

          {/* Category Dropdown */}
          <div className="hidden md:flex items-center gap-2 h-12 px-5 rounded-full border border-gray-300 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">All</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
