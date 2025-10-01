import { StarDecoration } from "./StarDecoration";
import { BookOpen, Globe, TrendingUp, Users, DollarSign, Mic } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "22 Indian Languages",
      description: "Every book automatically converted to eBook and audiobook in 22 languages",
    },
    {
      icon: DollarSign,
      title: "Multiple Revenue Streams",
      description: "Four different ways to monetize your work on a single platform",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Track reader engagement with comprehensive data and insights",
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Connect with readers and fellow authors through our dedicated community",
    },
    {
      icon: BookOpen,
      title: "Free Publishing",
      description: "Zero cost to publish and distribute your books globally",
    },
    {
      icon: Mic,
      title: "Audiobook Creation",
      description: "Professional audiobook conversion in multiple languages",
    },
  ];

  return (
    <section id="features" className="section-padding relative">
      <StarDecoration position="top-left" size="lg" />
      <StarDecoration position="bottom-right" size="lg" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Why Choose YouBook?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to publish, distribute, and grow as an author
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group p-8 bg-card border-2 border-border hover:border-primary rounded-3xl transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
