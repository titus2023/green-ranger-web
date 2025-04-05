
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Leaf, Heart, Users, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-forest-600" />,
      title: "Environmental Stewardship",
      description: "We believe in the responsible use and protection of the natural environment through conservation and sustainable practices.",
    },
    {
      icon: <Heart className="h-8 w-8 text-forest-600" />,
      title: "Compassion",
      description: "We approach our work with care and concern for all living beings and ecosystems affected by environmental changes.",
    },
    {
      icon: <Users className="h-8 w-8 text-forest-600" />,
      title: "Collaboration",
      description: "We work together with communities, organizations, and governments to create effective environmental solutions.",
    },
    {
      icon: <Star className="h-8 w-8 text-forest-600" />,
      title: "Innovation",
      description: "We embrace new ideas and technologies that can help us address environmental challenges more effectively.",
    },
  ];

  const team = [
    {
      name: "Dr. Emma Rodriguez",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      bio: "With a Ph.D. in Environmental Science, Emma has dedicated her career to conservation and sustainability.",
    },
    {
      name: "Marcus Chen",
      role: "Head of Conservation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      bio: "Marcus has led conservation projects in over 20 countries, focusing on biodiversity and ecosystem restoration.",
    },
    {
      name: "Aisha Johnson",
      role: "Education Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
      bio: "Aisha develops educational programs that inspire the next generation of environmental leaders.",
    },
    {
      name: "Carlos Mendez",
      role: "Research Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Carlos coordinates research projects that provide critical data for environmental policy and action.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-forest-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GreenRangers</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Dedicated to protecting our planet through education, advocacy, and action.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Beautiful landscape of a river between mountains" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-forest-800">Our Mission</h2>
                <p className="text-forest-600 mb-6">
                  GreenRangers is dedicated to preserving and protecting the natural environment through 
                  education, advocacy, and direct action. We work to inspire individuals and communities 
                  to take environmental responsibility and create a sustainable future for all living beings.
                </p>
                <h2 className="text-3xl font-bold mb-6 text-forest-800">Our Vision</h2>
                <p className="text-forest-600">
                  We envision a world where humans live in harmony with nature, where ecosystems thrive, 
                  biodiversity flourishes, and natural resources are managed sustainably for the benefit 
                  of present and future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-forest-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-800">Our Values</h2>
              <p className="text-forest-600 max-w-2xl mx-auto">
                The core principles that guide our work and decisions every day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <div className="p-3 bg-forest-100 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-forest-800">{value.title}</h3>
                  <p className="text-forest-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-800">Meet Our Team</h2>
              <p className="text-forest-600 max-w-2xl mx-auto">
                Dedicated professionals working to make a positive environmental impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-forest-800">{member.name}</h3>
                    <p className="text-forest-500 mb-3">{member.role}</p>
                    <p className="text-forest-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="section-padding bg-forest-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-800">Our Journey</h2>
              <p className="text-forest-600 max-w-2xl mx-auto">
                The story of GreenRangers and our growth over the years.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center md:items-end">
                  <div className="text-2xl font-bold text-forest-700">2015</div>
                  <div className="h-full w-px bg-forest-300 my-4 hidden md:block"></div>
                </div>
                <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-forest-800">Foundation</h3>
                  <p className="text-forest-600">
                    GreenRangers was founded by a small group of environmental scientists and activists 
                    committed to making a difference through education and community involvement.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center md:items-end">
                  <div className="text-2xl font-bold text-forest-700">2018</div>
                  <div className="h-full w-px bg-forest-300 my-4 hidden md:block"></div>
                </div>
                <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-forest-800">Expansion</h3>
                  <p className="text-forest-600">
                    We expanded our programs to include conservation projects in five countries,
                    established our educational curriculum, and grew our volunteer network to over 1,000 members.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center md:items-end">
                  <div className="text-2xl font-bold text-forest-700">2020</div>
                  <div className="h-full w-px bg-forest-300 my-4 hidden md:block"></div>
                </div>
                <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-forest-800">Digital Transformation</h3>
                  <p className="text-forest-600">
                    Launched our comprehensive online platform to reach a global audience with environmental 
                    education resources and virtual volunteering opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center md:items-end">
                  <div className="text-2xl font-bold text-forest-700">2025</div>
                </div>
                <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-forest-800">Today</h3>
                  <p className="text-forest-600">
                    GreenRangers now operates in over 50 countries, with a network of 25,000+ volunteers
                    and partnerships with leading environmental organizations, educational institutions, and governments.
                  </p>
                </div>
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

export default About;
