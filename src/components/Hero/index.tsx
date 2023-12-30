import { hero } from "../../assets";

const Hero = () => {
  return (
    <div className="flex">
      <div>
        <img src={hero} />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <div>
          <h1 className="font-poppins text-center text-[24px] py-4">
            Hello, my name is Lina
          </h1>
          <p className="font-poppins text-center">
            I need a job. So I made this website to let you know exactly why you
            should hire me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
