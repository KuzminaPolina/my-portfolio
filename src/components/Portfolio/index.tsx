import React from "react";
import { sedona, gym, travels } from "../../assets";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects: {
  id: number;
  title: string;
  img: string;
  feature: string;
  stack: string;
  additionalInfo: string;
}[] = [
  {
    id: 1,
    title: "Sedona",
    img: sedona,
    feature: "Adaptive website",
    stack: "HTML, CSS, LESS, Gulp, JavaScript",
    additionalInfo: "All pages clickable",
  },
  {
    id: 2,
    title: "Gym",
    img: gym,
    feature: "Fully responsive landing page",
    stack: "HTML, CSS, SASS, Gulp, Javascript",
    additionalInfo: "Responsive sliders",
  },
  {
    id: 3,
    title: "Travels",
    img: travels,
    feature: "Fully responsive landing page",
    stack: "HTML, CSS, SASS, Gulp, Javascript",
    additionalInfo: "Transparent menu over slider hero section",
  },
];

const Single = ({ project }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const ltr = useTransform(scrollYProgress, [0, 1], [-900, 0]);
  const rtl = useTransform(scrollYProgress, [1, 0], [0, 900]);

  return (
    <div className="h-[90vh]">
      <div className="container flex items-center justify-center w-[100%] h-[100%] overflow-hidden">
        <div
          className="wrapper h-[100%] m-auto flex items-center justify-center gap-[80px]"
          ref={ref}
        >
          <motion.div
            className="imgContainer flex-1 max-h-[500px]"
            style={{ x: ltr }}
          >
            <img
              src={project.img}
              alt="handpainted website screenshot"
              width="700"
              className="object-cover h-[100%] w-[100%]"
            />
          </motion.div>
          <motion.div
            className="textContainer flex flex-col gap-[30px] flex-1 z-0"
            style={{ x: rtl }}
          >
            <h3 className="font-menu font-extrabold uppercase text-[60px] py-2 md:block hidden">
              {project.title}
            </h3>
            <ul className="list-disc pl-[20px]">
              <li>{project.feature}</li>
              <li>{project.stack}</li>
              <li>{project.additionalInfo}</li>
            </ul>
          </motion.div>
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
      <div className="progress sticky top-0 left-0 pt-[50px] text-center overflow-hidden bg-slate-50 z-10">
        <h2 className="font-header text-[80px] text-center pb-8">Portfolio</h2>
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
