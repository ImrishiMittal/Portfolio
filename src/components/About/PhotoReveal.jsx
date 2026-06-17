import profile from "@/assets/Headshot.png";

const PhotoReveal = () => {
  return (
    <div className="group relative flex justify-center">

      {/* Glow */}

      <div
        className="
        absolute

        -inset-4

        rounded-[2rem]

        bg-blue-500/20

        blur-3xl

        opacity-0

        transition-all

        duration-500

        group-hover:opacity-100
      "
      />

      {/* Image */}

      <img
        src={profile}
        alt="Rishi Mittal"
        className="
        relative

        h-[420px]

        w-[320px]

        rounded-[2rem]

        object-cover

        border

        border-zinc-800

        shadow-2xl

        grayscale

        transition-all

        duration-500

        group-hover:grayscale-0

        group-hover:scale-105

        group-hover:border-blue-500/40
      "
      />

    </div>
  );
};

export default PhotoReveal;