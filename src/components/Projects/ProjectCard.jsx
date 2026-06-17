import { useState } from "react";

const ProjectCard = ({ project }) => {

  const [showDetails, setShowDetails] = useState(false);

  return (

    <div
      className="
      group

      rounded-[2rem]

      border

      border-zinc-800

      bg-zinc-900/50

      p-6

      md:p-8

      transition-all

      duration-300

      hover:border-blue-500/30

      hover:-translate-y-1
    "
    >

      <div className="grid gap-8 lg:grid-cols-[350px_1fr] items-center">

        {/* IMAGE */}

        <div

          className="
          flex

          items-center

          justify-center

          rounded-[1.5rem]

          border

          border-zinc-800

          bg-zinc-950

          overflow-hidden

          h-[220px]

          sm:h-[260px]

          lg:h-[320px]
        "

        >

          <img

            src={project.image}

            alt={project.title}

            className="
            max-h-full

            max-w-full

            object-contain

            p-4

            transition-all

            duration-500

            group-hover:scale-105
          "

          />

        </div>



        {/* RIGHT */}

        <div>

          <div className="flex items-center justify-between gap-4 flex-wrap">

            <h3 className="text-4xl md:text-5xl font-bold">

              {project.title}

            </h3>



            <span

              className="
              rounded-full

              border

              border-zinc-700

              px-5

              py-2

              text-sm

              text-zinc-400

              tracking-wider
            "

            >

              {project.status}

            </span>

          </div>



          <p

            className="
            mt-8

            max-w-2xl

            text-lg

            md:text-xl

            leading-relaxed

            text-zinc-400
          "

          >

            {project.description}

          </p>



          {/* TECH */}

          <div className="mt-8 flex flex-wrap gap-4">

            {

              project.tech?.map((item) => (

                <span

                  key={item}

                  className="
                  rounded-full

                  bg-zinc-800

                  px-5

                  py-3

                  text-sm

                  text-zinc-300
                "

                >

                  {item}

                </span>

              ))

            }

          </div>



          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap gap-5">

            {

              project.live && (

                <a

                  href={project.live}

                  target="_blank"

                  rel="noreferrer"

                  className="
                  rounded-2xl

                  bg-white

                  px-7

                  py-4

                  font-medium

                  text-black

                  transition

                  hover:scale-105
                "

                >

                  Live Demo

                </a>

              )

            }



            {

              project.github && (

                <a

                  href={project.github}

                  target="_blank"

                  rel="noreferrer"

                  className="
                  rounded-2xl

                  border

                  border-zinc-700

                  px-7

                  py-4

                  transition

                  hover:border-blue-500/50
                "

                >

                  GitHub

                </a>

              )

            }

          </div>



          {/* CASE STUDY BUTTON */}

          {

            project.featured && (

              <button

                onClick={() => setShowDetails(!showDetails)}

                className="
                mt-8

                text-zinc-400

                transition

                hover:text-white
              "

              >

                {

                  showDetails

                    ?

                    "Hide Case Study ↑"

                    :

                    "Read Case Study →"

                }

              </button>

            )

          }

        </div>

      </div>



      {/* CASE STUDY */}

      {

        showDetails && (

          <div

            className="
            mt-10

            rounded-[1.5rem]

            border

            border-zinc-800

            bg-zinc-950/50

            p-8

            space-y-8
          "

          >

            <div>

              <h4 className="text-2xl font-semibold">

                Problem Statement

              </h4>



              <p className="mt-3 text-zinc-400 leading-relaxed">

                Build a modern cricket scoring application that supports live scoring,

                player statistics, scorecards and tournament management while

                providing a smooth user experience.

              </p>

            </div>



            <div>

              <h4 className="text-2xl font-semibold">

                Tech Stack

              </h4>



              <p className="mt-3 text-zinc-400">

                React • Node.js • Express • MongoDB • Tailwind CSS

              </p>

            </div>



            <div>

              <h4 className="text-2xl font-semibold">

                Features

              </h4>



              <ul className="mt-3 space-y-2 text-zinc-400">

                <li>✓ Live Match Scoring</li>

                <li>✓ Player Statistics</li>

                <li>✓ PDF Scorecard Export</li>

                <li>✓ Responsive Design</li>

                <li>✓ Tournament Mode</li>

                <li>✓ MongoDB Integration</li>

              </ul>

            </div>



            <div>

              <h4 className="text-2xl font-semibold">

                Future Roadmap

              </h4>



              <p className="mt-3 text-zinc-400">

                Series support, advanced analytics,

                community features and enhanced tournament system.

              </p>

            </div>

          </div>

        )

      }

    </div>

  );

};

export default ProjectCard;