
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import MapPlaceholder from "@/components/MapPlaceholder";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-forest-600" />,
      title: "Email Us",
      details: "catherineimali60@gmail.com",
      action: "Send Email",
      link: "mailto:catherineimali60@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-forest-600" />,
      title: "Call Us",
      details: "0768949273",
      action: "Call Now",
      link: "tel:0768949273",
    },
    {
      icon: <MapPin className="h-5 w-5 text-forest-600" />,
      title: "Visit Us",
      details: "Kakuyuni, Kilifi, Kenya",
      action: "Get Directions",
      link: "https://maps.google.com/maps?q=Kakuyuni,+Kilifi,+Kenya",
    },
    {
      icon: <Clock className="h-5 w-5 text-forest-600" />,
      title: "Office Hours",
      details: "Monday - Friday: 9AM - 5PM",
      action: null,
      link: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <ContactHero />

        {/* Contact Form and Info Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6 text-forest-800">Get In Touch</h2>
                <p className="text-forest-600 mb-8">
                  We're here to answer any questions you may have about our environmental initiatives, 
                  educational resources, or how you can get involved.
                </p>
                
                <ContactInfo contactInfo={contactInfo} />
                <SocialLinks />
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <MapPlaceholder />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
