import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 gradient-green-blue rounded-lg flex items-center justify-center">
                <Truck className="text-white" size={20} />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                Greendrive Mobility
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("tracking")}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Track
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
              <Button className="gradient-blue-purple text-white hover:opacity-90">
                Get Quote
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-gray-900 font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("tracking")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              Track
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              Contact
            </button>
            <Button className="gradient-blue-purple text-white w-full mt-2">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
