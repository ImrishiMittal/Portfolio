const roles = [
  "Frontend Developer",
  "React Developer",
  "MERN Stack Developer",
  "Software Engineer (SDE)",
];

const OpenForWork = () => {
  return (
    <section
      id="openforwork"
      className="
      px-6
      py-28
      md:px-12
      lg:px-20
    "
    >
      <div className="mx-auto max-w-5xl">

        <div
          className="
          rounded-[2rem]

          border

          border-zinc-800

          bg-zinc-900/50

          p-10

          text-center

          backdrop-blur-md
        "
        >

          <p
            className="
            uppercase

            tracking-[0.3em]

            text-zinc-500
          "
          >
            OPEN FOR WORK
          </p>

          <h2
            className="
            mt-5

            text-5xl

            md:text-7xl

            font-bold
          "
          >
            Currently Looking For
          </h2>

          <div
            className="
            mt-12

            flex

            flex-wrap

            justify-center

            gap-4
          "
          >

            {roles.map((role) => (

              <div

                key={role}

                className="
                rounded-full

                border

                border-zinc-700

                px-6

                py-3

                text-lg

                text-zinc-300
              "
              >

                 {role}

              </div>

            ))}

          </div>


          <p
            className="
            mt-10

            text-zinc-400
          "
          >
            📍 India (Remote / Hybrid)
          </p>


          <div
            className="
            mt-4

            flex

            justify-center

            gap-4

            text-zinc-500
          "
          >

            <span>Full Time</span>

            <span>•</span>

            <span>Freelance</span>

            <span>•</span>

            <span>Internship</span>

          </div>


          <div
            className="
            mt-12

            flex

            flex-wrap

            justify-center

            gap-5
          "
          >

            <a
              href="/RishiMittal_Resume.pdf"
              target="_blank"
              className="
              rounded-xl

              bg-white

              px-7

              py-4

              font-semibold

              text-black

              transition

              hover:scale-105
            "
            >

              Download Resume

            </a>


            <a
              href="#contact"
              className="
              rounded-xl

              border

              border-zinc-700

              px-7

              py-4

              transition

              hover:border-white
            "
            >

              Hire Me

            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OpenForWork;