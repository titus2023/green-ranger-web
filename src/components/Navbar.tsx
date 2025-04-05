
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-forest-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/ffed93f0-876c-4b83-8037-0f6a5c7f5051.png" 
            alt="GreenRangers Logo" 
            className="h-10 w-auto" 
          />
          <span className="text-xl font-bold text-forest-800">GreenRangers</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-forest-800 hover:text-forest-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-forest-800 hover:text-forest-600 font-medium">
            About Us
          </Link>
          <Link to="/resources" className="text-forest-800 hover:text-forest-600 font-medium">
            Resources
          </Link>
          <Link to="/blog" className="text-forest-800 hover:text-forest-600 font-medium">
            Blog
          </Link>
          <Link to="/contact" className="text-forest-800 hover:text-forest-600 font-medium">
            Contact
          </Link>
          <Button variant="default" className="bg-forest-600 hover:bg-forest-700 ml-4">
            <Heart className="mr-2 h-4 w-4" /> Get Involved
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-forest-800" />
          ) : (
            <Menu className="h-6 w-6 text-forest-800" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-5 space-y-4 bg-white border-b border-forest-100">
            <Link 
              to="/" 
              className="block text-forest-800 hover:text-forest-600 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-forest-800 hover:text-forest-600 font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/resources" 
              className="block text-forest-800 hover:text-forest-600 font-medium"
              onClick={toggleMenu}
            >
              Resources
            </Link>
            <Link 
              to="/blog" 
              className="block text-forest-800 hover:text-forest-600 font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block text-forest-800 hover:text-forest-600 font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="w-full bg-forest-600 hover:bg-forest-700">
              <Heart className="mr-2 h-4 w-4" /> Get Involved
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
