function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24 bg-card">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025{" "}
            <span className="text-foreground font-semibold">
              VillalobosCoder
            </span>
            .
            <br />
            <a
              href="#aboutme"
              className="text-primary hover:text-primary/80 transition-colors font-medium mt-2 inline-block"
            >
              Contactame
            </a>
          </p>
        </div>
      </div>
    </footer>   
  );
}

export default Footer;
