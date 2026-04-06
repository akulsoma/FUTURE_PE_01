const features = [
  { emoji: "🧇", title: "Made Fresh", desc: "Every waffle is made to order. No reheating. Ever." },
  { emoji: "🍓", title: "Real Toppings", desc: "We use real fruit, real cream, real chocolate. Always." },
  { emoji: "💛", title: "Crafted with Love", desc: "WaffleWala started in a home kitchen. That warmth never left." },
];

const IntroSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary text-center mb-16">
        Not Just Waffles. A Whole Mood.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card rounded-2xl p-8 text-center shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-5xl block mb-4">{f.emoji}</span>
            <h3 className="font-display text-xl text-primary mb-3">{f.title}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <blockquote className="max-w-3xl mx-auto text-center">
        <p className="font-body italic text-xl sm:text-2xl text-foreground/80 leading-relaxed">
          "We don't do boring. We do golden, crispy, loaded waffles that make you forget everything else."
        </p>
      </blockquote>
    </div>
  </section>
);

export default IntroSection;
