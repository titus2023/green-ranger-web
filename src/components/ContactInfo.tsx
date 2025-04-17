
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type ContactInfoItem = {
  icon: React.ReactNode;
  title: string;
  details: string;
  action: string | null;
  link: string | null;
};

interface ContactInfoProps {
  contactInfo: ContactInfoItem[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  return (
    <div className="space-y-6">
      {contactInfo.map((item, index) => (
        <Card key={index} className="bg-white border-forest-100">
          <CardContent className="p-4 flex items-start">
            <div className="p-3 bg-forest-100 rounded-full mr-4">
              {item.icon}
            </div>
            <div>
              <h3 className="text-forest-800 font-medium">{item.title}</h3>
              <p className="text-forest-600 text-sm mb-2">{item.details}</p>
              {item.action && (
                <a 
                  href={item.link || "#"} 
                  className="text-forest-600 hover:text-forest-700 text-sm font-medium"
                  target={item.link?.startsWith("https") ? "_blank" : undefined}
                  rel={item.link?.startsWith("https") ? "noopener noreferrer" : undefined}
                >
                  {item.action} →
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
