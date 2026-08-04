import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ModulesCarousel } from "@/components/ModulesCarousel";
import { ProofMarquee } from "@/components/ProofMarquee";
import { Header } from "@/components/Header";
import { SalesNotifications } from "@/components/SalesNotifications";
import logoAsset from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Rota do Dólar - Feche seu primeiro cliente gringo" },
      {
        name: "description",
        content:
          "Curso prático pra editores: feche seu primeiro cliente internacional e receba em dólar. Sem call, sem inglês, tudo por texto com scripts prontos.",
      },
      { property: "og:title", content: "A Rota do Dólar - Seu primeiro cliente gringo" },
      {
        property: "og:description",
        content:
          "Do zero ao primeiro dólar: scripts prontos, portfólio com IA e prospecção por texto. R$97 (ou R$82,45 com cupom).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://pay.kirvano.com/4ef59360-c352-4b7f-8bf8-799d877bde07";

const FAQ = [
  {
    q: "Não sei inglês. Funciona pra mim?",
    a: "Funciona melhor ainda. O curso é feito pra quem NÃO fala inglês - você usa scripts prontos, é só copiar, colar e ajustar. Você não precisa falar, precisa enviar.",
  },
  {
    q: "Não tenho portfólio nem experiência.",
    a: "Tem um módulo só pra isso. Você monta um portfólio que fecha cliente do zero, usando IA, mesmo sem nunca ter tido cliente.",
  },
  {
    q: "E as calls? Meu inglês trava.",
    a: "Zero call. Todo o processo é por texto. Você nunca vai precisar aparecer nem falar ao vivo.",
  },
  {
    q: "Isso é golpe?",
    a: "Eu também achava que tudo na internet era golpe. Por isso sou direto: você NÃO precisa comprar pra fechar seu primeiro dólar - dá pra fazer sozinho. O curso é o atalho pra não perder meses no escuro como eu perdi.",
  },
  {
    q: "Quanto tempo até o primeiro cliente?",
    a: "Depende de você fazer as tarefas. O curso é curto e prático de propósito - cada aula termina com uma ação. Quem faz, fecha.",
  },
];

function ScrollCta({ children }: { children: string }) {
  return (
    <Button variant="cta" size="cta" asChild>
      <a href="#oferta">{children}</a>
    </Button>
  );
}

function Index() {
  return (
    <>
      <Header />
      <SalesNotifications />
      <main className="overflow-x-hidden pt-16 sm:pt-[4.5rem]">
      {/* HERO */}
      <section className="halo relative px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-display text-xs font-bold tracking-[0.25em] text-neon">
              A ROTA DO DÓLAR
            </p>
            <h1 className="mt-6 text-[2.1rem] leading-[1.08] sm:text-5xl md:text-6xl">
              Feche seu primeiro cliente gringo e{" "}
              <span className="text-gradient">receba em dólar.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sem entrar em call. Sem falar inglês. Tudo por texto, com scripts prontos pra copiar e
              colar. Mesmo que você nunca tenha trabalhado pra fora do Brasil.
            </p>
            <div className="mt-10 flex justify-center">
              <ScrollCta>QUERO FECHAR MEU PRIMEIRO GRINGO</ScrollCta>
            </div>
            <p className="mt-5 text-sm font-medium text-gold">
              R$97 - ou R$82,45 com o cupom de lançamento
            </p>
          </Reveal>
        </div>
      </section>

      {/* DOR */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-2xl leading-tight sm:text-4xl">
              Você sabe editar. Só nunca te ensinaram a transformar isso em dólar.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              O problema nunca foi a edição - isso você já manda bem. O que trava é outra coisa:
              achar o cliente gringo, mandar a mensagem certa e fechar sem travar no inglês. É aí
              que a maioria desiste antes de ganhar o primeiro centavo. E não é culpa sua: ninguém
              te deu o mapa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* A VIRADA */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="card-glow rounded-3xl bg-card p-7 sm:p-10">
              <h2 className="text-2xl leading-tight sm:text-4xl">
                Eu já estive exatamente onde você está.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Há pouco mais de um ano eu tava com 6 mil reais de dívida e não fazia ideia de como
                ganhar um centavo na internet. Testei de tudo, me ferrei em quase tudo. Até que
                percebi o óbvio: eu sabia editar. Fechei meu primeiro cliente gringo cobrando
                barato, por texto, sem nunca ter falado inglês com ninguém. Hoje faturo mais de{" "}
                <span className="font-semibold text-gold">R$5.000 por mês</span> editando pra fora.
                A Rota do Dólar é o caminho que eu queria ter tido quando comecei - organizado, do
                zero ao primeiro dólar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <h3 className="text-xl sm:text-2xl">Isso não é papo. Aqui está a prova:</h3>
              <div className="mt-6">
                <ProofMarquee />
              </div>

              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Faturamento real editando pra fora do Brasil.
              </p>

              <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-muted-foreground/80">
                Não prometo que você vai faturar isso. Prometo te mostrar o caminho que me trouxe
                até aqui - o resto depende de você fazer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* PRA QUEM É */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card-glow h-full rounded-3xl bg-card p-7">
              <h3 className="text-xl text-foreground sm:text-2xl">É pra você se:</h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Já sabe editar (mesmo básico)",
                  "Quer o primeiro cliente internacional",
                  "Tem medo do inglês e de call",
                  "Tá cansado de teoria e quer passo a passo",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-muted-foreground">
                    <span aria-hidden className="font-bold text-neon">
                      ✓
                    </span>
                    <span className="min-w-0">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-border bg-secondary/40 p-7">
              <h3 className="text-xl text-foreground sm:text-2xl">
                <span className="text-destructive">NÃO</span> é pra você se:
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Não sabe editar ainda",
                  "Quer ficar rico rápido sem esforço",
                  "Procura botão mágico",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-muted-foreground">
                    <span aria-hidden className="font-bold text-muted-foreground">
                      ✕
                    </span>
                    <span className="min-w-0">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-2xl leading-tight sm:text-4xl">
              O caminho completo, do zero ao primeiro dólar.
            </h2>
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <ModulesCarousel />
            </Reveal>
          </div>
          <div className="mt-12 flex justify-center">
            <ScrollCta>QUERO FECHAR MEU PRIMEIRO GRINGO</ScrollCta>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-2xl leading-tight sm:text-4xl">E ainda leva tudo isso junto:</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                t: "Templates de Prospecção Ativa + Fluxograma",
                d: "Os emails exatos que abrem conversa e fecham cliente, em inglês, prontos pra adaptar, com um mapa visual que mostra qual mensagem enviar em cada etapa do lead.",
              },
              {
                t: "Planilha de Controle de Leads",
                d: "Organize seus prospects e follow-ups num só lugar e nunca perca uma oportunidade por esquecimento.",
              },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 120}>
                <div className="card-glow h-full rounded-3xl bg-card p-7">
                  <p className="font-display text-xs font-bold tracking-[0.2em] text-gold">BÔNUS</p>
                  <h3 className="mt-3 text-lg sm:text-xl">{b.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-2xl leading-tight sm:text-4xl">Ficou com alguma dúvida?</h2>
            <Accordion type="single" collapsible className="mt-8">
              {FAQ.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base hover:no-underline sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="halo scroll-mt-8 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="card-glow rounded-3xl bg-card p-7 text-center shadow-[var(--glow-primary)] sm:p-12">
              <h2 className="text-3xl sm:text-5xl">A Rota do Dólar</h2>
              <div className="mt-7">
                <ProofMarquee size="sm" />
              </div>

              <p className="mt-6 text-lg text-muted-foreground line-through">R$97</p>
              <p className="font-display text-5xl font-bold text-gold sm:text-6xl">R$82,45</p>
              <p className="mt-4 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold">
                cupom LANCAMENTO15
              </p>

              <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                No checkout você ainda pode adicionar o Guia de Inglês Funcional (glossário + frases
                prontas pra atender gringo sem saber inglês) por só R$19,90.
              </p>

              <p className="mt-7 rounded-2xl bg-secondary/60 p-5 text-sm leading-relaxed text-foreground">
                Esse preço vale só por 3 dias, junto do lançamento do ebook. Passou, o cupom expira.
                Sem prorrogação - porque senão perde a graça.
              </p>

              <div className="mt-9 flex justify-center">
                <Button variant="cta" size="cta" asChild>
                  <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    GARANTIR MINHA VAGA COM 15% OFF
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Olha, seja sincero comigo: você pode fazer isso sozinho. Tá tudo disponível por aí pra
              quem tem paciência de garimpar por meses. A Rota do Dólar é pra quem não quer perder
              esse tempo. É o mapa que te leva direto ao primeiro cliente. Se quiser ir, tô torcendo
              por você - de um jeito ou de outro.
            </p>
            <div className="mt-10 flex justify-center">
              <ScrollCta>QUERO O ATALHO</ScrollCta>
            </div>
            <p className="mt-8 font-display text-lg text-foreground">- Sam</p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center text-sm text-muted-foreground">
          <img
            src={logoAsset}
            alt="A Rota do Dólar"
            className="h-10 w-auto opacity-90"
            width="40"
            height="40"
          />
          <p>© 2026 A Rota do Dólar</p>
          <a href="mailto:samuelbritomkt@gmail.com" className="hover:text-neon">
            samuelbritomkt@gmail.com
          </a>
        </div>
      </footer>
    </main>
    </>
  );
}
