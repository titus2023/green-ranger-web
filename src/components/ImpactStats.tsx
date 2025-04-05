
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, CloudRain, Globe } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const StatCard = ({ icon, value, label, suffix = "", color }: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const framesPerSecond = 60;
    const totalFrames = animationDuration / 1000 * framesPerSecond;
    const increment = value / totalFrames;
    
    let currentFrame = 0;
    const counter = setInterval(() => {
      currentFrame++;
      setCount(Math.min(Math.ceil(increment * currentFrame), value));
      
      if (currentFrame >= totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / framesPerSecond);
    
    return () => clearInterval(counter);
  }, [value]);

  return (
    <Card className="glass-card">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={`p-3 rounded-full ${color} mb-4`}>
          {icon}
        </div>
        <div className="text-3xl md:text-4xl font-bold text-forest-800">
          {count.toLocaleString()}{suffix}
        </div>
        <p className="text-forest-600 mt-2">{label}</p>
      </CardContent>
    </Card>
  );
};

const ImpactStats = () => {
  const stats = [
    {
      icon: <Leaf className="h-6 w-6 text-forest-600" />,
      value: 50000,
      label: "Trees Planted",
      color: "bg-forest-100",
    },
    {
      icon: <CloudRain className="h-6 w-6 text-ocean-600" />,
      value: 120,
      label: "Clean Water Projects",
      color: "bg-ocean-100",
    },
    {
      icon: <Users className="h-6 w-6 text-earth-600" />,
      value: 25000,
      label: "Volunteers Worldwide",
      color: "bg-earth-100",
    },
    {
      icon: <Globe className="h-6 w-6 text-forest-600" />,
      value: 50,
      suffix: "+",
      label: "Countries Reached",
      color: "bg-forest-100",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-forest-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-800">
            Our Impact
          </h2>
          <p className="text-forest-600 max-w-2xl mx-auto">
            Together we're making a difference. Here's what we've accomplished with the help of our supporters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
