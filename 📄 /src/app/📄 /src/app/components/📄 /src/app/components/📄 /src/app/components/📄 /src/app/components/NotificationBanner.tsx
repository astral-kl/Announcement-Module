import { Bell } from "lucide-react";
import { Button } from "./ui/button";

export function NotificationBanner() {
  return (
    <section className="bg-gradient-to-r from-[#C8102E] to-[#a00d25] py-16">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Bell className="h-10 w-10 text-white" />
          <h2 className="text-4xl font-bold text-white">
            Notification
          </h2>
        </div>
        <p className="text-xl font-medium text-white mb-3">
          Never Miss An Update From Us!!
        </p>
        <p className="text-base text-white/90 mb-8 leading-relaxed">
          Follow Our Official Group Page To Stay Informed About The Future Important 
          Announcements And Events. Stay Safe!!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            className="bg-white hover:bg-gray-100 text-[#C8102E] rounded-full px-8 py-2.5 text-sm font-medium"
          >
            Suggestions & Feedbacks
          </Button>
          <Button
            className="bg-white hover:bg-gray-100 text-[#C8102E] rounded-full px-8 py-2.5 text-sm font-medium"
          >
            Privacy & Cookies
          </Button>
        </div>
      </div>
    </section>
  );
}
