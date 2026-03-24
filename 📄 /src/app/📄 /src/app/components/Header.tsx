import { Home, Info } from "lucide-react";
import { Button } from "./ui/button";
import imgLogo from "figma:asset/96ce0017694ca395ad0ce6ef3d6f851ec1c4d386.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={imgLogo} alt="USG Logo" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#C8102E]">USG</span>
            <span className="text-xs text-gray-600">Nueva Caceres</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#C8102E]"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#C8102E]"
          >
            Ting Dinig
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#C8102E]"
          >
            Issuances
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#C8102E]"
          >
            Organization
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#C8102E]"
          >
            Sign In
          </a>
          
          <Button className="bg-[#C8102E] hover:bg-[#a00d25] rounded-full px-6 py-2 h-9 text-sm">
            Register
          </Button>
        </nav>
      </div>
    </header>
  );
}
