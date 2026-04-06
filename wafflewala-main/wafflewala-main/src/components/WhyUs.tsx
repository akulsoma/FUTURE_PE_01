const badges = [
  { icon: "✅", text: "50+ Unique Toppings" },
  { icon: "✅", text: "Freshly Baked in Under 5 Minutes" },
  { icon: "✅", text: "Vegetarian-Friendly Menu" },
  { icon: "✅", text: "Open 7 Days a Week" },
];

const WhyUs = () => (
  <section className="py-20 bg-accent/50">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="font-display text-3xl sm:text-4xl text-primary text-center mb-12">
        Why WaffleWala Hits Different
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {badges.map((b) => (
          <div
            key={b.text}
            className="flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-warm font-body font-semibold text-foreground"
          >
            <span className="text-xl">{b.icon}</span>
            {b.text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
