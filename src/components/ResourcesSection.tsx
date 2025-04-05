
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: "Climate Change Basics",
      description: "A comprehensive guide to understanding climate change, its causes, effects, and potential solutions.",
      type: "guide",
      icon: <BookOpen className="h-10 w-10 text-forest-600" />,
      downloadable: true,
    },
    {
      id: 2,
      title: "Plastic Pollution Report",
      description: "Research findings on the impact of plastic pollution on marine ecosystems and what can be done about it.",
      type: "report",
      icon: <FileText className="h-10 w-10 text-forest-600" />,
      downloadable: true,
    },
    {
      id: 3,
      title: "Sustainable Living 101",
      description: "Video tutorials on how to adopt a more sustainable lifestyle, from reducing waste to energy conservation.",
      type: "video",
      icon: <Video className="h-10 w-10 text-forest-600" />,
      downloadable: false,
    },
    {
      id: 4,
      title: "Biodiversity Loss",
      description: "Educational material on the alarming rate of biodiversity loss and conservation strategies.",
      type: "guide",
      icon: <BookOpen className="h-10 w-10 text-forest-600" />,
      downloadable: true,
    },
  ];

  return (
    <section className="section-padding bg-forest-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-800">
            Educational Resources
          </h2>
          <p className="text-forest-600 max-w-2xl mx-auto">
            Access free resources to learn about environmental issues and how to make a positive impact.
            Perfect for students, educators, activists, and anyone interested in sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="h-full flex flex-col card-gradient">
              <CardHeader className="flex items-center pb-2">
                <div className="p-3 bg-forest-100 rounded-full mb-4">
                  {resource.icon}
                </div>
                <CardTitle className="text-center text-forest-800 text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-forest-600 text-center">
                  {resource.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  className={`w-full ${resource.downloadable ? 'bg-forest-600 hover:bg-forest-700' : 'bg-ocean-600 hover:bg-ocean-700'}`}
                >
                  {resource.downloadable ? (
                    <>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </>
                  ) : (
                    'Watch Now'
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-forest-600 text-forest-600 hover:bg-forest-50">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
