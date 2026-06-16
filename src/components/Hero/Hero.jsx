import HeroContent from "./HeroContent";
import HeroGlobe from "./HeroGlobe";

const Hero = () => {
  return (
    <section
  id="hero"
  className="
  min-h-screen

  flex

  items-center

  justify-between

  gap-12

  px-6

  pt-20

  md:px-12

  lg:px-20
"
>

      <HeroContent />

      <HeroGlobe />

    </section>
  );
};

export default Hero;