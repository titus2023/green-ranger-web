
import { Link } from "react-router-dom";
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-forest-400" />
              <span className="text-xl font-bold">GreenRangers</span>
            </div>
            <p className="text-forest-200 text-sm">
              Educating and inspiring individuals to take environmental action. 
              Join us in our mission to protect our planet for future generations.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-forest-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-300 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-forest-300 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/about" className="text-forest-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/resources" className="text-forest-300 hover:text-white text-sm">Resources</Link></li>
              <li><Link to="/blog" className="text-forest-300 hover:text-white text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-forest-300 hover:text-white text-sm">Contact</Link></li>
              <li><Link to="/privacy" className="text-forest-300 hover:text-white text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-forest-300 hover:text-white text-sm">Tree Planting</a></li>
              <li><a href="#" className="text-forest-300 hover:text-white text-sm">Ocean Cleanup</a></li>
              <li><a href="#" className="text-forest-300 hover:text-white text-sm">Wildlife Protection</a></li>
              <li><a href="#" className="text-forest-300 hover:text-white text-sm">Climate Action</a></li>
              <li><a href="#" className="text-forest-300 hover:text-white text-sm">Eco Education</a></li>
              <li><a href="#" className="text-forest-300 hover:text-white text-sm">Sustainable Living</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-forest-200 text-sm mb-4">
              Stay updated with our latest news and events.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-forest-800 border-forest-700 text-white placeholder:text-forest-400"
              />
              <Button className="bg-forest-600 hover:bg-forest-500">
                <Mail className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-12 pt-6 text-center text-forest-400 text-sm">
          <p>© {new Date().getFullYear()} GreenRangers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
