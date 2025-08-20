import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Senior developers • Fast delivery • Real results
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Websites that{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                spark business
              </span>{" "}
              growth
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              We design and build fast, conversion-focused sites and web apps for ambitious businesses. 
              Turn visitors into customers with proven strategies and modern tech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Get a proposal
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/work">
                  <Play className="mr-2 h-5 w-5" />
                  See our work
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-foreground mr-2">50+</span>
                Projects delivered
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-foreground mr-2">98%</span>
                Client satisfaction
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-foreground mr-2">2 weeks</span>
                Average launch time
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <img 
                src={heroImage} 
                alt="Modern website designs on laptop and mobile devices" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-soft text-sm font-medium animate-bounce">
              ⚡ Fast loading
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-lg shadow-soft text-sm">
              📈 Higher conversions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;