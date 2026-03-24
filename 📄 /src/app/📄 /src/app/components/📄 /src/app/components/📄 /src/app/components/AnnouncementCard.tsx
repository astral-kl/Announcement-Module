import { FileText, ThumbsUp, ThumbsDown, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";

interface AnnouncementCardProps {
  title: string;
  description: string;
  publishedBy: string;
  uploadedTime: string;
  tags?: string[];
}

export function AnnouncementCard({
  title,
  description,
  publishedBy,
  uploadedTime,
  tags = ["Hot", "New", "Trending"]
}: AnnouncementCardProps) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#C8102E]/30 transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </Button>
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
            className="h-9 w-9 text-gray-400 hover:text-[#C8102E] hover:bg-[#C8102E]/10"
          >
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-gray-400 hover:text-[#C8102E] hover:bg-[#C8102E]/10"
          >
            <ThumbsDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
