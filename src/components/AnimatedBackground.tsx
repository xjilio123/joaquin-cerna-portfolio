import { useMemo } from "react";

type Star = { top: string; left: string; size: number; delay: string; duration: string };
type Particle = { left: string; size: number; delay: string; duration: string; hue: string };

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function AnimatedBackground() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      top: `${rand(i + 1) * 100}%`,
      left: `${rand(i + 100) * 100}%`,
      size: 1 + Math.round(rand(i + 200) * 2),
      delay: `${(rand(i + 300) * 6).toFixed(2)}s`,
      duration: `${(2 + rand(i + 400) * 4).toFixed(2)}s`,
    }));
  }, []);

  const particles = useMemo<Particle[]>(() => {
    const hues = ["#2563EB", "#7C3AED", "#60A5FA", "#A78BFA"];
    return Array.from({ length: 22 }, (_, i) => ({
      left: `${rand(i + 500) * 100}%`,
      size: 3 + Math.round(rand(i + 600) * 5),
      delay: `${(rand(i + 700) * 12).toFixed(2)}s`,
      duration: `${(10 + rand(i + 800) * 14).toFixed(2)}s`,
      hue: hues[i % hues.length],
    }));
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Aurora shifting gradient */}
      <div className="absolute inset-0 bg-aurora opacity-70" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-animated-grid opacity-60" />

      {/* Big drifting blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-brand-blue/25 blur-[120px] animate-blob-1" />
      <div className="absolute top-[25%] right-[-15%] w-[40rem] h-[40rem] rounded-full bg-brand-purple/25 blur-[120px] animate-blob-2" />
      <div className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-primary/20 blur-[120px] animate-blob-3" />

      {/* Twinkling stars */}
      {stars.map((s, i) => (
        <span
          key={`s-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            boxShadow: "0 0 6px rgba(255,255,255,0.6)",
          }}
        />
      ))}

      {/* Rising color particles */}
      {particles.map((p, i) => (
        <span
          key={`p-${i}`}
          className="absolute bottom-0 rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.hue,
            boxShadow: `0 0 10px ${p.hue}`,
            animation: `particleRise ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Shooting star */}
      <span
        className="absolute top-[15%] right-[-10%] h-[2px] w-40 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #ffffff, #7C3AED, transparent)",
          filter: "blur(0.5px)",
          animation: "shootingStar 7s ease-in 2s infinite",
        }}
      />
      <span
        className="absolute top-[45%] right-[-10%] h-[2px] w-32 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #ffffff, #2563EB, transparent)",
          filter: "blur(0.5px)",
          animation: "shootingStar 9s ease-in 5s infinite",
        }}
      />

      {/* Vignette to keep content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,16,32,0.85)_100%)]" />
    </div>
  );
}