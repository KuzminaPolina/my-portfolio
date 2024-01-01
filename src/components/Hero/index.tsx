import { hero2 } from "../../assets";
import styles from "../../style";

const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col-reverse ${styles.paddingX}`}
      id="home"
    >
      <div>
        <img src={hero2} />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 items-center justify-center xl:w-1/2 sm:w-full`}
      >
        <div>
          <h1 className="font-poppins text-center text-[24px] py-4">
            Hello, I'm Kuzmina Lina
          </h1>
          <p className="font-poppins text-center">
            I'm a front end developer. Let me show you what I can do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
