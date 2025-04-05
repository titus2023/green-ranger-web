
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, Download, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const resourceTypes = [
    { value: "all", label: "All Resources" },
    { value: "guides", label: "Guides" },
    { value: "reports", label: "Reports" },
    { value: "videos", label: "Videos" },
    { value: "infographics", label: "Infographics" },
  ];

  const allResources = [
    {
      id: 1,
      title: "Climate Change Basics",
      description: "A comprehensive guide to understanding climate change, its causes, effects, and potential solutions.",
      type: "guides",
      icon: <BookOpen className="h-10 w-10 text-forest-600" />,
      downloadable: true,
      tags: ["climate", "education", "beginners"],
    },
    {
      id: 2,
      title: "Plastic Pollution Report",
      description: "Research findings on the impact of plastic pollution on marine ecosystems and what can be done about it.",
      type: "reports",
      icon: <FileText className="h-10 w-10 text-forest-600" />,
      downloadable: true,
      tags: ["pollution", "ocean", "plastic"],
    },
    {
      id: 3,
      title: "Sustainable Living 101",
      description: "Video tutorials on how to adopt a more sustainable lifestyle, from reducing waste to energy conservation.",
      type: "videos",
      icon: <Video className="h-10 w-10 text-forest-600" />,
      downloadable: false,
      tags: ["lifestyle", "sustainability", "beginners"],
    },
    {
      id: 4,
      title: "Biodiversity Loss",
      description: "Educational material on the alarming rate of biodiversity loss and conservation strategies.",
      type: "guides",
      icon: <BookOpen className="h-10 w-10 text-forest-600" />,
      downloadable: true,
      tags: ["biodiversity", "conservation", "wildlife"],
    },
    {
      id: 5,
      title: "Renewable Energy Transition",
      description: "A report on the global shift to renewable energy sources and their environmental benefits.",
      type: "reports",
      icon: <FileText className="h-10 w-10 text-forest-600" />,
      downloadable: true,
      tags: ["energy", "climate", "technology"],
    },
    {
      id: 6,
      title: "Deforestation Impact",
      description: "Infographic showing the effects of deforestation on climate, biodiversity, and local communities.",
      type: "infographics",
      icon: <FileText className="h-10 w-10 text-forest-600" />,
      downloadable: true,
      tags: ["forests", "biodiversity", "climate"],
    },
    {
      id: 7,
      title: "Water Conservation at Home",
      description: "Video guide to simple water-saving techniques for everyday household use.",
      type: "videos",
      icon: <Video className="h-10 w-10 text-forest-600" />,
      downloadable: false,
      tags: ["water", "conservation", "home"],
    },
    {
      id: 8,
      title: "Sustainable Agriculture Practices",
      description: "Guide to environmentally friendly farming techniques that preserve soil health and biodiversity.",
      type: "guides",
      icon: <BookOpen className="h-10 w-10 text-forest-600" />,
      downloadable: true,
      tags: ["agriculture", "food", "sustainability"],
    },
  ];

  const filterResources = (resources: any[], type: string, search: string) => {
    return resources.filter((resource) => {
      const matchesType = type === "all" || resource.type === type;
      const matchesSearch = search === "" || 
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase()) ||
        resource.tags.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase()));
      
      return matchesType && matchesSearch;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-forest-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Educational Resources</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Explore our collection of resources to learn about environmental issues and solutions.
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            {/* Search and Filter */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-forest-500" />
                <Input 
                  type="text"
                  placeholder="Search resources..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 text-forest-700">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter by:</span>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all">
              <TabsList className="mb-8 w-full flex flex-wrap justify-start overflow-x-auto">
                {resourceTypes.map((type) => (
                  <TabsTrigger 
                    key={type.value} 
                    value={type.value}
                    className="data-[state=active]:bg-forest-100 data-[state=active]:text-forest-800"
                  >
                    {type.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {resourceTypes.map((type) => (
                <TabsContent key={type.value} value={type.value} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filterResources(allResources, type.value, searchTerm).map((resource) => (
                      <Card key={resource.id} className="h-full flex flex-col card-gradient">
                        <CardHeader className="flex items-center pb-2">
                          <div className="p-3 bg-forest-100 rounded-full mb-4">
                            {resource.icon}
                          </div>
                          <CardTitle className="text-center text-forest-800 text-xl">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <CardDescription className="text-forest-600 text-center mb-4">
                            {resource.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {resource.tags.map((tag: string, index: number) => (
                              <span 
                                key={index} 
                                className="text-xs bg-forest-100 text-forest-600 px-2 py-1 rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
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

                  {filterResources(allResources, type.value, searchTerm).length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-forest-600 text-lg">No resources found matching your search criteria.</p>
                      <Button 
                        variant="link" 
                        className="text-forest-700 mt-2"
                        onClick={() => setSearchTerm("")}
                      >
                        Clear search
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* For Educators Section */}
        <section className="section-padding bg-forest-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-forest-800">For Educators</h2>
                <p className="text-forest-600 mb-6">
                  We offer specialized resources for teachers and educators to integrate environmental 
                  education into their curriculum. Our materials are aligned with educational standards 
                  and designed to engage students of all ages.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-forest-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-forest-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-forest-700">Lesson plans for K-12 classrooms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-forest-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-forest-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-forest-700">Interactive activities and worksheets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-forest-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-forest-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-forest-700">Educational videos and documentaries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-forest-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-forest-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-forest-700">Professional development for educators</span>
                  </li>
                </ul>
                <Button className="bg-forest-600 hover:bg-forest-700">
                  Access Educator Resources
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Students learning about nature" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
