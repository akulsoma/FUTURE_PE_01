const menuItems = [
  { emoji: "🧇", name: "The Classic Belgian", desc: "Crispy outside, fluffy inside, dusted with powdered sugar and served with maple syrup. The original. The legend.", price: "₹149" },
  { emoji: "🍓", name: "Berry Blast", desc: "Fresh strawberries, blueberries, whipped cream, and a drizzle of berry compote on a golden waffle base.", price: "₹199" },
  { emoji: "🍫", name: "Choco Overload", desc: "Dark chocolate sauce, Nutella drizzle, chocolate chips, and a scoop of chocolate ice cream. Not for the faint-hearted.", price: "₹229" },
  { emoji: "🍌", name: "Banana Caramel Dream", desc: "Caramelized bananas, warm caramel sauce, crushed walnuts, and vanilla cream. One bite and you'll understand.", price: "₹209" },
  { emoji: "🥭", name: "Mango Fiesta", desc: "Alphonso mango slices, mango coulis, coconut cream, and a hint of cardamom. Summer in every bite.", price: "₹219", tag: "Seasonal" },
  { emoji: "🌶️", name: "The Rebel", desc: "Crispy waffle with herbed cream cheese, jalapeños, caramelized onions, and a fried egg on top. Yes, we went there.", price: "₹249", tag: "Savoury" },
];

const perks = [
  { emoji: "🎯", title: "Built for You", desc: "Customise your waffle your way — toppings, sauces, scoops. You decide." },
  { emoji: "⚡", title: "Fast & Fresh", desc: "From batter to plate in under 5 minutes. Fresh. Hot. Always." },
  { emoji: "💰", title: "Worth Every Rupee", desc: "Premium ingredients at prices that make sense. Indulge without guilt." },
];

const MenuSection = () => (
  <section id="menu" className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
          The Menu That Started It All
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
          Each waffle is a little world of its own. Find your favourite.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-4xl">{item.emoji}</span>
              <span className="gradient-golden text-primary-foreground font-body font-bold text-sm px-4 py-1 rounded-full">
                {item.price}
              </span>
            </div>
            <h3 className="font-display text-xl text-primary mb-1">
              {item.name}
              {item.tag && (
                <span className="ml-2 text-xs font-body font-bold bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              )}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mt-2 flex-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Perks */}
      <div className="max-w-5xl mx-auto">
        <h3 className="font-display text-2xl sm:text-3xl text-primary text-center mb-12">
          Why People Keep Coming Back
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perks.map((p) => (
            <div key={p.title} className="text-center">
              <span className="text-4xl block mb-3">{p.emoji}</span>
              <h4 className="font-display text-lg text-primary mb-2">{p.title}</h4>
              <p className="font-body text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MenuSection;
