import HeroContent from "./HeroContent";
import HeroGlobe from "./HeroGlobe";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
      relative

      min-h-screen

      flex

      items-center

      justify-between

      gap-12

      overflow-hidden

      px-6

      pt-20

      md:px-12

      lg:px-20
    "
    >

      {/* Blue Glow */}

      <div
        className="
        absolute

        top-1/2

        right-0

        h-[400px]

        w-[400px]

        -translate-y-1/2

        rounded-full

        bg-blue-500/10

        blur-[120px]
      "
      />

      <HeroContent />

      <HeroGlobe />

    </section>
  );
};

export default Hero;