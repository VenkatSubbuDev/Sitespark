import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, Clock, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProposalDialog from "@/components/ProposalDialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    budget: "",
    timeline: "",
    requirementType: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  // primary recipients for mailto fallback (multiple recipients separated by comma)
  const to = "dalingsubbu@gmail.com,jambulaiah.b@gmail.com";
    const subject = `Proposal request from ${formData.name || formData.email || "Website"}`;
    const body = [`Name: ${formData.name}`, `Email: ${formData.email}`, `Business: ${formData.business}`, `Requirement Type: ${formData.requirementType}`, `Budget: ${formData.budget}`, `Timeline: ${formData.timeline}`, "", "Message:", formData.message].join("\n");

    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    (async () => {
          try {
        if (formId) {
          await fetch(`https://formspree.io/f/${formId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              business: formData.business,
              requirementType: formData.requirementType,
              budget: formData.budget,
              timeline: formData.timeline,
              message: formData.message,
            }),
          });

          toast({ title: "Request sent", description: "We've received your request and will follow up by email." });
              setStatus({ ok: true, msg: "We've received your request and will follow up by email." });
        } else {
          window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          toast({ title: "Email prepared", description: "Your email client should open to send the proposal request." });
              setStatus({ ok: true, msg: "Your email client should open to send the proposal request." });
        }
      } catch (err) {
        console.error(err);
        toast({ title: "Error", description: "Couldn't send request. Opening email client as fallback." });
            setStatus({ ok: false, msg: "Couldn't send request. Opening email client as fallback." });
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      } finally {
        setFormData({
          name: "",
          email: "",
          business: "",
          budget: "",
          timeline: "",
          requirementType: "",
          message: ""
        });
        setLoading(false);
            // keep status visible briefly so animation can be seen
            setTimeout(() => setStatus(null), 1200);
      }
    })();
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
              {/* Contact Form (inline on this page) */}
              <Card>
                <CardHeader>
                  <CardTitle>Get Your Custom Proposal</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your project and we'll send you a detailed proposal with timeline and pricing.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name *</label>
                        <Input value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required disabled={loading} />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required disabled={loading} />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Business</label>
                      <Input value={formData.business} onChange={(e) => handleInputChange("business", e.target.value)} disabled={loading} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Requirement Type</label>
                        <Select value={formData.requirementType} onValueChange={(v) => handleInputChange("requirementType", v)} disabled={loading}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select requirement type" />
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
                        <label className="text-sm font-medium mb-2 block">Budget</label>
                        <Input value={formData.budget} onChange={(e) => handleInputChange("budget", e.target.value)} placeholder="Enter budget or ballpark" disabled={loading} />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(v) => handleInputChange("timeline", v)} disabled={loading}>
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
                      <label className="text-sm font-medium mb-2 block">Business Details *</label>
                      <Textarea value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} rows={4} required disabled={loading} />
                    </div>

                    <div className="flex justify-end items-center space-x-2">
                        <Button variant="outline" onClick={() => setFormData({ name: "", email: "", business: "", budget: "", timeline: "", requirementType: "", message: "" })} disabled={loading}>Cancel</Button>
                        <Button type="submit" disabled={loading}>{loading ? 'Sending...' : (<><Send className="mr-2 h-4 w-4" /> Send Request</>)}</Button>
                    </div>
                    {status ? (
                      <div className={`mt-3 p-3 rounded-md ${status.ok ? 'bg-green-50 text-green-900 animate-toast-success' : 'bg-red-50 text-red-900 animate-toast-error'}`} role="status" aria-live="polite">
                        {status.msg}
                      </div>
                    ) : null}
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
                      <p className="text-sm text-muted-foreground">Based in IST timezone</p>
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

        {/* CTA Section */}
        <section className="py-20 bg-card text-card-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to spark your business growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a custom proposal for your next web project in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ProposalDialog>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <span>Get Your Proposal</span>
                </Button>
              </ProposalDialog>
              <Button size="lg" variant="outline" asChild>
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;