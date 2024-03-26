import {
  gitIcon,
  phone,
  linkedin,
  envelop,
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
  rewardChan,
  rewardBin,
  rewardFelix,
  rewardHan,
  rewardJoong,
  rewardHyunjin,
  rewardIN,
  rewardJongho,
  rewardMingi,
  rewardSan,
  rewardHwa,
  rewardMin,
  rewardWoo,
  rewardYeosang,
  rewardYunho,
  rewardMinho,
  phoneWhite,
  mailWhite,
  gitWhite,
  linkedinWhite,
  sedonaMobileWebp,
  sedonaDesktopWebp,
  gymMobileWebp,
  gymDesktopWebp,
  travelMobileWebp,
  travelDesktopWebp,
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
    id: "relax",
    title: "Play a Game",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    title: "E-mail:",
    icon: envelop,
    iconWhite: mailWhite,
    link: "mailto:etein@yandex.ru",
  },
  {
    id: "social-media-3",
    title: "Phone:",
    icon: phone,
    iconWhite: phoneWhite,
    link: "tel:+79110234928",
  },
  {
    id: "social-media-3",
    title: "GitHub:",
    icon: gitIcon,
    iconWhite: gitWhite,
    link: "https://github.com/KuzminaPolina",
  },

  {
    id: "social-media-4",
    title: "LinkedIn:",
    icon: linkedin,
    iconWhite: linkedinWhite,
    link: "https://www.linkedin.com/in/kuzminalina/",
  },
];

export const projects: {
  id: number;
  title: string;
  img_mobile: string;
  img_desktop: string;
  img_mobile_webp: string;
  img_desktop_webp: string;
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
    img_mobile_webp: sedonaMobileWebp,
    img_desktop_webp: sedonaDesktopWebp,
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
    img_mobile_webp: gymMobileWebp,
    img_desktop_webp: gymDesktopWebp,
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
    img_mobile_webp: travelMobileWebp,
    img_desktop_webp: travelDesktopWebp,
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
  isDisabled: boolean;
}

export const picsCollection: Array<Card> = [
  {
    id: "1",
    img: chan,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "2",
    img: binnie,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "3",
    img: han,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "4",
    img: minho,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "5",
    img: hyunjin,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "6",
    img: puppy,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "7",
    img: felix,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "8",
    img: innie,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "9",
    img: hongjoong,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "10",
    img: seonghwa,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "11",
    img: san,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "12",
    img: woo,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "13",
    img: yeo,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "14",
    img: mingi,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "15",
    img: yunho,
    isOpen: false,
    isDisabled: false,
  },
  {
    id: "16",
    img: jongho,
    isOpen: false,
    isDisabled: false,
  },
];

interface Reward {
  id: string;
  img: string;
}

export const rewardArray: Array<Reward> = [
  {
    id: "1",
    img: rewardChan,
  },
  {
    id: "2",
    img: rewardBin,
  },
  {
    id: "3",
    img: rewardFelix,
  },
  {
    id: "4",
    img: rewardHan,
  },
  {
    id: "5",
    img: rewardJoong,
  },
  {
    id: "6",
    img: rewardHyunjin,
  },
  {
    id: "7",
    img: rewardIN,
  },
  {
    id: "8",
    img: rewardJongho,
  },
  {
    id: "9",
    img: rewardMingi,
  },
  {
    id: "10",
    img: rewardSan,
  },
  {
    id: "11",
    img: rewardHwa,
  },
  {
    id: "12",
    img: rewardMin,
  },
  {
    id: "13",
    img: rewardWoo,
  },
  {
    id: "14",
    img: rewardYeosang,
  },
  {
    id: "15",
    img: rewardYunho,
  },
  {
    id: "16",
    img: rewardMinho,
  },
];
