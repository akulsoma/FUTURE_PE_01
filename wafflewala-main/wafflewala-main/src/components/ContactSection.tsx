import { Button } from "@/components/ui/button";

const stats = [
  { icon: "🏆", text: "500+ Happy Customers This Month" },
  { icon: "⭐", text: "4.9 Stars on Google Reviews" },
  { icon: "🧇", text: "1000+ Waffles Served Weekly" },
  { icon: "📍", text: "Located in the Heart of the City" },
];

const testimonials = [
  {
    quote: "Choco Overload changed my life. I've come back 6 times in 2 weeks. Zero regrets.",
    name: "Priya M.",
    city: "Hyderabad",
  },
  {
    quote: "Finally a café that gets dessert right. The Berry Blast is absolutely unreal. Must visit!",
    name: "Arjun K.",
    city: "Bangalore",
  },
  {
    quote: "Brought my whole team here for our office celebration. Everyone loved it. WaffleWala for life!",
    name: "Sneha R.",
    city: "Mumbai",
  },
];

const ContactSection = () => (
  <section id="contact">
    {/* CTA */}
    <div className="gradient-golden py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
          Come In. We've Been Expecting You.
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
          Whether it's a solo treat, a date, or a group hangout — WaffleWala is your place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            📍 Get Directions
          </Button>
          <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            📞 Call to Pre-Order
          </Button>
        </div>
      </div>
    </div>

    {/* Trust strip */}
    <div className="bg-primary py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {stats.map((s) => (
            <div key={s.text} className="flex items-center gap-2 text-primary-foreground font-body font-semibold text-sm sm:text-base">
              <span className="text-xl">{s.icon}</span>
              {s.text}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-primary text-center mb-16">
          Real People. Real Bites. Real Love.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-all duration-300">
              <div className="text-secondary text-lg mb-4">⭐⭐⭐⭐⭐</div>
              <p className="font-body text-foreground/80 italic leading-relaxed mb-6">"{t.quote}"</p>
              <p className="font-body font-bold text-primary">
                — {t.name}, <span className="font-normal text-muted-foreground">{t.city}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Urgency CTA */}
    <div className="bg-accent py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-primary mb-4">
          🔥 Weekend Special — Buy 2 Waffles, Get 1 Free
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto mb-8">
          Only valid Saturday & Sunday, while stocks last. Don't miss out — walk in or pre-order now.
        </p>
        <Button variant="golden" size="xl">
          Grab the Deal →
        </Button>
        <p className="font-body text-sm text-muted-foreground mt-6">
          📍 WaffleWala — MG Road, Hyderabad | Open 11AM–10PM, All Days
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
