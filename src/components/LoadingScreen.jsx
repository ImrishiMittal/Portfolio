import { useEffect, useState } from "react";

const LoadingScreen = () => {

  const [visible, setVisible] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setVisible(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (!visible) return null;

  return (

    <div
      className="
      fixed
      inset-0
      z-[9999]

      flex
      flex-col

      items-center
      justify-center

      bg-black

      transition-opacity
      duration-700
    "
    >

      {/* Glow */}

      <div
        className="
        absolute

        h-[300px]
        w-[300px]

        rounded-full

        bg-blue-500/10

        blur-[120px]
      "
      />

      {/* Name */}

      <h1
        className="
        relative

        text-5xl

        md:text-7xl

        font-bold

        tracking-tight

        bg-gradient-to-r

        from-white

        via-zinc-300

        to-zinc-500

        bg-clip-text

        text-transparent

        animate-pulse
      "
      >

        Rishi Mittal

      </h1>

      {/* Role */}

      <p
        className="
        relative

        mt-4

        text-zinc-400

        tracking-[0.3em]

        uppercase

        text-sm

        md:text-base
      "
      >

        Software Engineer

      </p>

      {/* Loader */}

      <div

        className="
        relative

        mt-10

        h-[2px]

        w-[180px]

        overflow-hidden

        rounded-full

        bg-zinc-800
      "

      >

        <div

          className="
          h-full

          w-full

          animate-[loading_2s_ease-in-out_infinite]

          bg-gradient-to-r

          from-transparent

          via-blue-500

          to-transparent
        "

        />

      </div>

    </div>

  );

};

export default LoadingScreen;