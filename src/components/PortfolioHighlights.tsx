import { ExternalLink, TrendingUp, Users, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portfolioImage from "@/assets/portfolio-mockups.jpg";

const PortfolioHighlights = () => {
  const projects = [
    {
      title: "HealthFirst Clinic",
      category: "Healthcare",
      problem: "Low online booking rates and poor mobile experience",
      solution: "Responsive redesign with streamlined booking flow",
      results: {
        metric: "450%",
        description: "increase in online appointments",
        icon: Users
      },
      tags: ["Healthcare", "Booking System", "Mobile-First"]
    },
    {
      title: "Premier Properties",
      category: "Real Estate",
      problem: "Outdated listings display and slow lead generation",
      solution: "Modern property showcase with advanced search and CRM integration",
      results: {
        metric: "280%",
        description: "more qualified leads",
        icon: TrendingUp
      },
      tags: ["Real Estate", "CRM Integration", "Lead Generation"]
    },
    {
      title: "Bella's Bistro",
      category: "Restaurant",
      problem: "No online ordering and limited table reservations",
      solution: "Complete e-commerce platform with reservation system",
      results: {
        metric: "320%",
        description: "increase in online orders",
        icon: ShoppingCart
      },
      tags: ["E-commerce", "Restaurant", "Online Ordering"]
    }
  ];

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real results for real businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses across different industries achieve their growth goals with strategic web solutions.
          </p>
        </div>
        
        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-brand max-w-4xl mx-auto">
            <img 
              src={portfolioImage} 
              alt="Portfolio showcase of modern business websites" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/20 hover:shadow-brand transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Challenge:</span>
                    <p className="text-sm">{project.problem}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Solution:</span>
                    <p className="text-sm">{project.solution}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-primary/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <project.results.icon className="h-5 w-5 text-primary mr-2" />
                    <span className="text-2xl font-bold text-primary">{project.results.metric}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.results.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-transparent border-border hover:bg-card" asChild>
            <Link to="/work">
              View All Case Studies
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;