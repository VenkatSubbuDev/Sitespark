import { Zap, TrendingUp, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValuePillars = () => {
  const pillars = [
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast loading times and optimal Core Web Vitals for better search rankings and user experience.",
      features: ["90+ Lighthouse scores", "CDN optimization", "Image compression", "Code splitting"]
    },
    {
      icon: TrendingUp,
      title: "Conversion",
      description: "Data-driven design and psychology-based UX that turns visitors into customers and customers into advocates.",
      features: ["A/B tested layouts", "Clear call-to-actions", "Trust signals", "Mobile optimization"]
    },
    {
      icon: Settings,
      title: "Scalability",
      description: "Future-proof architecture and modern tech stack that grows with your business without breaking the bank.",
      features: ["Headless CMS", "API integrations", "Component libraries", "Easy maintenance"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why businesses choose SiteSpark
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build websites. We build digital growth engines that deliver measurable results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group hover:shadow-brand transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                
                <ul className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;