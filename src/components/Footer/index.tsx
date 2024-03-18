import { socialMedia } from "../../constants";

const Footer = () => {
  const contactsEls = socialMedia.map((item) => {
    return (
      <li className="flex flex-col justify-center items-center">
        <a href={item.link}>
          <img src={item.iconWhite} className="h-10" />
        </a>
      </li>
    );
  });

  return (
    <div className="bg-black text-white py-16">
      <ul className="grid grid-cols-4 w-[80%] mx-auto">{contactsEls}</ul>
    </div>
  );
};

export default Footer;
