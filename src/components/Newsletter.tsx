
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-forest-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-12 w-12 text-forest-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-800">
            Stay Updated
          </h2>
          <p className="text-forest-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest environmental news, upcoming events, 
            and sustainability tips delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white border-forest-200"
            />
            <Button 
              type="submit" 
              className="bg-forest-600 hover:bg-forest-700"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-forest-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
