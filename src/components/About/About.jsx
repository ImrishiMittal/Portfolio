import PhotoReveal from "./PhotoReveal";
import Stats from "./Stats";

const About = () => {
  return (
    <section
      id="about"
      className="
      min-h-screen

      flex

      items-center

      px-6

      py-20

      md:px-12

      lg:px-20
    "
    >

      <div
        className="
        mx-auto

        grid

        max-w-7xl

        items-center

        gap-16

        md:grid-cols-2
      "
      >

        <PhotoReveal />

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">

            About Me

          </p>

          <h2 className="mt-4 text-5xl font-bold">

            Full Stack

            <br />

            MERN Developer

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">

            Passionate Full Stack MERN Developer with hands-on experience building responsive and scalable web applications.

          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">

            I enjoy turning ideas into real products and continuously improving my skills through projects and modern technologies.

          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">

            Currently open to freelance work and full-time opportunities.

          </p>

          <Stats />

        </div>

      </div>

    </section>
  );
};

export default About;