import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Supabase", category: "Database" },
    { name: "Vercel", category: "Hosting" },
    { name: "Stripe", category: "Payments" },
    { name: "Sanity", category: "CMS" },
    { name: "Figma", category: "Design" }
  ];

  const categories = {
    "Frontend": "bg-blue-100 text-blue-800",
    "Framework": "bg-green-100 text-green-800",
    "Language": "bg-purple-100 text-purple-800",
    "Styling": "bg-pink-100 text-pink-800",
    "Backend": "bg-orange-100 text-orange-800",
    "Database": "bg-indigo-100 text-indigo-800",
    "Hosting": "bg-teal-100 text-teal-800",
    "Payments": "bg-emerald-100 text-emerald-800",
    "CMS": "bg-yellow-100 text-yellow-800",
    "Design": "bg-red-100 text-red-800"
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built with modern technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use the latest tools and frameworks to ensure your website is fast, secure, and future-proof.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className={`px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200 ${categories[tech.category as keyof typeof categories]}`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Performance First</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for speed with 90+ Lighthouse scores
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">🔒</span>
              </div>
              <h3 className="font-semibold mb-2">Security Built-In</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security and data protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">📈</span>
              </div>
              <h3 className="font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Architecture that grows with your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;