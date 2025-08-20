import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Monitor, ShoppingBag, Shield, Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "websites",
      icon: Globe,
      title: "Website Design & Development",
      subtitle: "Professional business websites that convert",
      description: "Get a custom website that represents your brand perfectly and turns visitors into customers. We focus on conversion optimization, mobile responsiveness, and search engine visibility.",
      deliverables: [
        "Custom responsive design",
        "Content management system",
        "SEO optimization",
        "Performance optimization",
        "Analytics integration",
        "Contact forms & CTAs",
        "Social media integration",
        "Security implementation"
      ],
      process: [
        "Brand & competitor analysis",
        "Wireframe & design mockups",
        "Custom development",
        "Content integration",
        "Testing & optimization",
        "Launch & training"
      ],
      timeline: "2-3 weeks",
      pricing: "$2,999 - $7,999",
      faqs: [
        {
          question: "Do you provide content writing?",
          answer: "Yes, we offer professional copywriting services as an add-on to ensure your messaging converts."
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely. All our websites are built mobile-first and fully responsive across all devices."
        }
      ]
    },
    {
      id: "web-apps",
      icon: Monitor,
      title: "Web Applications",
      subtitle: "Custom dashboards and business tools",
      description: "Streamline your operations with custom web applications. From client portals to internal dashboards, we build tools that save time and improve efficiency.",
      deliverables: [
        "Custom user interface",
        "User authentication system",
        "Database design & setup",
        "API development",
        "Role-based permissions",
        "Data visualization",
        "Third-party integrations",
        "Admin panel"
      ],
      process: [
        "Requirements analysis",
        "System architecture design",
        "Database schema design",
        "Frontend development",
        "Backend development",
        "Integration testing",
        "Deployment & monitoring"
      ],
      timeline: "4-8 weeks",
      pricing: "$4,999 - $19,999",
      faqs: [
        {
          question: "Can you integrate with our existing systems?",
          answer: "Yes, we specialize in API integrations and can connect your web app to most existing business systems."
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes, we offer maintenance plans to ensure your application stays updated and secure."
        }
      ]
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      subtitle: "Complete online stores that sell",
      description: "Launch your online store with confidence. We build e-commerce platforms that provide seamless shopping experiences and drive sales growth.",
      deliverables: [
        "Product catalog management",
        "Secure checkout process",
        "Payment gateway integration",
        "Inventory management",
        "Order management system",
        "Customer accounts",
        "Shipping calculations",
        "Tax configuration"
      ],
      process: [
        "Store planning & strategy",
        "Product catalog setup",
        "Payment integration",
        "Shipping configuration",
        "Security implementation",
        "Testing & launch"
      ],
      timeline: "3-6 weeks",
      pricing: "$3,999 - $14,999",
      faqs: [
        {
          question: "Which payment methods can you integrate?",
          answer: "We integrate all major payment processors including Stripe, PayPal, Square, and more."
        },
        {
          question: "Can you migrate from our existing platform?",
          answer: "Yes, we can migrate your products, customers, and order history from most e-commerce platforms."
        }
      ]
    },
    {
      id: "care-plans",
      icon: Shield,
      title: "Website Care Plans",
      subtitle: "Ongoing maintenance and support",
      description: "Keep your website secure, fast, and up-to-date with our comprehensive care plans. Focus on your business while we handle the technical details.",
      deliverables: [
        "Security updates & monitoring",
        "Performance optimization",
        "Content updates",
        "Technical support",
        "Backup management",
        "Uptime monitoring",
        "Analytics reporting",
        "Emergency response"
      ],
      process: [
        "Initial site audit",
        "Backup setup",
        "Monitoring implementation",
        "Regular maintenance",
        "Monthly reporting",
        "Ongoing optimization"
      ],
      timeline: "Ongoing monthly service",
      pricing: "$299 - $899/month",
      faqs: [
        {
          question: "What's included in the basic plan?",
          answer: "Security updates, backups, uptime monitoring, and basic content updates up to 2 hours per month."
        },
        {
          question: "Do you offer emergency support?",
          answer: "Yes, all care plans include priority emergency support with response within 4 hours."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Services that <span className="bg-gradient-primary bg-clip-text text-transparent">spark growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From simple business websites to complex web applications, we deliver solutions that drive real business results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                          <service.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold">{service.title}</h2>
                          <p className="text-muted-foreground">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="font-semibold text-primary mb-2">Timeline</div>
                          <div className="text-sm">{service.timeline}</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="font-semibold text-primary mb-2">Investment</div>
                          <div className="text-sm">{service.pricing}</div>
                        </div>
                      </div>
                      
                      <Button size="lg" asChild>
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </div>
                    
                    {/* Details */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="space-y-6">
                        {/* Deliverables */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              <Check className="h-5 w-5 text-primary mr-2" />
                              What's Included
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.deliverables.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                        
                        {/* Process */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              <ArrowRight className="h-5 w-5 text-primary mr-2" />
                              Our Process
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ol className="space-y-2">
                              {service.process.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-center text-sm">
                                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                                    {stepIndex + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your project and create a custom solution that fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Get Your Proposal</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-border hover:bg-card" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;