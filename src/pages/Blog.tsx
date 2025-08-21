import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - Web Development Tips & Insights | SiteSpark";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on web development, conversion optimization, and growing your business online. Practical tips from the SiteSpark team.');
    }
  }, []);

  const blogPosts = [
    {
      id: "choosing-cms-2025",
      title: "Choosing the Right CMS for Your Business in 2025",
      excerpt: "A comprehensive guide to selecting the perfect content management system for your website, comparing headless vs traditional options.",
      author: "Alex Rivera",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Technical",
      tags: ["CMS", "Content Management", "Technical Guide"],
      featured: true
    },
    {
      id: "website-launch-timeline",
      title: "What to Expect: Your Website Launch Timeline",
      excerpt: "From discovery to go-live, here's exactly what happens during each phase of your website project and how long each step takes.",
      author: "Jordan Kim",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Process",
      tags: ["Project Management", "Timeline", "Client Guide"]
    },
    {
      id: "conversion-essentials",
      title: "10 Essential Elements Every Converting Website Needs",
      excerpt: "The proven elements that turn visitors into customers, backed by conversion data from 100+ websites we've built.",
      author: "Alex Rivera",
      date: "2024-03-05",
      readTime: "12 min read",
      category: "Conversion",
      tags: ["Conversion Optimization", "UX Design", "Best Practices"],
      featured: true
    },
    {
      id: "performance-optimization",
      title: "Why Your Website Speed Matters More Than You Think",
      excerpt: "How page speed affects everything from user experience to search rankings, plus actionable tips to improve your site's performance.",
      author: "Jordan Kim",
      date: "2024-02-28",
      readTime: "10 min read",
      category: "Performance",
      tags: ["Performance", "SEO", "User Experience"]
    },
    {
      id: "ecommerce-trends-2025",
      title: "E-commerce Trends That Will Define 2025",
      excerpt: "From headless commerce to AI-powered personalization, discover the trends shaping the future of online retail.",
      author: "Alex Rivera",
      date: "2024-02-20",
      readTime: "9 min read",
      category: "E-commerce",
      tags: ["E-commerce", "Trends", "Future of Retail"]
    },
    {
      id: "accessibility-business-case",
      title: "The Business Case for Web Accessibility",
      excerpt: "Why accessible websites aren't just the right thing to do—they're also better for business, SEO, and user experience.",
      author: "Jordan Kim",
      date: "2024-02-15",
      readTime: "7 min read",
      category: "Accessibility",
      tags: ["Accessibility", "WCAG", "Inclusive Design"]
    }
  ];

  const categories = ["All", "Technical", "Process", "Conversion", "Performance", "E-commerce", "Accessibility"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4">SiteSpark Blog</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights to grow{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                your business online
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert tips on web development, conversion optimization, and digital strategy 
              from the SiteSpark team. Practical insights you can apply today.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-brand transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm opacity-90">Featured Article</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/blog/${post.id}`}>
                          Read more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">All Articles</h2>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-card rounded-lg p-6 shadow-soft hover:shadow-brand transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-48">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/blog/${post.id}`}>
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay updated with our latest insights
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get practical web development tips, conversion strategies, and business growth insights 
              delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to implement these strategies?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's apply these proven techniques to your website and drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get your proposal <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/work">See our work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;