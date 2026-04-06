const Footer = () => (
  <footer className="bg-primary py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-10">
        <h3 className="font-display text-2xl text-primary-foreground mb-2">WaffleWala</h3>
        <p className="font-body text-primary-foreground/70">Love at First Bite 💛</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {["Menu", "Find Us", "Instagram", "Contact"].map((link) => (
          <a
            key={link}
            href={link === "Menu" ? "#menu" : link === "Contact" || link === "Find Us" ? "#contact" : "#"}
            className="font-body text-primary-foreground/70 hover:text-secondary transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <p className="font-body text-sm text-primary-foreground/50 text-center mb-2">
        MG Road, Hyderabad, Telangana — Open 11AM to 10PM
      </p>
      <p className="font-body text-sm text-primary-foreground/50 text-center mb-4">
        © 2025 WaffleWala. All Rights Reserved.
      </p>
      <p className="font-body text-xs text-primary-foreground/40 text-center">
        Made with 🧇 and a lot of love.
      </p>
    </div>
  </footer>
);

export default Footer;
