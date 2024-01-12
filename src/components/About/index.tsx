const About = () => {
  return (
    <div className="flex flex-col p-28">
      <h2 className="font-header text-[100px] text-center">About Me:</h2>
      <div className="flex flex-col md:flex-row self-center w-[100%] gap-8">
        <div className="w-1/2">
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Name:
          </h3>
          <p className="font-poppins text-[24px] mb-8 text-right">
            Kuzmina Polina
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Birthday:
          </h3>
          <p className="font-poppins text-[24px] mb-8 text-right">23.11.1988</p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4 text-right">
            Working languages:
          </h3>
          <p className="font-poppins text-[24px] mb-8 text-right">
            Russian (Native), English (IELTS 8.0/C1), Chinese (B2)
          </p>
        </div>
        <div className="w-1/2">
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Skills:</h3>
          <p className="font-poppins text-[24px] mb-8">
            HTML5, CSS3, LESS/SASS, Javascript, Git.
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">Hobbies:</h3>
          <p className="font-poppins text-[24px] mb-8">
            Learning, drawing, dancing.
          </p>
          <h3 className="font-menu2 uppercase text-[28px] mb-4">
            Favorite animals:
          </h3>
          <p className="font-poppins text-[24px] mb-8">Dogs, cats, dolphins.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
