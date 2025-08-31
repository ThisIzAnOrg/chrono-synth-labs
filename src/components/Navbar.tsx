import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              ChronoSynth Labs
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="shadow-glow-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border">
              <a href="#home" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full shadow-glow-primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;