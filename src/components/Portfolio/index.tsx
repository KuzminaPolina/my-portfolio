import React from "react";
import { projects } from "../../constants";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ project }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const ltr = useTransform(scrollYProgress, [0, 1], [-900, 0]);
  const rtl = useTransform(scrollYProgress, [1, 0], [0, 900]);

  return (
    <div className="sm:h-[50vh] md:h-[90vh] mb-10 sm:mb-0">
      <div className="container flex items-center justify-center w-[100%] sm:h-[100%] overflow-hidden m-auto">
        <div
          className="wrapper w-fit md:w-[80%] lg:w-fit h-fit md:h-[100%] flex flex-col sm:flex-row items-center justify-center gap-[0px] sm:gap-[50px] md:gap-[80px] sm:px-[40px] md:px-[0px]"
          ref={ref}
        >
          <motion.div
            className="imgContainer flex-1 max-h-[500px] hidden sm:block"
            style={{ x: ltr }}
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={project.img_desktop} />
              <img
                src={project.img_mobile}
                alt="handpainted website screenshot"
                width="700"
                className="object-cover h-[100%] w-[100%]"
              />
            </picture>
          </motion.div>

          <div className="imgContainer flex-1 max-h-[500px] block sm:hidden my-5">
            <picture>
              <img
                src={project.img_mobile}
                alt="handpainted website screenshot"
                width="700"
                className="object-cover h-[100%] w-[100%]"
              />
            </picture>
          </div>

          <motion.div
            className="textContainer hidden sm:flex flex-col gap-[20px] md:gap-[20px] flex-1 z-0"
            style={{ x: rtl }}
          >
            <h3 className="font-menu font-extrabold uppercase text-[50px] md:text-[60px]">
              {project.title}
            </h3>
            <ul className="list-disc pl-[20px]">
              <li>{project.feature}</li>
              <li>{project.stack}</li>
              <li>{project.additionalInfo}</li>
            </ul>
            <a
              href={project.link}
              target="_blank"
              className="font-menu text-[30px] h-10 px-5 link-button text-white w-fit"
            >
              Show me the website!
            </a>
          </motion.div>

          <div className="textContainer flex flex-col gap-[30px] z-0 sm:hidden my-5">
            <h3 className="font-menu font-extrabold uppercase text-[50px]">
              {project.title}
            </h3>
            <ul className="list-disc pl-[20px]">
              <li>{project.feature}</li>
              <li>{project.stack}</li>
              <li>{project.additionalInfo}</li>
            </ul>
            <a
              href={project.link}
              className="font-menu text-[30px] h-10 px-5 link-button text-white w-fit"
            >
              Show me the website!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <section className="relative bg-slate-50" ref={ref} scroll-snap>
      <div className="progress sticky top-0 left-0 bottom-0 pt-[50px] text-center overflow-hidden bg-slate-50 z-10">
        <h2 className="font-header text-[60px] md:text-[80px] text-center">
          Portfolio
        </h2>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-[10px] colorful-gradient"
        ></motion.div>
      </div>
      {projects.map((project) => (
        <Single project={project} key={project.id} />
      ))}
    </section>
  );
};

export default Portfolio;
