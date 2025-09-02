import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe, Bot, Cpu, BarChart3 } from "lucide-react";

const Hero = () => {
  const featuredServices = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native Android & iOS apps for modern businesses."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Scalable web solutions built with cutting-edge tech."
    },
    {
      icon: Bot,
      title: "AI & Chatbots",
      description: "Intelligent automation and conversational AI."
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Custom embedded software solutions."
    },
    {
      icon: BarChart3,
      title: "BMS & BESS Tools",
      description: "Advanced monitoring and analytics platforms."
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Your business vision,</span>
              <br />
              <span className="text-primary font-extrabold">
                powered by our expertise
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your ideas into powerful software solutions. From mobile apps to AI systems, 
              we build technology that drives your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 shadow-glow-primary group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-tech-dark">
                View Our Work
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Featured Services Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Featured Services</h3>
                <p className="text-sm text-muted-foreground">Explore our core technology solutions</p>
              </div>
              
              <div className="space-y-4">
                {featuredServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-tech-surface/50 hover:bg-tech-surface-hover/50 border border-border/50 transition-all duration-300 hover:shadow-glow-card group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-5 w-5 text-tech-dark" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <Button variant="ghost" className="w-full text-primary hover:bg-primary/10">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-tech-primary/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float hidden lg:block"></div>
    </section>
  );
};

export default Hero;