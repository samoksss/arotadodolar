import { useEffect, useState } from "react";

type Sale = { name: string; city: string };

// Prova social. Ajuste/adicione nomes e cidades à vontade.
const SALES: Sale[] = [
  { name: "Vitor H.", city: "Florianópolis, SC" },
  { name: "Amanda R.", city: "São Paulo, SP" },
  { name: "Lucas M.", city: "Belo Horizonte, MG" },
  { name: "Juliana S.", city: "Curitiba, PR" },
  { name: "Rafael T.", city: "Rio de Janeiro, RJ" },
  { name: "Camila F.", city: "Porto Alegre, RS" },
  { name: "Bruno A.", city: "Recife, PE" },
  { name: "Larissa P.", city: "Fortaleza, CE" },
  { name: "Gustavo L.", city: "Goiânia, GO" },
  { name: "Beatriz C.", city: "Campinas, SP" },
  { name: "Thiago N.", city: "Salvador, BA" },
  { name: "Marina O.", city: "Brasília, DF" },
  { name: "Fernanda L.", city: "Uberlândia, MG" },
  { name: "Diego S.", city: "Manaus, AM" },
  { name: "Carolina M.", city: "Belém, PA" },
  { name: "Felipe A.", city: "Natal, RN" },
  { name: "Patrícia R.", city: "João Pessoa, PB" },
  { name: "Rodrigo B.", city: "Ribeirão Preto, SP" },
  { name: "Aline C.", city: "Londrina, PR" },
  { name: "Matheus P.", city: "Vitória, ES" },
  { name: "Isabela F.", city: "Maceió, AL" },
  { name: "Leonardo T.", city: "Cuiabá, MT" },
  { name: "Priscila G.", city: "Campo Grande, MS" },
  { name: "André M.", city: "Joinville, SC" },
  { name: "Tatiane S.", city: "São Luís, MA" },
  { name: "Renato O.", city: "Teresina, PI" },
  { name: "Vanessa D.", city: "Aracaju, SE" },
  { name: "Gabriel C.", city: "Niterói, RJ" },
  { name: "Bianca R.", city: "Santos, SP" },
  { name: "Eduardo L.", city: "Caxias do Sul, RS" },
  { name: "Letícia M.", city: "Feira de Santana, BA" },
  { name: "Rafaela P.", city: "Juiz de Fora, MG" },
  { name: "Marcelo A.", city: "Sorocaba, SP" },
  { name: "Nathalia F.", city: "Blumenau, SC" },
  { name: "Henrique B.", city: "Anápolis, GO" },
  { name: "Débora S.", city: "Petrolina, PE" },
  { name: "Fábio T.", city: "Palmas, TO" },
  { name: "Sabrina C.", city: "Maringá, PR" },
  { name: "Igor N.", city: "Volta Redonda, RJ" },
  { name: "Juliana A.", city: "Caruaru, PE" },
  { name: "Wesley M.", city: "Montes Claros, MG" },
  { name: "Carla R.", city: "Chapecó, SC" },
];

const FIRST_DELAY = 4000; // tempo até a 1ª notificação aparecer
const VISIBLE_MS = 5500; // quanto tempo cada notificação fica na tela
const GAP_MIN = 6000; // intervalo mínimo entre notificações
const GAP_MAX = 11000; // intervalo máximo entre notificações

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function SalesNotifications() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [minutes, setMinutes] = useState(3);

  // Evita mismatch de hidratação (SSR): só roda no cliente, após montar.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const cycle = () => {
      setMinutes(randomInt(2, 27));
      setVisible(true);

      hideTimer = setTimeout(() => {
        setVisible(false);
        nextTimer = setTimeout(
          () => {
            setIndex((i) => (i + 1) % SALES.length);
            cycle();
          },
          randomInt(GAP_MIN, GAP_MAX),
        );
      }, VISIBLE_MS);
    };

    const startTimer = setTimeout(cycle, FIRST_DELAY);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [mounted]);

  if (!mounted) return null;

  const sale = SALES[index]!;

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed right-3 top-[4.75rem] z-[60] sm:right-5 sm:top-[5.25rem]"
    >
      <div
        className={`w-[17rem] max-w-[calc(100vw-1.5rem)] rounded-2xl border border-border/70 bg-card/95 px-4 py-3 shadow-[var(--glow-soft)] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[19rem] ${
          visible
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-6 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Bolinha verde piscando */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: "#22c55e" }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
            />
          </span>

          <div className="min-w-0">
            <p className="text-[0.8rem] leading-snug text-foreground">
              <span className="font-semibold">{sale.name}</span> acabou de entrar na Rota 🚀
            </p>
            <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
              {sale.city} · há {minutes} {minutes === 1 ? "minuto" : "minutos"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
