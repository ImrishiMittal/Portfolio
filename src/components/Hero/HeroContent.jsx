import { useState, useEffect } from "react";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "MERN Developer",
  "React Native Developer",
];

const HeroContent = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl">
      <h1
        className="
        text-6xl
        md:text-8xl
        font-bold
        bg-gradient-to-r
        from-white
        to-zinc-300
        bg-clip-text
        text-transparent
      "
      >
        Rishi Mittal
      </h1>

      <h2 className="mt-6 text-2xl md:text-4xl text-zinc-300 h-10 md:h-12 relative overflow-hidden">
        <span
          key={roleIndex}
          className="inline-block animate-fade-slide"
        >
          {ROLES[roleIndex]}
        </span>
      </h2>

      <p className="mt-2 text-xl md:text-2xl text-zinc-500">
        Building scalable full-stack web & mobile applications with MERN, React Native, and AI.
      </p>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
        Building interactive web experiences and real-world products.
      </p>

      <div className="mt-8">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 text-zinc-300">
          Open for Freelance & Opportunities
        </span>
      </div>

      <HeroButtons />
      <HeroStats />
    </div>
  );
};

export default HeroContent;