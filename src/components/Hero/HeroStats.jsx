import CountUp from "react-countup";

const stats = [
  {
    number: 6,
    suffix: "+",
    label: "Projects",
  },
  {
    number: 2,
    suffix: "",
    label: "Internships",
  },
  {
    number: 500,
    suffix: "+",
    label: "DSA Problems",
    link: "https://leetcode.com/u/imrishimittal/",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
      {stats.map((item) => {
        const cardClasses = `
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/50
          px-4
          py-4
          text-center
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-blue-500/30
          hover:-translate-y-1
        `;

        const content = (
          <>
            <div className="text-2xl md:text-4xl font-bold">
            {item.number}
              {item.suffix}
            </div>

            <p className="mt-2 text-xs md:text-base text-zinc-400">
              {item.label}
            </p>
          </>
        );

        if (item.link) {
          return (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`${cardClasses} cursor-pointer block`}
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={item.label}
            className={cardClasses}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default HeroStats;