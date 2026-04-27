import { useState } from "react";

const services = [
  {
    title: "Recurring upkeep",
    desc: "Weekly or bi-weekly visits to keep kitchens, baths, and living areas guest-ready.",
    icon: "✓",
  },
  {
    title: "Deep sanitizing",
    desc: "Baseboards, appliances, and high-touch surfaces — demo copy for a deep-clean upsell.",
    icon: "✦",
  },
  {
    title: "Move-day support",
    desc: "Empty-home pass before listing photos or a sparkle clean before you unpack.",
    icon: "→",
  },
];

const packages = [
  {
    name: "Basic Refresh",
    price: 129,
    blurb: "Ideal for apartments and quick turnarounds.",
    features: ["2 hours on-site", "Kitchen + bath focus", "Floors & surfaces", "Eco supplies (demo)"],
    highlight: false,
  },
  {
    name: "Deep Clean",
    price: 249,
    blurb: "Most popular for families resetting the whole home.",
    features: ["4 hours on-site", "Inside appliances (mock)", "Detail dusting", "Glass & mirrors"],
    highlight: true,
  },
  {
    name: "Move-Out Clean",
    price: 349,
    blurb: "Landlord checklist friendly — fictional scope for layout.",
    features: ["Full top-to-bottom", "Cabinet fronts", "Baseboards", "Optional garage sweep"],
    highlight: false,
  },
];

