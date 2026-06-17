const interests = [

    {
      emoji: "✈️",
  
      title: "Solo Traveller",
  
      description:
  
        "I love exploring new places across India and learning from diverse cultures and experiences.",
  
    },
  
  
  
    {
  
      emoji: "🏏",
  
      title: "Cricket Enthusiast",
  
      description:
  
        "Passionate about cricket and building CricScorers, my full stack cricket scoring application.",
  
    },
  
  
  
    {
  
      emoji: "🚀",
  
      title: "Product Builder",
  
      description:
  
        "Think -> Implement -> Deploy",
  
    },
  
  
  
    {
  
      emoji: "🤖",
  
      title: "AI / ML Explorer",
  
      description:
  
        "Actively learning AI/ML and exploring how intelligent systems can create impact.",
  
    },
  
  ];
  
  
  
  const BeyondCoding = () => {
  
    return (
  
      <section
  
        id="beyond"
  
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
  
            BEYOND CODING
  
          </p>
  
  
  
          <h2
  
            className="
  
            mt-4
  
            text-5xl
  
            md:text-7xl
  
            font-bold
  
            "
  
          >
  
            Things That Drive Me
  
          </h2>
  
  
  
          <div
  
            className="
  
            mt-20
  
            grid
  
            gap-8
  
            md:grid-cols-2
  
            "
  
          >
  
            {
  
              interests.map((item) => (
  
                <div
  
                  key={item.title}
  
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
  
                  <div
  
                    className="
  
                    text-6xl
  
                    transition
  
                    duration-300
  
                    group-hover:scale-110
  
                    "
  
                  >
  
                    {item.emoji}
  
                  </div>
  
  
  
                  <h3
  
                    className="
  
                    mt-6
  
                    text-3xl
  
                    font-bold
  
                    "
  
                  >
  
                    {item.title}
  
                  </h3>
  
  
  
                  <p
  
                    className="
  
                    mt-5
  
                    text-lg
  
                    leading-relaxed
  
                    text-zinc-400
  
                    "
  
                  >
  
                    {item.description}
  
                  </p>
  
                </div>
  
              ))
  
            }
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  };
  
  
  
  export default BeyondCoding;