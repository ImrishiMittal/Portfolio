import { useEffect, useState } from "react";

const ScrollProgress = () => {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {

    const updateProgress = () => {

      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);

    };

    window.addEventListener(
      "scroll",
      updateProgress
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );

  }, []);

  return (

    <>
      {/* Main Bar */}

      <div

        className="
        fixed

        top-0
        left-0

        z-[9999]

        h-[3px]

        bg-gradient-to-r

        from-blue-500

        via-cyan-400

        to-blue-600

        transition-all

        duration-100
        "

        style={{
          width: `${scrollProgress}%`,
        }}

      />



      {/* Glow */}

      <div

        className="
        fixed

        top-0
        left-0

        z-[9998]

        h-[3px]

        blur-md

        bg-blue-500/70

        transition-all

        duration-100
        "

        style={{
          width: `${scrollProgress}%`,
        }}

      />

    </>

  );

};

export default ScrollProgress;