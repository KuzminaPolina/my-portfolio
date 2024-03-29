import React from "react";
import { crowSound } from "../../assets";
import { motion, useScroll, useTransform } from "framer-motion";

const Resume = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const moveText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const moveCrow = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  const moveBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const moveCrowBack = useTransform(scrollYProgress, [0, 1], ["0", "-600%"]);
  const moveBarBack = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  function play() {
    new Audio(crowSound).play();
  }

  return (
    <section
      id="resume"
      className="relative flex h-[80vh] w-[100%] md:h-[90vh] justify-center items-center overflow-hidden bg-slate-50"
      ref={ref}
    >
      <motion.a
        href="https://drive.google.com/file/d/1PtcrYBtjl-KbMHMZgxgNl03TBokj0Nqm/view?usp=drive_link"
        target="_blank"
        className="font-menu font-extrabold uppercase text-[50px] lg:text-[60px] absolute p-4 menu md:block hidden outline-text"
        style={{ y: moveText }}
      >
        My resume (CV)
      </motion.a>
      <a
        href="https://drive.google.com/file/d/1PtcrYBtjl-KbMHMZgxgNl03TBokj0Nqm/view?usp=drive_link"
        target="_blank"
        className="font-menu uppercase text-[40px] absolute p-4 menu md:hidden block outline-text"
      >
        My resume (CV)
      </a>

      <div className="w-[100%] h-[5%] absolute bg-dotted-top hidden md:block">
        <motion.div
          className="w-[100%] h-[25px] gradient-for-dots-top"
          style={{ x: moveBar }}
        ></motion.div>
      </div>
      <div className="md:hidden bg-dotted-top"></div>
      <div className="w-[100%] h-[5%] absolute bottom-[130px] bg-dotted-bottom hidden md:block">
        <motion.div
          className="w-[100%] h-[25px] gradient-for-dots-bottom"
          style={{ x: moveBarBack }}
        ></motion.div>
      </div>
      <div className="md:hidden bg-dotted-bottom"></div>

      <motion.div
        className="crow-bg-top md:block hidden"
        style={{ x: moveCrow }}
        onHoverStart={() => {
          play();
        }}
      ></motion.div>
      <div
        className="md:hidden crow-bg-top"
        style={{ top: "140px", width: "150px" }}
      ></div>
      <motion.div
        className="crow-bg-bottom md:block hidden"
        style={{ x: moveCrowBack }}
        onHoverStart={() => {
          play();
        }}
      ></motion.div>
      <div
        className="md:hidden crow-bg-bottom"
        style={{ bottom: "70px", width: "150px" }}
      ></div>
    </section>
  );
};

export default Resume;
