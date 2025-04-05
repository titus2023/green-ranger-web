
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Search, DollarSign } from "lucide-react";

const GetInvolved = () => {
  const options = [
    {
      title: "Volunteer",
      description: "Join our community of volunteers working on environmental projects around the world.",
      icon: <Heart className="h-8 w-8 text-white" />,
      buttonText: "Join Us",
      color: "bg-forest-600",
    },
    {
      title: "Attend Events",
      description: "Participate in our workshops, clean-ups, and educational events for all ages.",
      icon: <Calendar className="h-8 w-8 text-white" />,
      buttonText: "Find Events",
      color: "bg-ocean-600",
    },
    {
      title: "Spread Awareness",
      description: "Share our resources and campaigns to help educate others about environmental issues.",
      icon: <Search className="h-8 w-8 text-white" />,
      buttonText: "Get Resources",
      color: "bg-earth-600",
    },
    {
      title: "Donate",
      description: "Support our mission with a one-time or recurring donation to fund our environmental projects.",
      icon: <DollarSign className="h-8 w-8 text-white" />,
      buttonText: "Donate Now",
      color: "bg-forest-600",
    },
  ];

  return (
    <section className="section-padding bg-forest-900 text-white relative overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Involved
          </h2>
          <p className="text-forest-200 max-w-2xl mx-auto">
            There are many ways to contribute to our mission of environmental protection and sustainability.
            Find the perfect fit for your interests, skills, and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <Card key={index} className="bg-forest-800/60 backdrop-blur-sm border-forest-700/50 text-white h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className={`p-3 rounded-full ${option.color} inline-block mb-4`}>
                  {option.icon}
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-forest-200 mb-6">
                  {option.description}
                </CardDescription>
                <Button className={option.color}>
                  {option.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
