import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const contacts = [

  {
    title: "Gmail",
  
    subtitle: "Click to send me an email",
  
    icon: FaEnvelope,
  
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=rishimittalworks@gmail.com&su=Opportunity%20for%20Rishi%20Mittal",
  
  },



  {

    title: "LinkedIn",

    subtitle: "Connect with me",

    icon: FaLinkedin,

    link:

      "https://www.linkedin.com/in/rishi-mittal-a8a7b7275/",

  },



  {

    title: "GitHub",

    subtitle: "View my projects",

    icon: FaGithub,

    link:

      "https://github.com/ImrishiMittal",

  },



  {

    title: "X",

    subtitle: "Follow my journey",

    icon: FaXTwitter,

    link:

      "https://x.com/ImrishiMittal",

  },

];



const Contact = () => {

  return (

    <section

      id="contact"

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

          CONTACT

        </p>



        <h2

          className="

          mt-4

          text-5xl

          md:text-7xl

          font-bold

        "

        >

          Let's Build Something

          <br />

          Amazing Together

        </h2>



        <p

          className="

          mt-8

          max-w-2xl

          text-lg

          leading-relaxed

          text-zinc-400

        "

        >

          I'm always open to discussing

          new opportunities,

          freelance projects,

          or simply talking tech.

        </p>



        <div

          className="

          mt-20

          grid

          gap-8

          md:grid-cols-2

        "

        >

          {

            contacts.map((item) => {

              const Icon = item.icon;



              return (

                <a

                  key={item.title}

                  href={item.link}

                  target="_blank"

                  rel="noreferrer"

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

                    flex

                    h-16

                    w-16

                    items-center

                    justify-center

                    rounded-2xl

                    border

                    border-zinc-800

                    bg-zinc-950

                    transition

                    duration-300

                    group-hover:border-blue-500/40

                  "

                  >

                    <Icon

                      className="

                      text-3xl

                      transition

                      duration-300

                      group-hover:scale-110

                    "

                    />

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

                    mt-3

                    text-zinc-400

                  "

                  >

                    {item.subtitle}

                  </p>

                </a>

              );

            })

          }

        </div>



        <div

          className="

          mt-16

          flex

          flex-wrap

          gap-4

        "

        >

          <span

            className="

            rounded-full

            border

            border-zinc-700

            px-5

            py-3

            text-zinc-400

          "

          >

            ✓ Available for Full Time

          </span>



          <span

            className="

            rounded-full

            border

            border-zinc-700

            px-5

            py-3

            text-zinc-400

          "

          >

            ✓ Open to Freelance

          </span>



          <span

            className="

            rounded-full

            border

            border-zinc-700

            px-5

            py-3

            text-zinc-400

          "

          >

            ✓ Remote Friendly

          </span>

        </div>

      </div>

    </section>

  );

};

export default Contact;