import { Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

export function SearchBar({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange,
  selectedTag,
  onTagChange
}: SearchBarProps) {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const categories = ["All", "Financial Reports", "Announcements", "Updates", "Events"];
  const tags = ["All", "Hot", "New", "Trending"];

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
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter Button */}
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center gap-2 h-12 px-5 rounded-full border-gray-300 hover:bg-gray-100"
            >
              <SlidersHorizontal className="h-4 w-4 text-gray-600" />
              {selectedTag !== "All" && (
                <span className="ml-1 px-2 py-0.5 bg-[#C8102E] text-white text-xs rounded-full">
                  {selectedTag}
                </span>
              )}
            </Button>

            {/* Filter Dropdown */}
            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                  Filter by Tag
                </div>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      onTagChange(tag);
                      setShowFilterDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      selectedTag === tag ? "text-[#C8102E] font-medium bg-[#C8102E]/5" : "text-gray-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <div 
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="hidden md:flex items-center gap-2 h-12 px-5 rounded-full border border-gray-300 bg-white cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm text-gray-700">{selectedCategory}</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>

            {/* Category Dropdown Menu */}
            {showCategoryDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                  Category
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onCategoryChange(category);
                      setShowCategoryDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      selectedCategory === category ? "text-[#C8102E] font-medium bg-[#C8102E]/5" : "text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active Filters */}
        {(selectedTag !== "All" || selectedCategory !== "All" || searchQuery) && (
          <div className="flex flex-wrap gap-2 items-center max-w-5xl mx-auto mt-4">
            <span className="text-xs text-gray-500">Active filters:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-xs">
                Search: {searchQuery}
                <button onClick={() => onSearchChange("")} className="hover:text-[#C8102E]">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedCategory !== "All" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-xs">
                Category: {selectedCategory}
                <button onClick={() => onCategoryChange("All")} className="hover:text-[#C8102E]">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedTag !== "All" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-xs">
                Tag: {selectedTag}
                <button onClick={() => onTagChange("All")} className="hover:text-[#C8102E]">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            <button
              onClick={() => {
                onSearchChange("");
                onCategoryChange("All");
                onTagChange("All");
              }}
              className="text-xs text-[#C8102E] hover:underline font-medium"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
