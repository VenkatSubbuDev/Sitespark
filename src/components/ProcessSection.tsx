import { Search, Palette, Code, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discover",
      description: "We dive deep into your business goals, target audience, and competitive landscape to create a strategic foundation.",
      duration: "1-2 days",
      deliverables: ["Strategy workshop", "User personas", "Competitor analysis", "Technical requirements"]
    },
    {
      step: "02", 
      icon: Palette,
      title: "Design",
      description: "Our designers create conversion-focused mockups that align with your brand and engage your ideal customers.",
      duration: "3-5 days",
      deliverables: ["Wireframes", "Visual designs", "Mobile layouts", "Interactive prototypes"]
    },
    {
      step: "03",
      icon: Code,
      title: "Build",
      description: "We code your site using modern technologies, ensuring fast performance, security, and scalability from day one.",
      duration: "1-2 weeks",
      deliverables: ["Custom development", "CMS integration", "Quality testing", "Performance optimization"]
    },
    {
      step: "04",
      icon: Rocket,
      title: "Launch",
      description: "We handle the technical deployment, provide training, and monitor performance to ensure a smooth launch.",
      duration: "1-2 days",
      deliverables: ["Domain setup", "SSL certificates", "Analytics setup", "Training & handover"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our proven 4-step process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we follow a streamlined process that delivers results on time and on budget.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-brand transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.step}
                    </span>
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <step.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium text-primary">{step.duration}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm text-muted-foreground mb-2 block">Key deliverables:</span>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-xs">
                            <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Connection Dot */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-3 h-3 bg-primary rounded-full transform -translate-y-1/2 z-20 shadow-glow"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Total timeline:</span> 2-3 weeks from start to launch
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;