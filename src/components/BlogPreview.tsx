
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";

const BlogPreview = () => {
  const articles = [
    {
      id: 1,
      title: "10 Simple Ways to Reduce Your Carbon Footprint",
      excerpt: "Small changes in your daily routine can have a big impact on the environment. Learn how to reduce your carbon footprint with these simple steps.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Apr 2, 2025",
      readTime: "5 min read",
      category: "Sustainable Living",
    },
    {
      id: 2,
      title: "The Revival of Endangered Species: Success Stories",
      excerpt: "Conservation efforts have helped bring several species back from the brink of extinction. Discover these inspiring success stories.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Mar 28, 2025",
      readTime: "7 min read",
      category: "Wildlife",
    },
    {
      id: 3,
      title: "Renewable Energy: The Future is Now",
      excerpt: "The transition to renewable energy is accelerating worldwide. Learn about the latest innovations and how they're changing our energy landscape.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Mar 20, 2025",
      readTime: "6 min read",
      category: "Energy",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-800">
              Latest News & Articles
            </h2>
            <p className="text-forest-600 max-w-2xl">
              Stay informed about environmental issues, success stories, and practical tips for sustainable living.
            </p>
          </div>
          <Button variant="ghost" className="text-forest-600 hover:text-forest-700 mt-4 md:mt-0">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-white/80 backdrop-blur-sm text-forest-800 hover:bg-white/90">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4 text-sm text-forest-500 mb-2">
                  <span className="flex items-center">
                    <CalendarIcon className="mr-1 h-4 w-4" /> {article.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" /> {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-forest-800 hover:text-forest-600 transition-colors duration-200 cursor-pointer">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-forest-600">
                  {article.excerpt}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
