import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, Clock, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      timeline: "",
      projectType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick questions and instant responses",
      action: "Message us",
      href: "https://wa.me/1234567890"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed project discussions",
      action: "hello@sitespark.com",
      href: "mailto:hello@sitespark.com"
    },
    {
      icon: Clock,
      title: "Book a Call",
      description: "30-minute strategy session",
      action: "Schedule now",
      href: "https://calendly.com/sitespark"
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
                Let's <span className="bg-gradient-primary bg-clip-text text-transparent">spark</span> something amazing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to grow your business with a website that works? Get a custom proposal within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-brand transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <method.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Get Your Custom Proposal</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your project and we'll send you a detailed proposal with timeline and pricing.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Project Type</label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Website Design</SelectItem>
                            <SelectItem value="webapp">Web Application</SelectItem>
                            <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                            <SelectItem value="redesign">Website Redesign</SelectItem>
                            <SelectItem value="care">Care Plan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Budget Range</label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                            <SelectItem value="20k-plus">$20,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-months">Within 2 months</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Details *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Get My Proposal
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Company Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose SiteSpark?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Senior Developers</h4>
                        <p className="text-sm text-muted-foreground">Our team has 10+ years of experience building high-performing websites.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Fast Delivery</h4>
                        <p className="text-sm text-muted-foreground">Most projects launch within 2-3 weeks without compromising quality.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Real Results</h4>
                        <p className="text-sm text-muted-foreground">Our clients see measurable improvements in conversions and performance.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Location & Timezone</h4>
                      <p className="text-sm text-muted-foreground">Based in EST timezone</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Response Time</h4>
                      <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;