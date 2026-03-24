import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/SearchBar";
import { AnnouncementCard } from "./components/AnnouncementCard";
import { NotificationBanner } from "./components/NotificationBanner";
import { useState, useMemo } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "USG Financial Report",
      description: "Here's a quick summary of The Usg Tinig: Dinig Project Website Financial Report",
      publishedBy: "Admin 101",
      uploadedTime: "1 hour Ago",
      category: "Financial Reports",
      tags: ["Hot", "New", "Trending"]
    },
    {
      id: 2,
      title: "USG Financial Report",
      description: "Here's a quick summary of The Usg Tinig: Dinig Project Website Financial Report",
      publishedBy: "Admin Z",
      uploadedTime: "5 hours Ago",
      category: "Financial Reports",
      tags: ["Hot", "New"]
    },
    {
      id: 3,
      title: "Campus Event Announcement",
      description: "Join us for the upcoming campus-wide celebration and networking event",
      publishedBy: "Admin K",
      uploadedTime: "7 hours Ago",
      category: "Events",
      tags: ["New", "Trending"]
    },
    {
      id: 4,
      title: "Important Update",
      description: "Here's a quick summary of The Usg Tinig: Dinig Project Website Financial Report",
      publishedBy: "Admin Xy",
      uploadedTime: "10 hours Ago",
      category: "Updates",
      tags: ["Hot"]
    }
  ]);

  const handleDeleteAnnouncement = (id: number) => {
    setAnnouncements(announcements.filter(announcement => announcement.id !== id));
  };

  // Filter announcements based on search query, category, and tag
  const filteredAnnouncements = useMemo(() => {
    let filtered = announcements;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((announcement) =>
        announcement.title.toLowerCase().includes(query) ||
        announcement.description.toLowerCase().includes(query) ||
        announcement.publishedBy.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (announcement) => announcement.category === selectedCategory
      );
    }

    // Filter by tag
    if (selectedTag !== "All") {
      filtered = filtered.filter((announcement) =>
        announcement.tags.includes(selectedTag)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedTag]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
        />
        
        {/* Announcements Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {filteredAnnouncements.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAnnouncements.map((announcement) => (
                  <AnnouncementCard
                    key={announcement.id}
                    title={announcement.title}
                    description={announcement.description}
                    publishedBy={announcement.publishedBy}
                    uploadedTime={announcement.uploadedTime}
                    tags={announcement.tags}
                    onDelete={() => handleDeleteAnnouncement(announcement.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-2">
                  No announcements found
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedTag("All");
                  }}
                  className="text-[#C8102E] hover:underline text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        <NotificationBanner />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-6 text-center text-xs text-gray-500">
          <p>&copy; 2026 University Student Government - Tinig: Dinig Website</p>
        </div>
      </footer>
    </div>
  );
}
