
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-forest-950">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')" 
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Learn, Explore, and Protect Our Planet
          </h1>
          <p className="text-xl text-forest-100 mb-8 md:pr-12">
            Join the movement to create a sustainable future. Through education, 
            action, and collaboration, we can make a difference for our environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-forest-600 hover:bg-forest-500 text-white">
              Get Involved <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white border-2 text-white hover:bg-white hover:text-forest-800 transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M0 0L60 10C120 20 240 40 360 40C480 40 600 20 720 20C840 20 960 40 1080 50C1200 60 1320 60 1380 60L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            fill="#f9fdfb"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
