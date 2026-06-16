import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import navLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
  className={`
    fixed
    top-0
    left-0
    z-50
    w-full

    transition-all
    duration-300

    ${
      scrolled
        ? `
          bg-black/40

          backdrop-blur-xl

          border-b

          border-white/10
        `
        : `
          bg-transparent
        `
    }
  `}
>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Code2 className="h-5 w-5 text-zinc-400" />

          <span className="text-white">
            Rishi Mittal
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-sm
                text-zinc-400
                transition-colors
                duration-300

                hover:text-white
              "
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">

          <Button asChild>

            <a href="#contact">

              Hire Me

            </a>

          </Button>

        </div>

        {/* Mobile */}
        <div className="md:hidden">

          <MobileMenu />

        </div>

      </nav>
    </header>
  );
};

export default Navbar;