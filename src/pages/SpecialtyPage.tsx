import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { specialtiesMap } from "../shared/data";

export default function SpecialtyPage() {
  const { id } = useParams();
  const data = specialtiesMap[id ?? ""];

  if (!data) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-slate-300">Specialty not found.</p>
        <Link className="text-indigo-300 underline" to="/">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400"
      >
        {data.name}
      </motion.h1>
      <p className="mt-3 text-slate-300 max-w-3xl">{data.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <InfoCard
          title="Core Languages"
          items={data.languages}
          gradient="from-indigo-500 to-sky-500"
        />
        <InfoCard
          title="Frameworks & Libraries"
          items={data.frameworks}
          gradient="from-fuchsia-500 to-rose-500"
        />
        <InfoCard
          title="Tools & Platforms"
          items={data.tools}
          gradient="from-emerald-500 to-lime-500"
        />
        {data.platforms && data.platforms.length > 0 && (
          <InfoCard
            title="Target Platforms"
            items={data.platforms}
            gradient="from-amber-500 to-orange-500"
          />
        )}
        {data.roles && data.roles.length > 0 && (
          <InfoCard
            title="Common Roles"
            items={data.roles}
            gradient="from-rose-500 to-fuchsia-500"
          />
        )}
        {data.industries && data.industries.length > 0 && (
          <InfoCard
            title="Industries"
            items={data.industries}
            gradient="from-emerald-500 to-cyan-500"
          />
        )}
        <SalariesCard id={data.id} />
      </div>

      {data.responsibilities && data.responsibilities.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl p-6 border border-white/10 bg-white/5"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
        >
          <h3 className="font-bold text-lg">What you'll do</h3>
          <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm text-slate-200">
            {data.responsibilities.map((r) => (
              <li
                key={r}
                className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10"
              >
                {r}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {data.roadmap && data.roadmap.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl p-6 border border-white/10 bg-white/5"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
        >
          <h3 className="font-bold text-lg">Learning roadmap</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {data.roadmap.map((stage) => (
              <div
                key={stage.stage}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-sm text-slate-300 mb-2 uppercase tracking-wide">
                  {stage.title}
                </div>
                <ul className="text-sm text-slate-200 space-y-1">
                  {stage.items.map((i) => (
                    <li
                      key={i}
                      className="px-2 py-1 rounded bg-white/10 border border-white/10"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {(data.resources?.length || data.certifications?.length) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid md:grid-cols-2 gap-6"
        >
          {data.resources && data.resources.length > 0 && (
            <div
              className="rounded-2xl p-6 border border-white/10 bg-white/5"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
            >
              <h3 className="font-bold text-lg">Curated resources</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {data.resources.map((r) => (
                  <li
                    key={r.url}
                    className="flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-slate-200">{r.title}</div>
                      {r.type && (
                        <div className="text-xs text-slate-400">{r.type}</div>
                      )}
                    </div>
                    <a
                      className="text-indigo-300 hover:text-white underline"
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data.certifications && data.certifications.length > 0 && (
            <div
              className="rounded-2xl p-6 border border-white/10 bg-white/5"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
            >
              <h3 className="font-bold text-lg">Certifications</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-200">
                {data.certifications.map((c) => (
                  <li
                    key={c}
                    className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {data.demand && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl p-6 border border-white/10 bg-white/5"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
        >
          <h3 className="font-bold text-lg">Market demand</h3>
          <div className="mt-2 text-sm text-slate-300">
            <span className="mr-4">
              Growth ~ {data.demand.marketGrowthPct ?? "—"}%
            </span>
            <span className="mr-4">
              Openings: {data.demand.jobOpeningsApprox ?? "—"}
            </span>
            <span>Difficulty: {data.demand.difficulty ?? "—"}</span>
          </div>
        </motion.div>
      )}

      <div className="mt-10">
        <Link
          to="/"
          className="text-sm text-slate-300 hover:text-white underline"
        >
          ← Back to all specialties
        </Link>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  items,
  gradient,
}: {
  title: string;
  items: string[];
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-2xl p-6 border border-white/10 bg-white/5`}
      style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
    >
      <h3 className={`font-bold text-lg`}>
        <span
          className={`px-2.5 py-1.5 rounded-md text-white mr-2 bg-gradient-to-r ${gradient}`}
        >
          •
        </span>
        {title}
      </h3>
      <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-200">
        {items.map((item) => (
          <li
            key={item}
            className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SalariesCard({ id }: { id: string }) {
  const salaries: Record<
    string,
    { country: string; medianUSD: number; source: string; sourceUrl: string }[]
  > = {
    frontend: [
      {
        country: "United States",
        medianUSD: 120000,
        source: "levels.fyi 2024 SWE/FE medians",
        sourceUrl: "https://www.levels.fyi/comp.html",
      },
      {
        country: "United Kingdom",
        medianUSD: 75000,
        source: "Glassdoor UK 2024",
        sourceUrl: "https://www.glassdoor.co.uk/Salaries/",
      },
      {
        country: "Germany",
        medianUSD: 80000,
        source: "Glassdoor DE 2024",
        sourceUrl: "https://www.glassdoor.de/Gehalt/",
      },
    ],
    backend: [
      {
        country: "United States",
        medianUSD: 135000,
        source: "levels.fyi 2024 SWE medians",
        sourceUrl: "https://www.levels.fyi/comp.html",
      },
      {
        country: "Canada",
        medianUSD: 95000,
        source: "Glassdoor CA 2024",
        sourceUrl: "https://www.glassdoor.ca/Salaries/",
      },
      {
        country: "India",
        medianUSD: 25000,
        source: "Glassdoor IN 2024",
        sourceUrl: "https://www.glassdoor.co.in/Salaries/",
      },
    ],
    mobile: [
      {
        country: "United States",
        medianUSD: 130000,
        source: "levels.fyi 2024 SWE medians",
        sourceUrl: "https://www.levels.fyi/comp.html",
      },
      {
        country: "Brazil",
        medianUSD: 35000,
        source: "Glassdoor BR 2024",
        sourceUrl: "https://www.glassdoor.com.br/Sal%C3%A1rios/",
      },
      {
        country: "United Kingdom",
        medianUSD: 80000,
        source: "Glassdoor UK 2024",
        sourceUrl: "https://www.glassdoor.co.uk/Salaries/",
      },
    ],
    security: [
      {
        country: "United States",
        medianUSD: 145000,
        source: "BLS InfoSec Analysts May 2024 median",
        sourceUrl:
          "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
      },
      {
        country: "United Kingdom",
        medianUSD: 85000,
        source: "Glassdoor UK 2024",
        sourceUrl: "https://www.glassdoor.co.uk/Salaries/",
      },
      {
        country: "Australia",
        medianUSD: 110000,
        source: "Glassdoor AU 2024",
        sourceUrl: "https://www.glassdoor.com.au/Salaries/",
      },
    ],
    data: [
      {
        country: "United States",
        medianUSD: 125000,
        source: "BLS Data Scientists May 2024 median",
        sourceUrl: "https://www.bls.gov/ooh/math/data-scientists.htm",
      },
      {
        country: "Germany",
        medianUSD: 85000,
        source: "Glassdoor DE 2024",
        sourceUrl: "https://www.glassdoor.de/Gehalt/",
      },
      {
        country: "United Kingdom",
        medianUSD: 80000,
        source: "Glassdoor UK 2024",
        sourceUrl: "https://www.glassdoor.co.uk/Salaries/",
      },
    ],
    ai: [
      {
        country: "United States",
        medianUSD: 160000,
        source: "levels.fyi ML medians 2024",
        sourceUrl: "https://www.levels.fyi/comp.html",
      },
      {
        country: "Canada",
        medianUSD: 110000,
        source: "Glassdoor CA 2024",
        sourceUrl: "https://www.glassdoor.ca/Salaries/",
      },
      {
        country: "France",
        medianUSD: 90000,
        source: "Glassdoor FR 2024",
        sourceUrl: "https://www.glassdoor.fr/Salaires/",
      },
    ],
    uiux: [
      {
        country: "United States",
        medianUSD: 115000,
        source: "Glassdoor US UX Designer 2024",
        sourceUrl: "https://www.glassdoor.com/Salaries/",
      },
      {
        country: "United Kingdom",
        medianUSD: 70000,
        source: "Glassdoor UK 2024",
        sourceUrl: "https://www.glassdoor.co.uk/Salaries/",
      },
      {
        country: "Netherlands",
        medianUSD: 80000,
        source: "Glassdoor NL 2024",
        sourceUrl: "https://www.glassdoor.nl/Salarissen/",
      },
    ],
    gamedev: [
      {
        country: "United States",
        medianUSD: 110000,
        source: "Glassdoor US Game Developer 2024",
        sourceUrl: "https://www.glassdoor.com/Salaries/",
      },
      {
        country: "Japan",
        medianUSD: 70000,
        source: "Glassdoor JP 2024",
        sourceUrl: "https://www.glassdoor.co.jp/%E7%B5%A6%E4%B8%8E/",
      },
      {
        country: "Sweden",
        medianUSD: 80000,
        source: "Glassdoor SE 2024",
        sourceUrl: "https://www.glassdoor.se/L%C3%B6ner/",
      },
    ],
  };

  const rows = salaries[id] ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-6 border border-white/10 bg-white/5"
      style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
    >
      <h3 className="font-bold text-lg">Median Salaries (USD)</h3>
      <table className="w-full mt-4 text-sm">
        <thead className="text-slate-300">
          <tr>
            <th className="text-left font-medium">Country</th>
            <th className="text-left font-medium">Median</th>
            <th className="text-left font-medium">Source</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.map((r) => (
            <tr key={r.country} className="hover:bg-white/5">
              <td className="py-2">{r.country}</td>
              <td className="py-2">${r.medianUSD.toLocaleString()}</td>
              <td className="py-2">
                <a
                  className="text-indigo-300 hover:text-white underline"
                  href={r.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {r.source}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-slate-400 mt-3">
        Values are medians in USD, approximated from cited sources (2024-2025).
      </p>
    </motion.div>
  );
}
