import { Link } from "react-router-dom";
import ProposalDialog from "@/components/ProposalDialog";
import { Zap, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Website Design", href: "/services#websites" },
    { name: "Web Applications", href: "/services#web-apps" },
    { name: "E-commerce", href: "/services#ecommerce" },
    { name: "Care Plans", href: "/services#care-plans" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/sitespark" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/sitespark" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/sitespark" },
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/1234567890" },
  ];

  return (
    <footer className="bg-card text-card-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SiteSpark
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              We design and build fast, conversion-focused websites and web apps 
              for ambitious businesses. Let's spark your growth together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/20 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                Based in IST timezone<br />
                Response within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground">
            © {currentYear} SiteSpark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;