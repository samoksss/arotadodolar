import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/95 backdrop-blur-md shadow-[var(--glow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="A Rota do Dólar"
            className="h-9 w-auto sm:h-10"
            width="40"
            height="40"
          />
          <span className="font-display hidden text-sm font-bold tracking-tight text-foreground sm:inline">
            A Rota do Dólar
          </span>
        </a>

        <Button variant="cta" size="sm" asChild>
          <a href="#oferta">Garantir vaga</a>
        </Button>
      </div>
    </header>
  );
}
