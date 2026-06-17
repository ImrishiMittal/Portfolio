import { skills } from "@/data/skills";

const Skills = () => {

  return (

    <section

      id="skills"

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

          SKILLS

        </p>



        <h2

          className="

          mt-4

          text-5xl

          md:text-7xl

          font-bold

          "

        >

          Technologies I Work With

        </h2>



        <div

          className="

          mt-20

          grid

          gap-8

          md:grid-cols-2

          lg:grid-cols-3

          "

        >

          {

            skills.map((skill) => (

              <div

                key={skill.title}

                className="

                rounded-[2rem]

                border

                border-zinc-800

                bg-zinc-900/50

                p-8

                backdrop-blur-md

                transition-all

                duration-300

                hover:border-blue-500/30

                hover:-translate-y-1

                "

              >

                <div className="text-5xl">

                  {skill.icon}

                </div>



                <h3

                  className="

                  mt-6

                  text-3xl

                  font-bold

                  "

                >

                  {skill.title}

                </h3>



                <div

                  className="

                  mt-8

                  flex

                  flex-wrap

                  gap-3

                  "

                >

                  {

                    skill.items.map((item) => (

                      <span

                        key={item}

                        className="

                        rounded-full

                        border

                        border-zinc-700

                        bg-zinc-800

                        px-4

                        py-2

                        text-sm

                        text-zinc-300

                        transition

                        hover:border-blue-500/30

                        hover:text-white

                        "

                      >

                        {item}

                      </span>

                    ))

                  }

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

};

export default Skills;