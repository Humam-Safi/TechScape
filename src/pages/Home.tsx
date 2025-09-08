import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { specialties } from "../shared/data";

const TOP_STACKS_DISPLAY_COUNT = 6;

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Showcase />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
        >
          Explore the spectrum of modern
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
            IT Specialties
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-slate-300 max-w-2xl"
        >
          Languages, frameworks, tools, and real-world median salaries. Click a
          card to dive in.
        </motion.p>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((s, i) => {
          // Ensure topStacks always has TOP_STACKS_DISPLAY_COUNT items
          const stacks = s.topStacks.slice(0, TOP_STACKS_DISPLAY_COUNT);
          const paddedStacks =
            stacks.length < TOP_STACKS_DISPLAY_COUNT
              ? [
                  ...stacks,
                  ...Array(TOP_STACKS_DISPLAY_COUNT - stacks.length).fill(""),
                ]
              : stacks;
          return (
            <Link key={s.id} to={`/specialty/${s.id}`} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.04 }}
                className="group relative rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-[transform,colors] flex flex-col h-full"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-items-center text-white text-xl font-black">
                    {s.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{s.name}</h3>
                    <p className="text-slate-400 text-sm">{s.tagline}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 flex-grow">
                  {paddedStacks.map((t, idx) => (
                    <span
                      key={t || `empty-${idx}`}
                      className={`text-xs px-2.5 py-1 rounded-full border border-white/10 ${
                        t
                          ? "bg-white/10 text-slate-200"
                          : "bg-transparent text-transparent border-transparent"
                      }`}
                      style={{
                        minWidth: "72px",
                        display: "inline-block",
                        textAlign: "center",
                        visibility: t ? "visible" : "hidden",
                      }}
                    >
                      {t || "\u00A0"}
                    </span>
                  ))}
                </div>
                <div className="flex-grow" />
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-fuchsia-400/60"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120px 60px at 20% 0%, rgba(236,72,153,0.15), transparent 70%)," +
                      "radial-gradient(120px 60px at 80% 100%, rgba(99,102,241,0.12), transparent 70%)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.0, 0.25, 0.15] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
