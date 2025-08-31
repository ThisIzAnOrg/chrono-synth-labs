import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@chronosynth.dev",
      action: "mailto:hello@chronosynth.dev"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      value: "San Francisco, CA",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available",
      value: "Mon - Fri, 9AM - 6PM PST",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and bring your vision to life. 
            We're here to help you navigate the digital transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-tech-surface border-border/50 shadow-glow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Send us a Message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <select className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-primary focus:outline-none text-foreground">
                    <option value="">Select a service</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="web">Web Application</option>
                    <option value="ai">AI Agents & Chatbots</option>
                    <option value="embedded">Embedded Software</option>
                    <option value="bms">BMS & BESS Analytics</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full shadow-glow-primary group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index}
                  className="bg-tech-surface border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-card group cursor-pointer"
                  onClick={() => {
                    if (info.action.startsWith('mailto:') || info.action.startsWith('tel:')) {
                      window.location.href = info.action;
                    }
                  }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{info.description}</p>
                      <p className="text-primary font-medium">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* CTA Card */}
            <Card className="bg-gradient-accent border-none text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold mb-3">Ready to Start?</h4>
                <p className="mb-4 opacity-90">
                  Schedule a free consultation to discuss your project requirements and get a detailed proposal.
                </p>
                <Button 
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;