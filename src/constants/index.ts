import {
  facebook,
  instagram,
  linkedin,
  twitter,
  sedonaMobile,
  sedonaDesktop,
  gymMobile,
  gymDesktop,
  travelsMobile,
  travelsDesktop,
  chan,
  binnie,
  han,
  minho,
  hyunjin,
  puppy,
  felix,
  innie,
  hongjoong,
  seonghwa,
  san,
  woo,
  yeo,
  mingi,
  yunho,
  jongho,
} from "../assets";

export const navLinks = [
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
  {
    id: "relax",
    title: "Play a Game",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const projects: {
  id: number;
  title: string;
  img_mobile: string;
  img_desktop: string;
  feature: string;
  stack: string;
  additionalInfo: string;
  link: string;
}[] = [
  {
    id: 1,
    title: "Sedona",
    img_mobile: sedonaMobile,
    img_desktop: sedonaDesktop,
    feature: "Adaptive website",
    stack: "HTML, CSS, LESS, Gulp, JavaScript",
    additionalInfo: "All pages clickable",
    link: "https://kuzminapolina.github.io/2098917-sedona-new/",
  },
  {
    id: 2,
    title: "Gym",
    img_mobile: gymMobile,
    img_desktop: gymDesktop,
    feature: "Fully responsive landing page",
    stack: "HTML, CSS, SASS, Gulp, Javascript",
    additionalInfo: "Responsive sliders",
    link: "https://kuzminapolina.github.io/fitness_2.0/",
  },
  {
    id: 3,
    title: "Travels",
    img_mobile: travelsMobile,
    img_desktop: travelsDesktop,
    feature: "Fully responsive landing page",
    stack: "HTML, CSS, SASS, Gulp, Javascript",
    additionalInfo: "Transparent menu over slider hero section",
    link: "https://kuzminapolina.github.io/Travels/",
  },
];

interface Card {
  id: string;
  img: string;
  isOpen: boolean;
}

export const picsCollection: Array<Card> = [
  {
    id: "1",
    img: chan,
    isOpen: true,
  },
  {
    id: "2",
    img: binnie,
    isOpen: true,
  },
  {
    id: "3",
    img: han,
    isOpen: true,
  },
  {
    id: "4",
    img: minho,
    isOpen: true,
  },
  {
    id: "5",
    img: hyunjin,
    isOpen: true,
  },
  {
    id: "6",
    img: puppy,
    isOpen: true,
  },
  {
    id: "7",
    img: felix,
    isOpen: true,
  },
  {
    id: "8",
    img: innie,
    isOpen: true,
  },
  {
    id: "9",
    img: hongjoong,
    isOpen: true,
  },
  {
    id: "10",
    img: seonghwa,
    isOpen: true,
  },
  {
    id: "11",
    img: san,
    isOpen: true,
  },
  {
    id: "12",
    img: woo,
    isOpen: true,
  },
  {
    id: "13",
    img: yeo,
    isOpen: true,
  },
  {
    id: "14",
    img: mingi,
    isOpen: true,
  },
  {
    id: "15",
    img: yunho,
    isOpen: true,
  },
  {
    id: "16",
    img: jongho,
    isOpen: true,
  },
];
