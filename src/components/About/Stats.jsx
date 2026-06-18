const stats = [
    {
      number: "6+",
      label: "Projects",
    },
  
    {
      number: "Open",
      label: "For Work",
    },
  
    {
      number: "MERN",
      label: "Stack",
    },
  ];
  
  const Stats = () => {
    return (
      <div className="mt-10 flex flex-wrap gap-4">
  
        {stats.map((item) => (
  
          <div
            key={item.label}
            className="
            rounded-2xl
  
            border
  
            border-zinc-800
  
            bg-zinc-900/50
  
            px-8
  
            py-5
  
            backdrop-blur
          "
          >
  
            <h3 className="text-2xl font-bold">
  
              {item.number}
  
            </h3>
  
            <p className="mt-2 text-sm text-zinc-400">
  
              {item.label}
  
            </p>
  
          </div>
  
        ))}
  
      </div>
    );
  };
  
  export default Stats;