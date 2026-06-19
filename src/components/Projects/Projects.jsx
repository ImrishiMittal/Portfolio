import ProjectCard from "./ProjectCard";

import {

  completedProjects,

  upcomingProjects,

} from "@/data/projects";



const Projects = () => {

  return (

    <section

      id="projects"

      className="px-6 py-24 md:px-12 lg:px-20"

    >

      <div className="mx-auto max-w-7xl">

        <p className="uppercase tracking-[0.3em] text-zinc-500">

          Projects

        </p>


        <h2 className="mt-4 text-5xl font-bold">

          Things I've Built

        </h2>


        <div className="mt-16 space-y-8">

          {

            completedProjects.map((project) => (

              <ProjectCard

                key={project.title}

                project={project}

              />

            ))

          }

        </div>



        <h2 className="mt-24 text-4xl font-bold">

          Ideas I'm Building

        </h2>



        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {

            upcomingProjects.map((project) => (

              <div

                key={project.title}

                className="
                rounded-3xl

                border

                border-zinc-800

                bg-zinc-900/50

                p-8
              "
              >

                <h3 className="text-3xl font-bold">

                  {project.title}

                </h3>



                <p

                  className="
                  mt-4

                  text-zinc-400

                  leading-relaxed
                "
                >

                  {project.description}

                </p>



                <a
  href="#contact"
  className="
  mt-8

  inline-block

  rounded-xl

  border

  border-zinc-700

  px-5

  py-3

  transition-all

  duration-300

  hover:border-blue-500/50

  hover:text-white
"
>
  Interested →
</a>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

};

export default Projects;