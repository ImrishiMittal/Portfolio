import Globe from "react-globe.gl";
import { useRef, useEffect, useCallback } from "react";

const Globe3D = () => {
  const globeEl = useRef();
  const mobileGlobeEl = useRef();

  const initControls = useCallback((ref) => {
    if (!ref.current) return;
    const controls = ref.current.controls();
    if (!controls) {
      // WebGL scene isn't mounted yet on this tick — retry next frame
      requestAnimationFrame(() => initControls(ref));
      return;
    }
    ref.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 0);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.7;
    controls.enableZoom = false;
    controls.enablePan = false;
  }, []);

  const locationPoints = [
    {
      lat: 23.6693,
      lng: 86.1511,
      size: 0.45,
      color: "#60a5fa",
      label: "🏠 Bokaro",
    },
    {
      lat: 26.9124,
      lng: 75.7873,
      size: 0.35,
      color: "#f59e0b",
      label: "🎓 Jaipur",
    },
    {
      lat: 12.2958,
      lng: 76.6394,
      size: 0.35,
      color: "#22c55e",
      label: "💼 Mysore",
    },
  ];

  const techStack = [
    { icon: "⚛",  name: "React",   lat: 35,   lng: 80   },
    { icon: "🐍",  name: "Python",     lat: 50,   lng: 0    },
    { icon: "🤖", name: "AI/ML",   lat: -20,  lng: 140  },
    { icon: "☕", name: "Java",    lat: 40,   lng: -100  },
    { icon: "🐬", name: "SQL",     lat: -30,  lng: -60  },
    { icon: "🟢", name: "Node",    lat: 60,   lng: 150  },
    { icon: "🍃", name: "MongoDB", lat: 10,   lng: -20  },
  ];

  const htmlElement = useCallback((d) => {
    const el = document.createElement("div");
    el.style.cssText = `
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(24, 24, 27, 0.85);
      border: 1px solid rgba(59, 130, 246, 0.25);
      border-radius: 999px;
      padding: 5px 12px;
      backdrop-filter: blur(8px);
      pointer-events: none;
      white-space: nowrap;
      font-family: 'Geist Variable', sans-serif;
    `;
    el.innerHTML = `
      <span style="font-size:16px; line-height:1;">${d.icon}</span>
      <span style="font-size:13px; color: rgb(212, 212, 216); font-weight: 500;">${d.name}</span>
    `;
    return el;
  }, []);

  useEffect(() => {
    initControls(globeEl);
    initControls(mobileGlobeEl);
  }, [initControls]);

  return (
    <>
      {/* ── MOBILE: sits below the hero text, centred, not overlapping ── */}
      <div className="
        flex md:hidden
        justify-center
        w-full
        mt-6
        pointer-events-none
        select-none
        opacity-80
      ">
        <div className="relative w-[260px] h-[260px]">
          {/* Glow */}
          <div className="
            absolute left-1/2 top-1/2
            h-[220px] w-[220px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-blue-500/20 blur-[80px]
          " />
          <Globe
            ref={mobileGlobeEl}
            width={260}
            height={260}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            showAtmosphere={true}
            atmosphereColor="#3b82f6"
            atmosphereAltitude={0.25}
            pointsData={locationPoints}
            pointAltitude="size"
            pointColor="color"
            pointLabel="label"
            htmlElementsData={techStack}
            htmlElement={htmlElement}
            htmlAltitude={0.08}
            onGlobeReady={() => {}}
          />
        </div>
      </div>

      {/* ── DESKTOP: absolute, vertically centred, shifted further left ── */}
      <div className="
        hidden md:block
        absolute
        top-1/2
        right-[60px]
        -translate-y-1/2
        pointer-events-none
        select-none
      ">
        {/* Glow */}
        <div className="
          absolute left-1/2 top-1/2
          h-[420px] w-[420px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-blue-500/20 blur-[130px]
        " />
        <Globe
          ref={globeEl}
          width={520}
          height={520}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="#3b82f6"
          atmosphereAltitude={0.25}
          pointsData={locationPoints}
          pointAltitude="size"
          pointColor="color"
          pointLabel="label"
          htmlElementsData={techStack}
          htmlElement={htmlElement}
          htmlAltitude={0.08}
        />
      </div>
    </>
  );
};

export default Globe3D;
