import { Button } from "@/components/ui/button";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center gradient-hero waffle-pattern pt-16">
    <div className="container mx-auto px-4 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 bg-card rounded-full px-5 py-2 shadow-warm mb-8 animate-float">
          <span className="text-lg">⭐</span>
          <span className="font-body font-bold text-sm text-foreground">Rated #1 Waffle Spot in the City</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-primary leading-tight mb-6">
          Every Bite Feels Like Home
        </h1>

        <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Freshly made Belgian waffles for people who believe dessert deserves the main stage. Walk in. Fall in love.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#menu">See Our Menu</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">Find Us</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
