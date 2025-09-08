import { useMemo } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const blobs = useMemo(
    () => [
      { id: "b1", color: "from-indigo-500/30 to-fuchsia-500/30", size: 420 },
      { id: "b2", color: "from-emerald-500/25 to-lime-500/25", size: 360 },
      { id: "b3", color: "from-sky-500/25 to-cyan-500/25", size: 300 },
    ],
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: `p${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 6,
      })),
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Floating gradient blobs */}
      {blobs.map((b, idx) => (
        <motion.div
          key={b.id}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${b.color}`}
          style={{
            width: b.size,
            height: b.size,
            left: `${10 + idx * 30}%`,
            top: `${idx * 20}%`,
          }}
          initial={{ x: -40, y: -20, scale: 0.9, opacity: 0.65 }}
          animate={{
            x: ["-5%", "5%", "-8%"],
            y: ["-4%", "6%", "-6%"],
            scale: [0.95, 1.05, 1.0],
            opacity: [0.5, 0.75, 0.6],
          }}
          transition={{
            duration: 18 + idx * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Twinkling particles */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {particles.map((p) => (
          <motion.circle
            key={p.id}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={p.size / 10}
            fill="currentColor"
            className="text-white/25"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.7, 0.15] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Slow moving vignette */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.15, 0.3, 0.18] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(60% 40% at 20% 20%, rgba(99,102,241,0.15), transparent 60%)," +
            "radial-gradient(60% 40% at 80% 30%, rgba(236,72,153,0.12), transparent 60%)," +
            "radial-gradient(60% 40% at 50% 90%, rgba(34,197,94,0.12), transparent 60%)",
        }}
      />
    </div>
  );
}
