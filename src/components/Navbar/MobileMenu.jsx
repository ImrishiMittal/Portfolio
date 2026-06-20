import { useState } from "react";
import navLinks from "./NavLinks";

const MobileMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div>

      {/* Hamburger */}

      <button

        onClick={() => setIsOpen(!isOpen)}

        className="
        text-2xl

        text-white

        p-2
        "

      >

        {

          isOpen

          ?

          "✕"

          :

          "☰"

        }

      </button>



      {/* Menu */}

      {

        isOpen && (

          <div

            className="
            absolute

            top-16

            left-0

            w-full

            bg-black/95

            backdrop-blur-xl

            border-t

            border-zinc-800

            py-6

            flex

            flex-col

            items-center

            gap-6

            z-50
            "

          >

            {

              navLinks.map((link)=>(

                <a

                  key={link.name}

                  href={link.href}

                  onClick={() => setIsOpen(false)}

                  className="
                  text-zinc-300

                  text-lg

                  hover:text-white

                  transition
                  "

                >

                  {link.name}

                </a>

              ))

            }



            <a

              href="#contact"

              onClick={() => setIsOpen(false)}

              className="
              mt-2

              rounded-xl

              bg-white

              px-6

              py-3

              font-semibold

              text-black
              "

            >

              Hire Me

            </a>

          </div>

        )

      }

    </div>

  );

};

export default MobileMenu;