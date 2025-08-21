import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Zap, Globe, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About SiteSpark - Web Design & Development Studio";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the SiteSpark team - two senior developers passionate about building fast, conversion-focused websites that drive real business growth.');
    }
  }, []);

  const team = [
    {
      name: "Alex Rivera",
      role: "Lead Developer & Co-Founder",
      specialties: ["React/Next.js", "Performance Optimization", "E-commerce"],
      bio: "8 years building scalable web applications. Previously led development at two successful startups.",
      image: "/placeholder.svg"
    },
    {
      name: "Jordan Kim", 
      role: "UI/UX Developer & Co-Founder",
      specialties: ["User Experience", "Conversion Optimization", "Accessibility"],
      bio: "Expert in user-centered design with a track record of increasing client conversions by 40%+ on average.",
      image: "/placeholder.svg"
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Clarity First",
      description: "No jargon, no confusion. We communicate in plain English and deliver exactly what we promise."
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description: "Fast websites, fast delivery, fast response times. We respect your time and your users' attention spans."
    },
    {
      icon: Users,
      title: "Measurable Outcomes",
      description: "Every project includes clear KPIs. We track real metrics like conversions, loading speed, and user engagement."
    },
    {
      icon: Globe,
      title: "Accessible by Design",
      description: "We build for everyone. WCAG 2.1 AA compliance isn't optional—it's how we ensure your reach is maximized."
    }
  ];

  const tools = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Shopify", 
    "Stripe", "Vercel", "Supabase", "Figma", "Webflow", "Google Analytics"
  ];

  const milestones = [
    { year: "2021", event: "SiteSpark founded by Alex & Jordan" },
    { year: "2022", event: "Delivered 50+ websites with 95% client satisfaction" },
    { year: "2023", event: "Expanded to web applications and e-commerce solutions" },
    { year: "2024", event: "100+ projects completed, focusing on conversion optimization" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4">About SiteSpark</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We spark measurable growth with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                clean code and clear design
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Two senior developers on a mission to help ambitious businesses grow online. 
              We combine beautiful design with conversion-focused strategy and rock-solid development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Work with us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/work">See our work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Too many businesses settle for websites that look good but don't perform. 
                We believe every website should be a growth engine—fast, accessible, conversion-focused, 
                and built to scale. That's what we deliver, project after project.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
              <p className="text-xl text-muted-foreground">
                Two experienced developers who care about your success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="bg-card rounded-lg p-8 shadow-soft">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-muted-foreground text-center mb-4">{member.role}</p>
                  <p className="text-center mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                What drives every decision we make
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Partners */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Technologies</h2>
              <p className="text-xl text-muted-foreground">
                We use the best tools to build the best websites
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {tools.map((tool) => (
                <Badge key={tool} variant="outline" className="text-base py-2 px-4">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                Building a track record of success
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-center mb-8 last:mb-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-6">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-8 bg-border ml-8 -mb-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to work with a team that gets results?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and show you exactly how we can help your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">
                  Start your project <ArrowRight className="ml-2 h-5 w-5" />
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

export default About;