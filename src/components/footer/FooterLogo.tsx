import { Leaf, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const FooterLogo = () => {
  return (
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
  );
};

export default FooterLogo;
