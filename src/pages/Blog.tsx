
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, Search, Filter, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "sustainable-living", name: "Sustainable Living" },
    { id: "climate", name: "Climate Action" },
    { id: "wildlife", name: "Wildlife Conservation" },
    { id: "energy", name: "Renewable Energy" },
    { id: "pollution", name: "Pollution" },
  ];

  const articles = [
    {
      id: 1,
      title: "10 Simple Ways to Reduce Your Carbon Footprint",
      excerpt: "Small changes in your daily routine can have a big impact on the environment. Learn how to reduce your carbon footprint with these simple steps.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Apr 2, 2025",
      readTime: "5 min read",
      category: "sustainable-living",
      featured: true,
    },
    {
      id: 2,
      title: "The Revival of Endangered Species: Success Stories",
      excerpt: "Conservation efforts have helped bring several species back from the brink of extinction. Discover these inspiring success stories.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Mar 28, 2025",
      readTime: "7 min read",
      category: "wildlife",
      featured: false,
    },
    {
      id: 3,
      title: "Renewable Energy: The Future is Now",
      excerpt: "The transition to renewable energy is accelerating worldwide. Learn about the latest innovations and how they're changing our energy landscape.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Mar 20, 2025",
      readTime: "6 min read",
      category: "energy",
      featured: false,
    },
    {
      id: 4,
      title: "Ocean Plastic Pollution: A Global Crisis",
      excerpt: "Plastic waste is choking our oceans and threatening marine life. Learn about the scale of the problem and what's being done to solve it.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Mar 15, 2025",
      readTime: "8 min read",
      category: "pollution",
      featured: false,
    },
    {
      id: 5,
      title: "Climate Change and Extreme Weather Events",
      excerpt: "The connection between climate change and increasing extreme weather events explained, with data and scientific evidence.",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Mar 10, 2025",
      readTime: "9 min read",
      category: "climate",
      featured: true,
    },
    {
      id: 6,
      title: "Sustainable Fashion: Beyond the Trends",
      excerpt: "How the fashion industry is evolving to reduce its environmental impact, and how consumers can make more sustainable choices.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      date: "Mar 5, 2025",
      readTime: "6 min read",
      category: "sustainable-living",
      featured: false,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-forest-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & News</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Stay informed about environmental issues, success stories, and practical sustainable living tips.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b border-forest-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-forest-500" />
                <Input 
                  type="text"
                  placeholder="Search articles..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 text-forest-700 whitespace-nowrap">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter by:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"} 
                    className={`cursor-pointer ${
                      selectedCategory === category.id 
                        ? "bg-forest-600 hover:bg-forest-700" 
                        : "bg-white text-forest-700 hover:bg-forest-50"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="section-padding pt-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-forest-800">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="absolute w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 flex flex-col p-6">
                      <div className="mb-2">
                        <Badge 
                          variant="outline" 
                          className="bg-forest-50 text-forest-700 border-forest-200"
                        >
                          {categories.find(c => c.id === article.category)?.name}
                        </Badge>
                      </div>
                      <CardHeader className="p-0 pb-2">
                        <CardTitle className="text-xl md:text-2xl text-forest-800 hover:text-forest-600 transition-colors duration-200 cursor-pointer">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pb-4 flex-grow">
                        <div className="flex items-center space-x-4 text-sm text-forest-500 mb-2">
                          <span className="flex items-center">
                            <CalendarIcon className="mr-1 h-4 w-4" /> {article.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" /> {article.readTime}
                          </span>
                        </div>
                        <CardDescription className="text-forest-600">
                          {article.excerpt}
                        </CardDescription>
                      </CardContent>
                      <Button variant="link" className="pl-0 text-forest-600 hover:text-forest-700 w-fit">
                        Read Article <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-forest-800">All Articles</h2>
            
            {regularArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/80 backdrop-blur-sm text-forest-800 hover:bg-white/90">
                          {categories.find(c => c.id === article.category)?.name}
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
                    <div className="px-6 pb-6">
                      <Button variant="link" className="pl-0 text-forest-600 hover:text-forest-700">
                        Read Article <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-forest-600 text-lg">No articles found matching your search criteria.</p>
                <Button 
                  variant="link" 
                  className="text-forest-700 mt-2"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
