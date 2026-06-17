import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const socials = [

  {

    icon: FaGithub,

    link: "https://github.com/ImrishiMittal",

    label: "GitHub",

  },



  {

    icon: FaLinkedin,

    link:

      "https://www.linkedin.com/in/rishi-mittal-a8a7b7275/",

    label: "LinkedIn",

  },



  {

    icon: FaXTwitter,

    link:

      "https://x.com/ImrishiMittal",

    label: "X",

  },



  {

    icon: FaEnvelope,

    link:

      "https://mail.google.com/mail/?view=cm&fs=1&to=rishimittalworks@gmail.com&su=Opportunity%20for%20Rishi%20Mittal",

    label: "Email",

  },

];



const Footer = () => {

  return (

    <footer

      className="

      border-t

      border-zinc-800

      px-6

      py-16

      md:px-12

      lg:px-20

    "

    >

      <div className="mx-auto max-w-7xl">

        <div

          className="

          flex

          flex-col

          items-center

          justify-between

          gap-10

          md:flex-row

        "

        >

          {/* LEFT */}



          <div>

            <h2

              className="

              text-3xl

              md:text-4xl

              font-bold

            "

            >

              Rishi Mittal

            </h2>



            <p

              className="

              mt-3

              text-zinc-400

            "

            >

              Software Engineer

            </p>



            <p

              className="

              mt-1

              text-zinc-500

            "

            >

Software Engineer • React Developer • Problem Solver

            </p>

          </div>



          {/* RIGHT */}



          <div className="flex gap-6">

            {

              socials.map((item) => {

                const Icon = item.icon;



                return (

                  <a

                    key={item.label}

                    href={item.link}

                    target="_blank"

                    rel="noreferrer"

                    aria-label={item.label}

                    className="

                    group

                    flex

                    h-14

                    w-14

                    items-center

                    justify-center

                    rounded-2xl

                    border

                    border-zinc-800

                    bg-zinc-900/50

                    transition-all

                    duration-300

                    hover:border-blue-500/30

                    hover:-translate-y-1

                  "

                  >

                    <Icon

                      className="

                      text-2xl

                      text-zinc-400

                      transition

                      duration-300

                      group-hover:text-white

                      group-hover:scale-110

                    "

                    />

                  </a>

                );

              })

            }

          </div>

        </div>



        {/* BOTTOM */}



        <div

          className="

          mt-12

          border-t

          border-zinc-800

          pt-8

          text-center

          text-sm

          text-zinc-500

        "

        >

          <p>

            Made with React + Tailwind

          </p>



          <p className="mt-2">

            © 2026 Rishi Mittal.

            All rights reserved.

          </p>

        </div>

      </div>

    </footer>

  );

};



export default Footer;