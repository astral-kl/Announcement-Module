import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/SearchBar";
import { AnnouncementCard } from "./components/AnnouncementCard";
import { NotificationBanner } from "./components/NotificationBanner";

export default function App() {
  const announcements = [
    {
      id: 1,
      title: "USG Financial Report",
      description: "Here's a quick summary of The Usg Tinig: Dinig Project Website Financial Report",
      publishedBy: "Admin 101",
      uploadedTime: "1 hour Ago"
    },
    {
      id: 2,
      title: "USG Financial Report",
      description: "Here's a quick summary of The Usg Tinig: Dinig Project Website Financial Report",
      publishedBy: "Admin Z",
      uploadedTime: "5 hours Ago"
    },
    {
      id: 3,
      title: "USG Financial Report",
      description: "Here's a quick summary of The Usg Tinig: Dinig Project Website Financial Report",
      publishedBy: "Admin K",
      uploadedTime: "7 hours Ago"
    },
    {
      id: 4,
      title: "USG Financial Report",
      description: "Here's a quick summary of The Usg Tinig: Dinig Project Website Financial Report",
      publishedBy: "Admin Xy",
      uploadedTime: "10 hours Ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <SearchBar />
        
        {/* Announcements Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                title={announcement.title}
                description={announcement.description}
                publishedBy={announcement.publishedBy}
                uploadedTime={announcement.uploadedTime}
              />
            ))}
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
