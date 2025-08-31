import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@simtestlab.com", label: "Email" }
  ];

  const footerLinks = {
    "Services": [
      "Mobile Development",
      "Web Applications",
      "AI & Chatbots",
      "Embedded Software",
      "BMS Analytics"
    ],
    "Company": [
      "About Us",
      "Our Team",
      "Careers",
      "Blog",
      "Contact"
    ],
    "Resources": [
      "Documentation",
      "Case Studies",
      "Technical Blog",
      "Support",
      "FAQ"
    ]
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                simtestlab
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Pioneering the future of software with cutting-edge solutions in mobile development, 
              AI integration, and embedded systems. Transform your digital vision into reality.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-tech-surface rounded-lg flex items-center justify-center hover:bg-primary hover:shadow-glow-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-foreground font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} simtestlab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;