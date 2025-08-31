import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Lightbulb, 
  Users, 
  Zap,
  CheckCircle2 
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "We maintain the highest standards in code quality, performance, and security across all our projects."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Always exploring cutting-edge technologies to deliver solutions that give our clients a competitive edge."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team to achieve your business goals."
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      description: "Fast, iterative development cycles ensure rapid deployment and continuous improvement."
    }
  ];

  const achievements = [
    "Industry-leading development practices",
    "24/7 technical support and maintenance",
    "Scalable architecture design",
    "Security-first development approach",
    "Cross-platform expertise",
    "AI and ML integration specialists"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="border-primary/30 text-primary mb-4">
                About ChronoSynth Labs
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Pioneering the </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">Future</span>
                <span className="text-foreground"> of Software</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                At ChronoSynth Labs, we're not just developers – we're digital architects crafting 
                the foundation of tomorrow's technology landscape. With expertise spanning mobile 
                development, AI integration, and embedded systems, we transform complex challenges 
                into elegant solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index}
                  className="bg-tech-surface border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-card group"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-tech rounded-3xl p-12 border border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years of Innovation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;