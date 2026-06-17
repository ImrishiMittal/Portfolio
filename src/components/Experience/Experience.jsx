import { useState } from "react";

import { experiences } from "@/data/experience";



const ExperienceCard = ({ exp }) => {

  const [open, setOpen] = useState(false);

  return (

    <div

      className="

      rounded-[2rem]

      border

      border-zinc-800

      bg-zinc-900/50

      p-6

      md:p-8

      backdrop-blur-md

      transition-all

      duration-300

      hover:border-blue-500/30

      hover:-translate-y-1

      "

    >

      <div className="flex flex-col gap-8 md:flex-row md:justify-between">



        {/* LEFT */}



        <div className="flex gap-5">

          {/* LOGO */}



          <div

            className="

            flex

            h-20

            w-20

            shrink-0

            items-center

            justify-center

            overflow-hidden

            rounded-3xl

            border

            border-zinc-700

            bg-zinc-800

            p-3

            "

          >

            <img

              src={exp.logo}

              alt={exp.company}

              className="

              h-full

              w-full

              object-contain

              "

            />

          </div>



          {/* CONTENT */}



          <div>

            <h3

              className="

              text-3xl

              md:text-5xl

              font-bold

              "

            >

              {exp.company}

            </h3>



            <p

              className="

              mt-2

              text-xl

              md:text-2xl

              text-zinc-200

              "

            >

              {exp.role}

            </p>



            <p

              className="

              mt-3

              text-zinc-500

              "

            >

              {exp.timeline}

</p>



            <div className="mt-8 flex flex-wrap gap-4">

              <button

                onClick={() => setOpen(!open)}

                className="

                text-zinc-400

                transition

                hover:text-white

                "

              >

                {

                  open

                    ?

                    "Hide Details ↑"

                    :

                    "View Details →"

                }

              </button>



              {

                exp.certificate && (

                  <a

                    href={exp.certificate}

                    target="_blank"

                    rel="noreferrer"

                    className="

                    text-zinc-400

                    transition

                    hover:text-white

                    "

                  >

                    Certificate ↗

                  </a>

                )

              }

            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}



        <div className="md:text-right">

          <span

            className="

            inline-block

            rounded-full

            border

            border-zinc-700

            px-5

            py-3

            text-sm

            text-zinc-400

            "

          >

            {exp.highlight}

          </span>

        </div>

      </div>



      {/* DETAILS */}



      {

        open && (

          <div

            className="

            mt-10

            rounded-2xl

            border

            border-zinc-800

            bg-zinc-950/50

            p-6

            "

          >

            <ul className="space-y-4 text-zinc-400">

              {

                exp.details.map((item) => (

                  <li

                    key={item}

                    className="flex gap-3"

                  >

                    <span className="text-green-400">

                      ✓

                    </span>



                    <span>

                      {item}

                    </span>

                  </li>

                ))

              }

            </ul>

          </div>

        )

      }

    </div>

  );

};





const Experience = () => {

  return (

    <section

      id="experience"

      className="

      px-6

      py-28

      md:px-12

      lg:px-20

      "

    >

      <div className="mx-auto max-w-7xl">

        <p

          className="

          uppercase

          tracking-[0.3em]

          text-zinc-500

          "

        >

          EXPERIENCE

        </p>



        <h2

          className="

          mt-4

          text-5xl

          md:text-7xl

          font-bold

          "

        >

          Places I've Worked

        </h2>



        <div className="mt-20 space-y-8">

          {

            experiences.map((exp) => (

              <ExperienceCard

                key={exp.company}

                exp={exp}

              />

            ))

          }

        </div>

      </div>

    </section>

  );

};



export default Experience;