import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const ltr = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const rtl = useTransform(scrollYProgress, [1, 0], [0, 400]);
  return (
    <section className="flex flex-col items-center justify-center px-4 py-4 sm:px-8 md:px-28 snap-center md:h-[100vh]">
      <div
        className="flex flex-col md:flex-row gap-[40px] lg:gap-[80px]"
        ref={ref}
      >
        <motion.div className="md:w-1/2 hidden md:block" style={{ x: ltr }}>
          <h2 className="font-header text-[80px] text-right mb-8">
            Hard skills
          </h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Main languages:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            JavaScript, <br />
            TypeScript
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Front-end techs I worked with:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            HTML5, CSS3, LESS/SASS, Tailwind,
            <br />
            React, Gulp, Vite, Git
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Speaking languages:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            Russian (Native),
            <br />
            English (IELTS 8.0/C1),
            <br /> Chinese (B2).
          </p>
        </motion.div>
        <div className="md:w-1/2 block md:hidden">
          <h2 className="font-header text-[80px] text-right mb-8">
            Hard skills
          </h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Main languages:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            JavaScript, <br />
            TypeScript
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Front-end techs I worked with:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            HTML5, CSS3, LESS/SASS, Tailwind,
            <br />
            React, Gulp, Vite, Git
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Speaking languages:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            Russian (Native),
            <br />
            English (IELTS 8.0/C1),
            <br /> Chinese (B2).
          </p>
        </div>

        <motion.div className="md:w-1/2 hidden md:block" style={{ x: rtl }}>
          <h2 className="font-header text-[80px] mb-8">Soft skills</h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Experience:</h3>
          <p className="font-poppins text-[24px] mb-10 max-w-[370px]">
            Teamwork, international teams, management positions
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">
            Personal qualities:
          </h3>
          <p className="font-poppins text-[24px] mb-10">
            Inquisitive, responsible, initiative, love learning new things
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Hobbies:</h3>
          <p className="font-poppins text-[24px] mb-10 max-w-[370px]">
            Drawing, dancing, hiking and seeing nature.
          </p>
        </motion.div>
        <div className="md:w-1/2 block md:hidden">
          <h2 className="font-header text-[80px] mb-8">Soft skills</h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Experience:</h3>
          <p className="font-poppins text-[24px] mb-10 max-w-[370px]">
            Teamwork, international teams, management positions
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">
            Personal qualities:
          </h3>
          <p className="font-poppins text-[24px] mb-10">
            Inquisitive, responsible, initiative, love learning new things
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Hobbies:</h3>
          <p className="font-poppins text-[24px] mb-10 max-w-[370px]">
            Drawing, dancing, hiking and seeing nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
