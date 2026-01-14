import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FooterNewsletter = () => {
  return (
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
  );
};

export default FooterNewsletter;
