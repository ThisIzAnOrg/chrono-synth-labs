import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Globe, 
  Bot, 
  Cpu, 
  BarChart3,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native Android and iOS applications with cutting-edge UI/UX and seamless performance across all devices.",
    features: ["Native Android", "iOS Development", "Cross-platform", "App Store Optimization"]
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable web solutions built with modern frameworks, responsive design, and optimized performance.",
    features: ["React/Next.js", "Progressive Web Apps", "API Integration", "Cloud Deployment"]
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description: "Intelligent conversational AI and autonomous agents that enhance user experience and automate workflows.",
    features: ["Natural Language Processing", "Machine Learning", "Custom Training", "Multi-platform Integration"]
  },
  {
    icon: Cpu,
    title: "Embedded Software",
    description: "Real-time embedded systems and IoT solutions for industrial automation and smart device integration.",
    features: ["Real-time Systems", "IoT Integration", "Hardware Optimization", "Industrial Protocols"]
  },
  {
    icon: BarChart3,
    title: "BMS & BESS Analytics",
    description: "Advanced monitoring and analysis tools for Battery Management Systems and energy storage solutions.",
    features: ["Real-time Monitoring", "Predictive Analytics", "Custom Dashboards", "Performance Optimization"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Software Solutions for <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of software development services. 
            Built for scale, designed for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group bg-tech-surface border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-card transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology stack showcase */}
        <div className="text-center bg-tech-surface rounded-3xl p-12 border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-6">Built with Cutting-Edge Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="text-muted-foreground font-semibold">React</div>
            <div className="text-muted-foreground font-semibold">Python</div>
            <div className="text-muted-foreground font-semibold">Node.js</div>
            <div className="text-muted-foreground font-semibold">Flutter</div>
            <div className="text-muted-foreground font-semibold">TensorFlow</div>
            <div className="text-muted-foreground font-semibold">AWS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;