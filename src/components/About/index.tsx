const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-4 sm:px-8 md:px-28 snap-center h-[100vh]">
      <div className="flex flex-col md:flex-row self-center w-[100%] gap-8">
        <div className="md:w-1/2">
          <h2 className="font-header text-[80px] text-right pb-8">
            Hard skills
          </h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Main languages:
          </h3>
          <p className="font-poppins text-[24px] mb-8 text-right">
            JavaScript, <br />
            TypeScript
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Front-end techs I worked with:
          </h3>
          <p className="font-poppins text-[24px] mb-8 text-right">
            HTML5, CSS3, LESS/SASS, Tailwind,
            <br />
            React, Gulp, Vite, Git
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Speaking languages:
          </h3>
          <p className="font-poppins text-[24px] mb-8 text-right">
            Russian (Native),
            <br />
            English (IELTS 8.0/C1),
            <br /> Chinese (B2).
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="font-header text-[80px] pb-8">Soft skills</h2>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Experience:</h3>
          <p className="font-poppins text-[24px] mb-8 max-w-[370px]">
            Teamwork, international teams, management positions
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">
            Personal qualities:
          </h3>
          <p className="font-poppins text-[24px] mb-8">
            Inquisitive, responsible, initiative,
            <br />
            love learning new things
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Hobbies:</h3>
          <p className="font-poppins text-[24px] mb-8 max-w-[370px]">
            Drawing, dancing, hiking and seeing nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
