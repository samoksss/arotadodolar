import { cn } from "@/lib/utils";
import prova1 from "@/assets/prova-faturamento.png";
import prova3 from "@/assets/prova-3.png";
import prova5 from "@/assets/prova-5.png";
import prova6 from "@/assets/prova-6.png";

const PROOFS = [
  { url: prova1, alt: "Print do painel de pagamentos com total recebido em dólar" },
  { url: prova3, alt: "Comprovante de resgate de R$ 1.499,40" },
  { url: prova5, alt: "Comprovante de resgate de R$ 1.934,11" },
  { url: prova6, alt: "Comprovante de resgate de R$ 2.325,16" },
];

export function ProofMarquee({ size = "lg" }: { size?: "lg" | "sm" }) {
  const items = [...PROOFS, ...PROOFS];
  return (
    <div
      aria-hidden={false}
      className="marquee-mask relative w-full select-none overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      <div className={cn("marquee flex w-max", size === "sm" ? "gap-3" : "gap-4")}>
        {items.map((p, i) => (
          <div
            key={`${p.url}-${i}`}
            className={cn(
              "card-glow shrink-0 overflow-hidden rounded-2xl border-primary/60 bg-card p-1.5 shadow-[var(--glow-soft)]",
              size === "sm" ? "w-[170px]" : "w-[260px]",
            )}
          >
            <div
              className={cn(
                "w-full overflow-hidden rounded-xl bg-background",
                size === "sm" ? "h-[118px]" : "h-[180px]",
              )}
            >
              <img
                src={p.url}
                alt={i < PROOFS.length ? p.alt : ""}
                loading="lazy"
                draggable={false}
                className="h-full w-full scale-[1.06] object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
