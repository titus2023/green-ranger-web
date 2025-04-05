
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Users, Globe, Cloud } from "lucide-react";

const FeaturedCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Reforestation Project",
      description: "Help us plant 10,000 trees in deforested areas to restore biodiversity and combat climate change.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Conservation",
      icon: <Globe className="h-5 w-5" />,
      progress: 65,
    },
    {
      id: 2,
      title: "Ocean Cleanup Initiative",
      description: "Join our volunteers in removing plastic waste from coastlines and protecting marine life.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Ocean",
      icon: <Cloud className="h-5 w-5" />,
      progress: 42,
    },
    {
      id: 3,
      title: "Community Gardens",
      description: "Building sustainable food systems in urban areas through community-led gardening projects.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Community",
      icon: <Users className="h-5 w-5" />,
      progress: 78,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-800">
            Current Campaigns
          </h2>
          <p className="text-forest-600 max-w-2xl mx-auto">
            Join our environmental initiatives that are making a real impact around the world.
            Together, we can restore and protect our natural ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-white/80 backdrop-blur-sm text-forest-800 hover:bg-white/90 flex items-center gap-1">
                    {campaign.icon}
                    {campaign.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{campaign.title}</CardTitle>
                <CardDescription className="text-forest-600">{campaign.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{campaign.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-forest-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-forest-500 rounded-full" 
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-forest-600 hover:bg-forest-700">
                  Get Involved <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
