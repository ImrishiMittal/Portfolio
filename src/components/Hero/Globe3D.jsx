import Globe from "react-globe.gl";
import { useRef, useEffect } from "react";

const Globe3D = () => {

  const globeEl = useRef();

  const points = [

    // Bokaro (Home)

    {
      lat: 23.6693,
      lng: 86.1511,

      size: 0.45,

      color: "#60a5fa",

      label: "🏠 Bokaro",
    },



    // Jaipur (College)

    {
      lat: 26.9124,
      lng: 75.7873,

      size: 0.35,

      color: "#f59e0b",

      label: "🎓 Jaipur",
    },



    // Mysore (Future)

    {
      lat: 12.2958,
      lng: 76.6394,

      size: 0.35,

      color: "#22c55e",

      label: "💼 Mysore",
    },

  ];


  useEffect(() => {

    if (globeEl.current) {

      globeEl.current.pointOfView(

        {

          lat: 20,

          lng: 78,

          altitude: 2,

        },

        0

      );



      globeEl.current.controls().autoRotate = true;

      globeEl.current.controls().autoRotateSpeed = 0.5;

      globeEl.current.controls().enableZoom = false;

      globeEl.current.controls().enablePan = false;

    }

  }, []);



  return (

    <div

      className="

      absolute



      top-[-140px]

      right-[-130px]



      scale-[0.45]



      opacity-100



      md:top-1/2

      md:right-[20px]

      md:-translate-y-1/2



      md:scale-90



      lg:scale-100



      md:opacity-70



      pointer-events-none

      select-none

      "

    >

      {/* Blue Glow */}

      <div

        className="

        absolute



        left-1/2

        top-1/2



        h-[320px]

        w-[320px]



        -translate-x-1/2

        -translate-y-1/2



        rounded-full



        bg-blue-500/20



        blur-[120px]

        "

      />



      <Globe

        ref={globeEl}

        width={600}

        height={600}



        backgroundColor="rgba(0,0,0,0)"



        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"



        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"



        pointsData={points}



        pointAltitude="size"



        pointColor="color"



        pointLabel="label"



        atmosphereColor="#3b82f6"



        atmosphereAltitude={0.35}

      />

    </div>

  );

};



export default Globe3D;