export default function App() {
  const [quoteSent, setQuoteSent] = useState(false);

  const handleQuote = (e) => {
    e.preventDefault();
    setQuoteSent(true);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b-4 border-emerald-400 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <a href="#" className="min-w-0">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-emerald-700">Northwind metro</p>
            <p className="truncate text-2xl font-black tracking-tight text-slate-900">
              Nova<span className="text-sky-600">clean</span>
            </p>
          </a>
          <nav className="hidden flex-1 justify-center gap-8 text-sm font-bold text-slate-600 md:flex">
            <a href="#services" className="border-b-2 border-transparent pb-1 hover:border-sky-500 hover:text-slate-900">
              Services
            </a>
            <a href="#pricing" className="border-b-2 border-transparent pb-1 hover:border-sky-500 hover:text-slate-900">
              Packages
            </a>
            <a href="#area" className="border-b-2 border-transparent pb-1 hover:border-sky-500 hover:text-slate-900">
              Area
            </a>
            <a href="#quote" className="border-b-2 border-transparent pb-1 hover:border-sky-500 hover:text-slate-900">
              Quote
            </a>
          </nav>
          <a
            href="#quote"
            className="shrink-0 bg-slate-900 px-4 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white transition hover:bg-slate-800 sm:text-sm"
          >
            Book
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}>
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rotate-12 bg-emerald-100/80 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <span className="inline-block -rotate-2 border-2 border-sky-200 bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky-800">
              Family-owned · demo copy
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              We reset <span className="italic text-emerald-600">rooms</span>, not moods.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-slate-600 lg:mx-0">
              Nova is written in the voice of a real crew leader: on-time vans, checklists you can read, and a quote form
              that never leaves your browser in this mock.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#quote" className="bg-emerald-500 px-8 py-3 text-sm font-extrabold text-white shadow-[4px_4px_0_0_theme(colors.slate.900)] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_theme(colors.slate.900)]">
                Schedule a walkthrough
              </a>
              <a href="#pricing" className="border-2 border-slate-900 bg-white px-8 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50">
                Compare packages
              </a>
            </div>
          </div>
          <div className="relative mx-auto mt-14 max-w-lg lg:absolute lg:right-6 lg:top-1/2 lg:mt-0 lg:max-w-md lg:-translate-y-1/2">
            <div className="-rotate-1 border-4 border-slate-900 bg-sky-50 p-5 shadow-[12px_12px_0_0_theme(colors.emerald.400)]">
              <div className="grid grid-cols-2 gap-3">
                <div className="border-2 border-dashed border-slate-400 bg-white p-3">
                  <p className="text-[10px] font-extrabold uppercase text-slate-500">Before</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-1.5 bg-slate-300" />
                    <div className="h-1.5 w-4/5 bg-slate-300" />
                  </div>
                </div>
                <div className="border-2 border-emerald-500 bg-emerald-50 p-3">
                  <p className="text-[10px] font-extrabold uppercase text-emerald-800">After</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-1.5 bg-white" />
                    <div className="h-1.5 w-4/5 bg-white" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-wider text-slate-500">Polaroid-style mock · no photos</p>
            </div>
            <div className="absolute -left-4 -top-4 hidden w-28 rotate-6 border-2 border-slate-900 bg-amber-100 p-2 text-left text-[10px] font-bold uppercase leading-tight text-amber-950 sm:block">
              Next opening: Tue AM (fake)
            </div>
          </div>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t-2 border-slate-900 pt-8 lg:max-w-lg">
            <div>
              <dt className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Cleans (demo)</dt>
              <dd className="text-3xl font-black text-slate-900">500+</dd>
            </div>
            <div>
              <dt className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Reply window</dt>
              <dd className="text-3xl font-black text-sky-600">24h</dd>
            </div>
            <div>
              <dt className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Rating</dt>
              <dd className="text-3xl font-black text-emerald-600">4.9</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="services" className="scroll-mt-14 bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-black tracking-tight">What we actually do in your home</h2>
          <p className="mt-3 text-sm text-slate-400">
            Written like a crew checklist — swap bullets for your client&apos;s real scope of work.
          </p>
          <ul className="mt-10 divide-y divide-slate-700 border-y border-slate-700">
            {services.map((s) => (
              <li key={s.title} className="flex gap-5 py-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-emerald-500 text-lg font-black text-slate-900">
                  {s.icon}
                </span>
                <div>
                  <h3 className="text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-14 bg-emerald-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">Pick a depth. We handle the rest.</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">Three intentionally different shapes — not three identical cards.</p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-stretch gap-8 lg:flex-row lg:items-end">
            {packages.map((p, idx) => {
              const shapes = [
                "rounded-none border-4 border-slate-900 bg-white shadow-[8px_8px_0_0_theme(colors.sky.400)]",
                "rounded-[2.5rem] border-2 border-emerald-500 bg-white shadow-xl lg:-translate-y-3 lg:scale-[1.02]",
                "rounded-sm border border-slate-300 bg-slate-50 lg:ml-auto lg:max-w-sm",
              ];
              return (
                <div key={p.name} className={`relative flex flex-1 flex-col p-8 ${shapes[idx] || shapes[0]}`}>
                  {p.highlight && (
                    <span className="absolute -top-3 right-6 bg-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-300">
                      Crew favorite
                    </span>
                  )}
                  <h3 className="text-xl font-black text-slate-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
                  <p className="mt-6 text-5xl font-black text-slate-900">
                    ${p.price}
                    <span className="block text-sm font-bold text-slate-500">per visit (mock)</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-2 text-sm font-medium text-slate-700">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 border-l-2 border-emerald-500 pl-3">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#quote"
                    className={`mt-8 block py-3 text-center text-sm font-black uppercase tracking-widest transition ${
                      p.highlight ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Choose {p.name.split(" ")[0]}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Before / after (visual mock)</h2>
              <p className="mt-2 text-sm text-slate-600">
                Side-by-side abstract blocks read well on mobile. Replace with real photography only when you have rights.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400" />
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-200 to-emerald-200 ring-2 ring-white shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50/60 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Why homeowners choose Nova (demo)</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Insured & background-checked*", "Supplies included*", "Satisfaction checklist*", "Flexible scheduling*"].map((x) => (
              <div key={x} className="rounded-xl border border-emerald-100 bg-white/80 p-4 text-sm font-semibold text-slate-700 shadow-sm">
                {x}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">*Fictional claims for layout — verify legally for production.</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Happy clients (sample quotes)</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "Booking flow felt as easy as the big apps — great for showing SMB clients.",
              "Pricing cards make upsells obvious without feeling pushy.",
              "Love the mint + sky palette; reads clean on phones.",
            ].map((q, i) => (
              <figure key={i} className="border-l-8 border-sky-400 bg-white p-5 shadow-sm">
                <blockquote className="text-sm font-medium italic text-slate-700">&ldquo;{q}&rdquo;</blockquote>
                <figcaption className="mt-3 text-[10px] font-black uppercase tracking-widest text-emerald-700">Home {i + 1} · demo</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="area" className="scroll-mt-14 border-t border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Service area</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Illustrative map block. For production, embed Google Maps or list ZIP codes you actually serve.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid h-56 place-content-center bg-gradient-to-br from-sky-100 via-white to-emerald-100 sm:h-64">
              <div className="rounded-full border-4 border-sky-400/40 bg-white/90 px-6 py-3 text-sm font-semibold text-sky-800 shadow-lg">
                Metro Northwind · demo region
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="scroll-mt-14 bg-gradient-to-b from-white to-sky-50 py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">Request a quote</h2>
          <p className="mt-2 text-center text-sm text-slate-600">Tell us about your home — this form stays on the frontend.</p>
          {quoteSent ? (
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-6 text-center text-sm font-medium text-emerald-900">
              Thanks! We&apos;ll be in touch within one business day. (Demo message — nothing was submitted.)
            </div>
          ) : (
            <form onSubmit={handleQuote} className="mt-8 space-y-4 border-4 border-slate-900 bg-white p-6 shadow-[10px_10px_0_0_theme(colors.emerald.400)]">
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Name</label>
                <input required className="mt-1 w-full border-2 border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-sky-500" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Service</label>
                <select className="mt-1 w-full border-2 border-slate-300 px-3 py-2.5 text-sm">
                  <option>Basic Refresh</option>
                  <option>Deep Clean</option>
                  <option>Move-Out Clean</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Home size</label>
                <select className="mt-1 w-full border-2 border-slate-300 px-3 py-2.5 text-sm">
                  <option>Studio / 1 bed</option>
                  <option>2–3 beds</option>
                  <option>4+ beds</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Message</label>
                <textarea required rows={4} className="mt-1 w-full border-2 border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-sky-500" />
              </div>
              <button type="submit" className="w-full bg-slate-900 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-slate-800">
                Send quote
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left sm:px-6">
          <p className="font-bold text-slate-900">Nova Cleaning Services</p>
          <p>Frontend demo — not a real company.</p>
        </div>
      </footer>
    </div>
  );
}
