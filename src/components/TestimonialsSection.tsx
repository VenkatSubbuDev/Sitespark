import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "HealthFirst Clinic",
      content: "SiteSpark transformed our online presence completely. Our appointment bookings increased by 450% in just two months after launch. The team's attention to conversion optimization made all the difference.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Premier Properties",
      content: "Working with SiteSpark was seamless. They delivered exactly what they promised - a fast, beautiful website that actually generates leads. Our agent productivity improved dramatically with the new CRM integration.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Isabella Rodriguez",
      role: "Owner",
      company: "Bella's Bistro",
      content: "The new website and online ordering system paid for itself within the first month. SiteSpark understood our business needs and delivered a solution that our customers love using.",
      rating: 5,
      avatar: "IR"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our clients say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with SiteSpark.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-brand transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2 weeks</div>
              <div className="text-muted-foreground">Average Launch</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;