import {
  hero2,
  html5,
  javascriptIcon,
  css3,
  typescript,
  tailwind,
  reactIcon,
  stick1,
  envelop,
  phone,
  gitIcon,
  linkedin,
} from "../../assets";
import styles from "../../style";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`flex sm:flex-row flex-col-reverse md:px-16 px-6`}
      id="home"
    >
      <div
        className="relative group ss:flex ss:justify-center w-full sm:w-2/3 md:w-1/2"
        onMouseEnter={() => setIsHovered((prev) => !prev)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={hero2} />
        <img
          src={stick1}
          className={`absolute top-0 ${
            isHovered ? "rotate5deg" : null
          }  transition-all`}
        />
        <img
          src={tailwind}
          className={`absolute right-28 bottom-[30px] ${
            isHovered ? "rotateIconTW" : null
          } w-[120px] ss:w-[200px]`}
        />
        <img
          src={reactIcon}
          className={`absolute right-[85px] bottom-[90px] ss:bottom-[105px] ${
            isHovered ? "rotateIconTW" : null
          } transition-all w-[70px] ss:w-[100px]`}
        />
        <img
          src={javascriptIcon}
          className={`absolute right-[130px] ss:right-[170px] bottom-[50px] rotate-[40deg] ${
            isHovered ? "rotateIconJS" : null
          } transition-all h-[55px] ss:h-[85px]`}
        />
        <img
          src={typescript}
          className={`absolute right-[85px] ss:right-[100px] bottom-10 rotate-[-35deg] ${
            isHovered ? "rotateIconTS" : null
          } transition-all h-[45px] ss:h-[70px]`}
        />
        <img
          src={css3}
          className={`absolute right-[30px] bottom-6 rotate-[20deg] ${
            isHovered ? "rotateIconCSS" : null
          } transition-all w-[50px] ss:w-20`}
        />
        <img
          src={html5}
          className={`absolute right-[40px] bottom-20 rotate-[-10deg] ${
            isHovered ? "rotateIconHTML" : null
          } transition-all w-[60px] ss:w-[100px]`}
        />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-0 p-6 items-center justify-center xl:w-1/2 sm:w-full`}
      >
        <div>
          <h1 className="font-poppins text-center text-[24px] py-4">
            Hello, I'm Kuzmina Lina
          </h1>
          <p className="font-poppins text-center">
            I'm a front end developer. Contact me:
          </p>
          <ul className="py-4 flex justify-center">
            <li className="mx-2 hover:shadow-lg active:opacity-50">
              <a href="mailto:etein@yandex.ru">
                <img src={envelop} alt="email" className="h-10" />
              </a>
            </li>
            <li className="mx-2 hover:shadow-lg active:opacity-50">
              <a href="tel:+79110234928">
                <img src={phone} alt="phone" className="h-10" />
              </a>
            </li>
          </ul>
          <p className="font-poppins text-center">My links:</p>
          <ul className="py-4 flex justify-center">
            <li className="mx-2 hover:shadow-lg active:opacity-50">
              <a href="https://github.com/KuzminaPolina">
                <img src={gitIcon} alt="GitHub" className="h-10" />
              </a>
            </li>
            <li className="mx-2 hover:shadow-lg active:opacity-50">
              <a href="https://www.linkedin.com/in/kuzminalina/">
                <img src={linkedin} alt="phone" className="h-10" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
