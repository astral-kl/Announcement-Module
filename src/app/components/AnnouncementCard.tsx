import { FileText, ThumbsUp, ThumbsDown, MoreVertical, Share2, Bookmark, Flag, Trash2, Edit } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface AnnouncementCardProps {
  title: string;
  description: string;
  publishedBy: string;
  uploadedTime: string;
  tags?: string[];
  onDelete?: () => void;
}

export function AnnouncementCard({
  title,
  description,
  publishedBy,
  uploadedTime,
  tags = ["Hot", "New", "Trending"],
  onDelete
}: AnnouncementCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState<"like" | "dislike" | null>(null);

  const handleLike = () => {
    if (userVote === "like") {
      setLikes(likes - 1);
      setUserVote(null);
    } else if (userVote === "dislike") {
      setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserVote("like");
    } else {
      setLikes(likes + 1);
      setUserVote("like");
    }
  };

  const handleDislike = () => {
    if (userVote === "dislike") {
      setDislikes(dislikes - 1);
      setUserVote(null);
    } else if (userVote === "like") {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserVote("dislike");
    } else {
      setDislikes(dislikes + 1);
      setUserVote("dislike");
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      }).catch(() => {
        alert("Announcement shared!");
      });
    } else {
      alert("Announcement shared!");
    }
    setShowMenu(false);
  };

  const handleBookmark = () => {
    alert("Announcement bookmarked!");
    setShowMenu(false);
  };

  const handleReport = () => {
    alert("Announcement reported. Thank you for keeping our community safe.");
    setShowMenu(false);
  };

  const handleEdit = () => {
    alert("Edit functionality would open an edit modal here.");
    setShowMenu(false);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      onDelete?.();
      setShowMenu(false);
    }
  };

  return (
    <article className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#C8102E]/30 transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setShowMenu(!showMenu)}
          >
            <MoreVertical className="h-5 w-5" />
          </Button>

          {/* Dropdown Menu */}
          {showMenu && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                <button
                  onClick={handleEdit}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </button>
                <button
                  onClick={handleShare}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button
                  onClick={handleBookmark}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Bookmark className="h-4 w-4" />
                  Bookmark
                </button>
                <div className="my-1 border-t border-gray-200" />
                <button
                  onClick={handleReport}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Flag className="h-4 w-4" />
                  Report
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Document Info */}
      <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
        <FileText className="h-6 w-6 text-[#C8102E]" />
        <span className="text-sm font-medium text-gray-700">
          USG Financial Report.docx
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#C8102E] text-white text-xs font-medium px-3 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        {/* Meta Info */}
        <div className="text-xs text-gray-500">
          <p className="font-medium">Published By: {publishedBy}</p>
          <p>Uploaded: {uploadedTime}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLike}
            className={`h-9 w-9 transition-colors ${
              userVote === "like" 
                ? "text-[#C8102E] bg-[#C8102E]/10" 
                : "text-gray-400 hover:text-[#C8102E] hover:bg-[#C8102E]/10"
            }`}
          >
            <div className="flex flex-col items-center">
              <ThumbsUp className={`h-4 w-4 ${userVote === "like" ? "fill-[#C8102E]" : ""}`} />
              {likes > 0 && <span className="text-xs font-medium">{likes}</span>}
            </div>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDislike}
            className={`h-9 w-9 transition-colors ${
              userVote === "dislike" 
                ? "text-[#C8102E] bg-[#C8102E]/10" 
                : "text-gray-400 hover:text-[#C8102E] hover:bg-[#C8102E]/10"
            }`}
          >
            <div className="flex flex-col items-center">
              <ThumbsDown className={`h-4 w-4 ${userVote === "dislike" ? "fill-[#C8102E]" : ""}`} />
              {dislikes > 0 && <span className="text-xs font-medium">{dislikes}</span>}
            </div>
          </Button>
        </div>
      </div>
    </article>
  );
}
