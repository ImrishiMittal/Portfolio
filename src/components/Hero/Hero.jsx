import HeroContent from "./HeroContent";
import Globe3D from "./Globe3D";

const Hero = () => {
  return (

    <section
      id="hero"
      className="
      relative

      min-h-screen

      flex

      items-center

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



      {/* Globe */}

      <Globe3D />



      {/* Hero Content */}

      <div className="relative z-10">

        <HeroContent />

      </div>

    </section>

  );
};

export default Hero;