import { certificates } from "@/data/certifications";

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
          {certificates.map((cert) => (

            <div
              key={cert.title}
              className="
              group

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

              {/* Logo */}

              <div
                className="
                flex

                h-20

                w-20

                items-center

                justify-center

                rounded-2xl

                border

                border-zinc-800

                bg-zinc-950

                transition

                duration-300

                group-hover:border-blue-500/40
              "
              >

                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="
                  h-12

                  w-12

                  object-contain

                  transition

                  duration-300

                  group-hover:scale-110
                "
                />

              </div>



              {/* Title */}

              <h3
                className="
                mt-6

                text-3xl

                font-bold
              "
              >
                {cert.title}
              </h3>



              {/* Issuer */}

              <p
                className="
                mt-3

                text-zinc-400
              "
              >
                {cert.issuer}
              </p>



              {/* Year */}

              <p
                className="
                mt-2

                text-sm

                text-zinc-500
              "
              >
                {cert.year}
              </p>



              {/* Button */}

              <a
                href={cert.pdf}
                target="_blank"
                rel="noreferrer"
                className="
                mt-8

                inline-flex

                items-center

                gap-2

                rounded-xl

                border

                border-zinc-700

                px-5

                py-3

                transition-all

                duration-300

                hover:border-white

                hover:bg-zinc-800

                hover:text-white
              "
              >
                View Certificate ↗
              </a>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;