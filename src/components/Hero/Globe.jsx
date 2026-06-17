const Globe = () => {

    return (
  
      <div
  
        className="
  
        absolute
  
        left-1/2
  
        top-1/2
  
        -translate-x-1/2
  
        -translate-y-1/2
  
        pointer-events-none
  
        "
  
      >
  
        {/* Outer glow */}
  
        <div
  
          className="
  
          absolute
  
          h-[500px]
  
          w-[500px]
  
          rounded-full
  
          bg-blue-500/10
  
          blur-[120px]
  
          animate-pulse
  
          "
  
        />
  
  
  
        {/* Globe */}
  
        <div
  
          className="
  
          relative
  
          h-[350px]
  
          w-[350px]
  
          rounded-full
  
          border
  
          border-zinc-700/50
  
          opacity-40
  
          "
  
        >
  
          {/* Horizontal lines */}
  
          <div className="absolute top-1/4 left-0 right-0 border-t border-zinc-700/40" />
  
          <div className="absolute top-1/2 left-0 right-0 border-t border-zinc-700/40" />
  
          <div className="absolute top-3/4 left-0 right-0 border-t border-zinc-700/40" />
  
  
  
          {/* Vertical lines */}
  
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-zinc-700/40" />
  
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-zinc-700/40" />
  
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-zinc-700/40" />
  
  
  
          {/* Rotating ring */}
  
          <div
  
            className="
  
            absolute
  
            inset-0
  
            rounded-full
  
            border
  
            border-blue-400/40
  
            animate-[spin_20s_linear_infinite]
  
            "
  
          />
  
        </div>
  
      </div>
  
    );
  
  };
  
  
  
  export default Globe;