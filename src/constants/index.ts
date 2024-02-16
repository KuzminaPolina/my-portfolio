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
    isOpen: false,
  },
  {
    id: "2",
    img: binnie,
    isOpen: false,
  },
  {
    id: "3",
    img: han,
    isOpen: false,
  },
  {
    id: "4",
    img: minho,
    isOpen: false,
  },
  {
    id: "5",
    img: hyunjin,
    isOpen: false,
  },
  {
    id: "6",
    img: puppy,
    isOpen: false,
  },
  {
    id: "7",
    img: felix,
    isOpen: false,
  },
  {
    id: "8",
    img: innie,
    isOpen: false,
  },
  {
    id: "9",
    img: hongjoong,
    isOpen: false,
  },
  {
    id: "10",
    img: seonghwa,
    isOpen: false,
  },
  {
    id: "11",
    img: san,
    isOpen: false,
  },
  {
    id: "12",
    img: woo,
    isOpen: false,
  },
  {
    id: "13",
    img: yeo,
    isOpen: false,
  },
  {
    id: "14",
    img: mingi,
    isOpen: false,
  },
  {
    id: "15",
    img: yunho,
    isOpen: false,
  },
  {
    id: "16",
    img: jongho,
    isOpen: false,
  },
];
