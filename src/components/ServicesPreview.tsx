import { Globe, Monitor, ShoppingBag, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom business websites that convert visitors into customers with modern design and optimized performance.",
      features: ["Responsive design", "SEO optimization", "Content management", "Analytics setup"],
      href: "/services#websites"
    },
    {
      icon: Monitor,
      title: "Web Applications",
      description: "Custom dashboards, portals, and web apps that streamline your business operations and improve efficiency.",
      features: ["Custom dashboards", "User authentication", "API integrations", "Database design"],
      href: "/services#web-apps"
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure checkout, inventory management, and payment processing integration.",
      features: ["Product catalogs", "Secure checkout", "Payment gateways", "Inventory tracking"],
      href: "/services#ecommerce"
    },
    {
      icon: Shield,
      title: "Website Care Plans",
      description: "Ongoing maintenance, security updates, and performance monitoring to keep your site running smoothly.",
      features: ["Security updates", "Performance monitoring", "Content updates", "Technical support"],
      href: "/services#care-plans"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services that drive growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple business websites to complex web applications, we have the expertise to bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-brand transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <div className="text-sm font-semibold text-primary mb-4">
                    {service.startingPrice}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to={service.href}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;