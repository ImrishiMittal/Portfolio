const education = [

    {
  
      degree:
  
        "Bachelor of Technology (B.Tech)",
  
      field:
  
        "Information Technology",
  
      college:
  
        "Manipal University Jaipur",
  
      duration:
  
        "2022 - 2026",
  
      location:
  
        "Jaipur",
  
      cgpa:
  
        "7.2",
  
      project:
  
        "CricScorers",
  
    },
  
  
  
    {
  
      degree:
  
        "Class XII",
  
      field:
  
        "Science",
  
      college:
  
        "Mar Gregorious Memorial Senior Secondary School",
  
      duration:
  
        "2022",
  
      location:
  
        "Bokaro",
  
      cgpa:
  
        "70%",
  
    },
  
  
  
    {
  
      degree:
  
        "Class X",
  
      field:
  
        "",
  
      college:
  
        "D.A.V Public School",
  
      duration:
  
        "2020",
  
      location:
  
        "Bokaro",
  
      cgpa:
  
        "80%",
  
    },
  
  ];
  
  
  
  const Education = () => {
  
    return (
  
      <section
  
        id="education"
  
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
  
            EDUCATION
  
          </p>
  
  
  
          <h2
  
            className="
  
            mt-4
  
            text-5xl
  
            md:text-7xl
  
            font-bold
  
            "
  
          >
  
            My Academic Journey
  
          </h2>
  
  
  
          <div className="mt-20 space-y-8">
  
            {
  
              education.map((edu) => (
  
                <div
  
                  key={edu.degree}
  
                  className="
  
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
  
                  <div className="flex items-start justify-between gap-6">
  
                    <div>
  
                      <h3
  
                        className="
  
                        text-3xl
  
                        md:text-4xl
  
                        font-bold
  
                        "
  
                      >
  
                        {edu.degree}
  
                      </h3>
  
  
  
                      {
  
                        edu.field && (
  
                          <p
  
                            className="
  
                            mt-2
  
                            text-xl
  
                            text-zinc-300
  
                            "
  
                          >
  
                            {edu.field}
  
                          </p>
  
                        )
  
                      }
  
  
  
                      <p
  
                        className="
  
                        mt-4
  
                        text-2xl
  
                        text-blue-400
  
                        font-medium
  
                        "
  
                      >
  
                        {edu.college}
  
                      </p>
  
                    </div>
  
  
  
                    <div className="text-right">
  
                      <p className="text-zinc-400">
  
                        {edu.duration}
  
                      </p>
  
  
  
                      <p className="mt-2 text-zinc-500">
  
                        📍 {edu.location}
  
                      </p>
  
  
  
                      <p className="mt-4 font-semibold">
  
                        Score : {edu.cgpa}
  
                      </p>
  
                    </div>
  
                  </div>
  
  
  
                  {
  
                    edu.project && (
  
                      <div
  
                        className="
  
                        mt-8
  
                        rounded-2xl
  
                        border
  
                        border-zinc-800
  
                        bg-zinc-950/50
  
                        p-5
  
                        "
  
                      >
  
                        <p className="text-zinc-500">
  
                          Final Year Project
  
                        </p>
  
  
  
                        <p
  
                          className="
  
                          mt-2
  
                          text-lg
  
                          font-medium
  
                          "
  
                        >
  
                          {edu.project}
  
                        </p>
  
                      </div>
  
                    )
  
                  }
  
                </div>
  
              ))
  
            }
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  };
  
  export default Education;