import { Button } from "@/components/ui/button";

const HeroButtons = () => {
  return (
    <div className="mt-12 flex gap-5">
      <Button asChild>
        <a href="#projects">View Projects</a>
      </Button>

      <Button
        asChild
        className="
    bg-transparent

    border

    border-zinc-700

    text-white

    hover:bg-zinc-900

    hover:border-zinc-500
  "
      >
        <a href="#contact">Hire Me</a>
      </Button>
    </div>
  );
};

export default HeroButtons;
