import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import mod1 from "@/assets/modulo-1.png.asset.json";
import mod2 from "@/assets/modulo-2.png.asset.json";
import mod3 from "@/assets/modulo-3.png.asset.json";
import mod4 from "@/assets/modulo-4.png.asset.json";

const MODULES = [
  {
    image: mod1.url,
    alt: "Capa do módulo Introdução",
    step: "ETAPA 01 · INTRODUÇÃO",
    lessons: [
      "Boas-vindas",
      "O que esperar do curso",
      "Links para criar seu portfólio",
      "(BÔNUS) Scripts + Fluxograma + Planilha",
    ],
  },
  {
    image: mod2.url,
    alt: "Capa do módulo Iniciante",
    step: "ETAPA 02 · INICIANTE",
    lessons: [
      "Posicionamento",
      "Quanto cobrar para iniciar",
      "Montando um portfólio com IA, de graça",
      "Como receber pagamentos",
    ],
  },
  {
    image: mod3.url,
    alt: "Capa do módulo Intermediário",
    step: "ETAPA 03 · INTERMEDIÁRIO",
    lessons: [
      "Prospecção passiva",
      "Como fechar um projeto por chat",
      "Como declarar impostos sendo editor",
    ],
  },
  {
    image: mod4.url,
    alt: "Capa do módulo Avançado",
    step: "ETAPA 04 · AVANÇADO",
    lessons: [
      "Prospecção ativa",
      "Estratégia YT Jobs",
      "Scripts irresistíveis",
      "Como ter clientes recorrentes",
    ],
  },
];

export function ModulesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: false, containScroll: false, duration: 40 }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 items-center py-6">
          {MODULES.map((m, i) => {
            const active = i === current;
            return (
              <CarouselItem key={m.step} className="basis-[72%] pl-4 sm:basis-[44%] lg:basis-[26%]">
                <article
                  className={cn(
                    "flex h-full flex-col overflow-hidden rounded-3xl border bg-card/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
                    active
                      ? "scale-100 border-primary opacity-100 shadow-[var(--glow-primary)]"
                      : "scale-[0.85] border-border/60 opacity-50 shadow-none blur-[1px]",
                  )}
                >

                  <img
                    src={m.image}
                    alt={m.alt}
                    loading="lazy"
                    width={480}
                    height={720}
                    className="aspect-[2/3] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-3 px-5 pt-4 pb-6">
                    <p className="font-display text-[0.65rem] font-bold tracking-[0.18em] text-gold">
                      {m.step}
                    </p>
                    <ul className="space-y-2.5">
                      {m.lessons.map((l) => (
                        <li key={l} className="flex gap-2.5 text-[0.8rem] text-muted-foreground">
                          <span aria-hidden className="text-primary">
                            ›
                          </span>
                          <span className="min-w-0">{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>

              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="mt-9 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Módulo anterior"
          onClick={() => api?.scrollPrev()}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {MODULES.map((m, i) => (
            <button
              key={m.step}
              type="button"
              aria-label={`Ir para ${m.step}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === current ? "w-7 bg-primary" : "w-2 bg-muted hover:bg-neon",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximo módulo"
          onClick={() => api?.scrollNext()}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          ›
        </button>
      </div>
    </div>
  );
}
