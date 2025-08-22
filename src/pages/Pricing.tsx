import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing - Transparent Web Development Packages | SiteSpark";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Clear, transparent pricing for web design and development. Choose from Starter, Growth, or Scale packages. No hidden fees, no surprises.');
    }
  }, []);

  const packages = [
    {
      name: "Basic",
      price: "$2,500 - $4,500",
      timeline: "2 weeks",
      description: "Perfect for small businesses needing a professional online presence",
      features: [
        "1-3 pages (Home, About, Contact)",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Copy assistance and guidance",
        "Google Analytics setup",
        "30 days of support",
        "Fast 2-week delivery"
      ],
      notIncluded: [
        "Content management system",
        "E-commerce functionality",
        "Custom integrations"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$5,500 - $9,500",
      timeline: "3-4 weeks",
      description: "For businesses ready to scale with advanced features and optimization",
      features: [
        "5-10 pages with custom layouts",
        "Content Management System (CMS)",
        "Advanced SEO optimization",
        "Analytics and conversion tracking",
        "Lead generation forms",
        "Performance optimization",
        "Blog setup (if needed)",
        "60 days of support",
        "Training for content updates"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Custom web applications",
        "Third-party integrations"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$10,000+",
      timeline: "4-8 weeks",
      description: "Custom solutions for complex requirements and enterprise needs",
      features: [
        "Unlimited pages and sections",
        "Custom web applications",
        "Advanced integrations (CRM, ERP, etc.)",
        "E-commerce capabilities",
        "User authentication & portals",
        "API development",
        "Conversion rate optimization",
        "90 days of support",
        "Ongoing optimization plan"
      ],
      notIncluded: [],
      popular: false
    }
  ];

  const addOns = [
    { name: "Professional Branding Kit", price: "$1,500 - $3,000", description: "Logo, color palette, typography system" },
    { name: "Professional Copywriting", price: "$500 - $1,500", description: "Conversion-focused content for all pages" },
    { name: "Professional Photography", price: "$800 - $2,000", description: "Custom photos for your business" },
    { name: "Local SEO Package", price: "$1,000 - $2,500", description: "Google My Business optimization and local citations" },
    { name: "Premium Hosting & Care Plan", price: "$150 - $400/month", description: "Hosting, backups, updates, and monitoring" },
    { name: "E-commerce Integration", price: "$2,000 - $5,000", description: "Full online store setup with payment processing" }
  ];

  const faqs = [
    {
      question: "What's included in the quoted price?",
      answer: "Our quotes include all design, development, testing, and launch costs. You'll also get the specified support period and any training needed. The only additional costs are optional add-ons you choose and third-party services like hosting."
    },
    {
      question: "How do you determine the final price within the range?",
      answer: "The final price depends on specific requirements like number of pages, custom features, integrations needed, and design complexity. We provide a detailed quote after our discovery call so you know exactly what you're paying for."
    },
    {
      question: "What happens if my project needs change during development?",
      answer: "Minor changes are included, but significant scope changes will be discussed and quoted separately. We're flexible and want to ensure the final product meets your needs, but we also need to maintain project timelines and budgets."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We typically split payments into 3 parts: 40% to start, 40% at the design approval stage, and 20% at launch. For larger projects, we can discuss custom payment schedules that work for your cash flow."
    },
    {
      question: "What if I'm not satisfied with the final result?",
      answer: "We include multiple review rounds during development to ensure you're happy with the direction. If you're not satisfied at launch, we'll work with you during the support period to address any concerns. Client satisfaction is our top priority."
    },
    {
      question: "Who owns the website after it's built?",
      answer: "You own everything - the design, code, content, and domain. We provide all source files and documentation. You're never locked in with us, though we hope you'll choose us for ongoing support and future projects."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, through our Care Plans. These include hosting, regular backups, security updates, performance monitoring, and content updates. Pricing varies based on the complexity of your site and level of support needed."
    },
    {
      question: "How long does each project type take?",
      answer: "Starter websites take 2 weeks, Growth projects take 3-4 weeks, and Scale projects take 4-8 weeks depending on complexity. Timeline starts after content is finalized and deposit is received. We'll give you a specific timeline in your proposal."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4">Transparent Pricing</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Clear pricing,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                no surprises
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the package that fits your needs and budget. Every quote includes exactly 
              what you'll get, when you'll get it, and what it costs. No hidden fees, ever.
            </p>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.name} 
                  className={`bg-card rounded-lg p-8 shadow-soft relative ${
                    pkg.popular ? 'border-2 border-primary shadow-brand' : ''
                  }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground mb-4">{pkg.timeline}</div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-sm mb-3 text-muted-foreground">Not included:</h4>
                      <div className="space-y-2">
                        {pkg.notIncluded.map((item, i) => (
                          <div key={i} className="text-xs text-muted-foreground">
                            • {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Add-ons</h2>
              <p className="text-xl text-muted-foreground">
                Enhance your website with these professional services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  {/* <div className="text-primary font-bold mb-3">{addon.price}</div> */}
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing and process
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a detailed proposal with exact pricing, timeline, and deliverables for your project. 
              No obligations, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">
                  Get your proposal <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/work">See our work</Link>
              </Button>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;