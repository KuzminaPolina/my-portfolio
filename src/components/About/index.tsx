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
    <section
      id="about"
      className="flex flex-col items-center justify-center px-4 py-4 sm:px-8 md:px-28 snap-center md:h-[100vh]"
    >
      <div
        className="flex flex-col md:flex-row gap-[40px] lg:gap-[80px]"
        ref={ref}
      >
        <motion.div
          className="md:w-1/2 hidden md:block max-w-[500px]"
          style={{ x: ltr }}
        >
          <h2 className="font-header text-[80px] text-right mb-8">
            Hard skills
          </h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Website layout:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            HTML5, semantic tags, SEO adaptation, adaptive and responsive
            layout, adaptive images, loading speed adjustment, resources
            preloading
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Website styling:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            CSS3, LESS/SASS, Tailwind,
            <br />
            Styled components for React
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Website functionality:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            JavaScript, TypeScript, React, MobX
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Work automatization:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            Gulp, Vite,
            <br />
            Git, task managers (Trello, Linear, etc.)
          </p>
        </motion.div>
        <div className="md:w-1/2 block md:hidden max-w-[500px]">
          <h2 className="font-header text-[60px] md:text-[80px] text-right mb-8">
            Hard skills
          </h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Website layout:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            HTML5, semantic tags, SEO adaptation, <br />
            adaptive and responsive layout, adaptive images, <br />
            loading speed adjustment, resources preloading
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Website styling:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            CSS3, LESS/SASS, Tailwind,
            <br />
            Styled components for React
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Website functionality:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            JavaScript, TypeScript, React, MobX
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Work automatization:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            Gulp, Vite,
            <br />
            Git, task managers (Trello, Linear, etc.)
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Speaking languages:
          </h3>
          <p className="font-poppins text-[24px] mb-10 text-right">
            Russian (Native), English (IELTS 8.0/C1), Chinese (TOCFL/B2).
          </p>
        </div>

        <motion.div
          className="md:w-1/2 hidden md:block max-w-[500px]"
          style={{ x: rtl }}
        >
          <h2 className="font-header text-[80px] mb-8">Soft skills</h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">
            Communication:
          </h3>
          <p className="font-poppins text-[24px] mb-10">
            Teamwork, multi-cultural communication, conflict resolution,
            compromise, subordination
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">
            Personal qualities:
          </h3>
          <p className="font-poppins text-[24px] mb-10">
            Motivated, adaptable, meticulous learner, proactive
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">
            Speaking languages:
          </h3>
          <p className="font-poppins text-[24px] mb-10">
            Russian (Native), English (IELTS 8.0/C1), Chinese (TOCFL/B2).
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Hobbies:</h3>
          <p className="font-poppins text-[24px] mb-10">
            Drawing, dancing, hiking and seeing nature.
          </p>
        </motion.div>
        <div className="md:w-1/2 block md:hidden">
          <h2 className="font-header text-[60px] md:text-[80px] mb-8">
            Soft skills
          </h2>
          <h3 className="font-menu2 uppercase text-[24px] mb-4">Experience:</h3>
          <p className="font-poppins text-[20px] mb-10 ">
            Teamwork, international teams, management positions
          </p>
          <h3 className="font-menu2 uppercase text-[24px] mb-4">
            Personal qualities:
          </h3>
          <p className="font-poppins text-[20px] mb-10">
            Inquisitive, responsible, initiative, love learning new things
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">
            Speaking languages:
          </h3>
          <p className="font-poppins text-[24px] mb-10">
            Russian (Native), English (IELTS 8.0/C1), Chinese (TOCFL/B2).
          </p>
          <h3 className="font-menu2 uppercase text-[24px] mb-4">Hobbies:</h3>
          <p className="font-poppins text-[20px] mb-10">
            Drawing, dancing, hiking and seeing nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
