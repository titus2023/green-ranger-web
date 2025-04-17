
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="bg-white border-forest-100">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-forest-800">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-forest-700">Your Name</label>
              <Input 
                id="name"
                name="name"
                type="text" 
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-forest-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-forest-700">Email Address</label>
              <Input 
                id="email"
                name="email"
                type="email" 
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-forest-200"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-forest-700">Subject</label>
            <Input 
              id="subject"
              name="subject"
              type="text" 
              placeholder="How can we help you?"
              required
              value={formData.subject}
              onChange={handleChange}
              className="border-forest-200"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-forest-700">Message</label>
            <Textarea 
              id="message"
              name="message"
              placeholder="Your message here..."
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="border-forest-200"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-forest-600 hover:bg-forest-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending Message..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
