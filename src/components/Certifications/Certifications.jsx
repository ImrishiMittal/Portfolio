import { certifications } from "@/data/certifications";

const Certifications = () => {

  return (

    <section

      id="certifications"

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

          CERTIFICATIONS

        </p>



        <h2

          className="

          mt-4

          text-5xl

          md:text-7xl

          font-bold

        "

        >

          Things I've Learned

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

            certifications.map((cert) => (

              <div

                key={cert.title}

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

                  {cert.icon}

                </div>



                <h3

                  className="

                  mt-6

                  text-3xl

                  font-bold

                "

                >

                  {cert.title}

                </h3>



                <p

                  className="

                  mt-3

                  text-zinc-400

                "

                >

                  {cert.issuer}

                </p>



                <p

                  className="

                  mt-2

                  text-sm

                  text-zinc-500

                "

                >

                  {cert.year}

                </p>



                <a

                  href={cert.pdf}

                  target="_blank"

                  rel="noreferrer"

                  className="

                  mt-8

                  inline-block

                  rounded-xl

                  border

                  border-zinc-700

                  px-5

                  py-3

                  transition

                  hover:border-white

                  hover:text-white

                "

                >

                  View Certificate ↗

                </a>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

};

export default Certifications;