import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/gemzy-logo.png"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Gemstones", href: "/gemstones" },
    { name: "Why Gemzy", href: "/why" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary backdrop-blur-sm  sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-118">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Gemzy Logo" className="h-20  lg:24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium text-sm lg:text-base transition-colors duration-200 hover:scale-105 ${
                  isActive(item.href)
                    ? "text-accent font-semibold border-b-2 border-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />  // Adjusted size and color
            ) : (
              <Menu className="h-6 w-6 text-white" />  // Adjusted size and color
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border bg-primary backdrop-blur-sm">
            <nav className="flex flex-col space-y-6 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium text-lg transition-all duration-200 py-2 px-4 rounded-md ${
                    isActive(item.href)
                      ? "text-accent font-semibold bg-accent/10"
                      : "text-primary-foreground hover:text-accent hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;