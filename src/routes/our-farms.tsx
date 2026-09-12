import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import farmers from "@/assets/farmers.jpg";
import bilona from "@/assets/bilona.jpg";

export const Route = createFileRoute("/our-farms")({
  head: () => ({
    meta: [
      { title: "Our Farms & Bilona Process | Dharti Organics Ghee" },
      {
        name: "description",
        content:
          "Meet the 120 partner families in Gujarat and Uttarakhand whose grass-fed Gir and hill cows make our A2 and Pahadi ghee.",
      },
      { property: "og:title", content: "Our Farms & Bilona Process | Dharti Organics" },
      {
        property: "og:description",
        content: "Grass-fed herds, hand-churned curd and slow wood-fire cooking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FarmsPage,
});

const steps = [
  {
    n: "01",
    t: "Free grazing herds",
    d: "Gir cows in Gujarat and hill cows in Uttarakhand graze on open pasture and wild herbs — never on feed concentrate.",
  },
  {
    n: "02",
    t: "Curd set overnight",
    d: "Fresh whole milk is set into curd in earthen pots the same evening it is milked.",
  },
  {
    n: "03",
    t: "Hand bilona churning",
    d: "Curd is churned with a wooden bilona to lift butter, the way it has been done for generations.",
  },
  {
    n: "04",
    t: "Slow wood-fire cook",
    d: "Butter simmers on a low flame until it turns golden and grainy, then it is jarred and sealed.",
  },
];

function FarmsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Our farms
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-semibold sm:text-5xl">
            120 families, two valleys, one very slow recipe
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We buy milk from partner families at a fixed premium, so the people who care
            for the herd earn more than the market rate every single month.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <img
            src={farmers}
            alt="Partner farmer standing with his Gir cows at sunrise"
            loading="lazy"
            width={1200}
            height={800}
            className="mt-10 h-[420px] w-full rounded-[2rem] object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <img
              src={bilona}
              alt="Curd being churned with a wooden bilona in an earthen pot"
              loading="lazy"
              width={1200}
              height={800}
              className="h-[420px] w-full rounded-[2rem] object-cover"
            />
          </Reveal>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="flex gap-5 rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-xl">
                  <span className="font-display text-2xl font-semibold text-primary">{s.n}</span>
                  <div>
                    <h2 className="font-display text-lg font-semibold">{s.t}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Taste the difference a slow process makes
          </h2>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Shop all ghee
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
