import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    document.title = "Our Work - SiteSpark Case Studies & Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore SiteSpark\'s portfolio of successful web projects. See real case studies with measurable results across industries.');
    }
  }, []);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "local-services", label: "Local Services" },
    { id: "healthcare", label: "Healthcare" },
    { id: "real-estate", label: "Real Estate" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  const caseStudies = [
    {
      id: "brightsmile-dental",
      title: "BrightSmile Dental",
      industry: "healthcare",
      challenge: "Outdated website with poor mobile experience leading to lost appointments",
      solution: "Modern responsive design with online booking integration",
      results: [
        "+127% online appointments",
        "45% faster page load",
        "+89% mobile conversions"
      ],
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Calendly API"],
      image: "/placeholder.svg",
      url: "https://brightsmile-demo.com"
    },
    {
      id: "metro-realty",
      title: "Metro Realty Group",
      industry: "real-estate",
      challenge: "Generic template site that didn't showcase premium properties effectively",
      solution: "Custom property showcase with advanced search and virtual tours",
      results: [
        "+156% lead generation",
        "3.2s page speed",
        "+234% time on site"
      ],
      tech: ["React", "TypeScript", "MLS Integration", "Mapbox"],
      image: "/placeholder.svg",
      url: "https://metrogroupdemo.com"
    },
    {
      id: "aurora-wellness",
      title: "Aurora Wellness Spa",
      industry: "local-services",
      challenge: "No online presence hindering customer acquisition and retention",
      solution: "Brand-new website with booking system and membership portal",
      results: [
        "300% increase in bookings",
        "92% customer satisfaction",
        "+180% revenue growth"
      ],
      tech: ["Next.js", "Stripe", "SendGrid", "Airtable"],
      image: "/placeholder.svg",
      url: "https://aurora-wellness-demo.com"
    },
    {
      id: "craftwood-furniture",
      title: "CraftWood Furniture",
      industry: "ecommerce",
      challenge: "Slow Shopify store with high cart abandonment rates",
      solution: "Headless commerce solution with optimized checkout flow",
      results: [
        "+89% conversion rate",
        "67% reduction in bounce rate",
        "$2.1M additional revenue"
      ],
      tech: ["Next.js", "Shopify API", "Stripe", "Klaviyo"],
      image: "/placeholder.svg",
      url: "https://craftwood-demo.com"
    },
    {
      id: "techstart-consulting",
      title: "TechStart Consulting",
      industry: "local-services", 
      challenge: "Complex services poorly explained, low lead conversion",
      solution: "Clear service breakdown with interactive consultation flow",
      results: [
        "+198% qualified leads",
        "4.8/5 user experience rating",
        "+145% consultation bookings"
      ],
      tech: ["React", "TypeScript", "Calendly", "HubSpot"],
      image: "/placeholder.svg",
      url: "https://techstart-demo.com"
    },
    {
      id: "coastal-medical",
      title: "Coastal Medical Center",
      industry: "healthcare",
      challenge: "Difficult appointment scheduling driving patients away",
      solution: "Streamlined patient portal with integrated scheduling and records",
      results: [
        "+76% online scheduling",
        "94% patient satisfaction",
        "2.1s average load time"
      ],
      tech: ["Next.js", "HIPAA-compliant hosting", "Epic API", "Twilio"],
      image: "/placeholder.svg",
      url: "https://coastal-medical-demo.com"
    }
  ];

  const filteredCaseStudies = selectedFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4">Our Work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real projects,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                measurable results
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every website we build is designed to drive growth. Here are some of our recent projects 
              and the impact they've had on our clients' businesses.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Filter className="h-5 w-5 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground mr-4">Filter by industry:</span>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter.id)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-brand transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {study.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{study.title}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{study.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {filters.find(f => f.id === study.industry)?.label}
                      </Badge>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-1">Challenge:</h4>
                      <p className="text-sm text-muted-foreground mb-3">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-sm mb-1">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Results:</h4>
                      <div className="space-y-1">
                        {study.results.map((result, index) => (
                          <div key={index} className="text-sm font-medium text-primary">
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {study.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={study.url} target="_blank" rel="noopener noreferrer">
                          Preview <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                      {/* <Button size="sm" asChild>
                        <Link to={`/work/${study.id}`}>
                          Case Study
                        </Link>
                      </Button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl text-muted-foreground">
                Numbers that matter to your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">127%</div>
                <div className="text-muted-foreground">Avg. Conversion Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2.1s</div>
                <div className="text-muted-foreground">Avg. Load Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to see similar results for your business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every project starts with understanding your unique challenges and goals. 
              Let's discuss how we can help drive your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get your proposal <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Work;