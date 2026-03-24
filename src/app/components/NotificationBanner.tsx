import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function NotificationBanner() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your feedback, ${feedbackForm.name}! We'll review it shortly.`);
    setFeedbackForm({ name: "", email: "", subject: "", message: "" });
    setShowFeedbackModal(false);
  };

  return (
    <>
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
              onClick={() => setShowFeedbackModal(true)}
              className="bg-white hover:bg-gray-100 text-[#C8102E] rounded-full px-8 py-2.5 text-sm font-medium"
            >
              Suggestions & Feedbacks
            </Button>
            <Button
              onClick={() => setShowPrivacyModal(true)}
              className="bg-white hover:bg-gray-100 text-[#C8102E] rounded-full px-8 py-2.5 text-sm font-medium"
            >
              Privacy & Cookies
            </Button>
          </div>
        </div>
      </section>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-[#C8102E] to-[#a00d25] p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-white">Suggestions & Feedbacks</h3>
              <p className="text-white/90 text-sm mt-1">We value your input! Share your thoughts with us.</p>
            </div>
            
            <form onSubmit={handleFeedbackSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={feedbackForm.name}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={feedbackForm.email}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  required
                  value={feedbackForm.subject}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
                >
                  <option value="">Select a subject</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="question">Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  required
                  value={feedbackForm.message}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E] resize-none"
                  placeholder="Share your thoughts with us..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={() => setShowFeedbackModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full py-2.5"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#C8102E] hover:bg-[#a00d25] text-white rounded-full py-2.5"
                >
                  Submit Feedback
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Privacy & Cookies Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-[#C8102E] to-[#a00d25] p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-white">Privacy & Cookies Policy</h3>
              <p className="text-white/90 text-sm mt-1">Last updated: March 24, 2026</p>
            </div>
            
            <div className="p-6 space-y-6">
              <section>
                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Information We Collect</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We collect information that you provide directly to us, including your name, email address, 
                  and any feedback or suggestions you submit through our platform. We also collect usage data 
                  to improve our services.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-gray-900 mb-2">2. How We Use Your Information</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your information is used to provide and improve our services, respond to your inquiries, 
                  send important announcements, and ensure the security of our platform. We never sell your 
                  personal information to third parties.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-gray-900 mb-2">3. Cookies</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  Cookies help us remember your preferences, understand how you use our site, and improve 
                  functionality. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-gray-900 mb-2">4. Data Security</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information from 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-gray-900 mb-2">5. Your Rights</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You have the right to access, update, or delete your personal information at any time. 
                  You may also opt-out of receiving communications from us by following the unsubscribe 
                  instructions in our emails.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-gray-900 mb-2">6. Contact Us</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact 
                  the University Student Government at usg@nuevacaceres.edu.ph or visit our office.
                </p>
              </section>

              <div className="flex justify-end pt-4">
                <Button
                  onClick={() => setShowPrivacyModal(false)}
                  className="bg-[#C8102E] hover:bg-[#a00d25] text-white rounded-full px-8 py-2.5"
                >
                  I Understand
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
