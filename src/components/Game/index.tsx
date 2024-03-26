import { v4 as uuidv } from "uuid";
import { picsCollection, rewardArray } from "../../constants";
import { useEffect, useState, useCallback } from "react";

interface Card {
  id: string;
  img: string;
  isOpen: boolean;
  isDisabled: boolean;
}

let finalGameSet: Card[] = [];

const pickRandomRewardImg = () => {
  const randomNo = Math.floor(Math.random() * rewardArray.length);
  return rewardArray[randomNo].img;
};

const pickRandomCardsFromCollection = (array: Array<Card>) => {
  const newArray: Array<Card> = [];

  const guardian = new Set();
  while (newArray.length < 16) {
    const randomNo = Math.floor(Math.random() * array.length);
    if (guardian.has(randomNo)) {
      continue;
    }
    const newEl = array[randomNo];
    guardian.add(randomNo);
    newArray.push(newEl);
    newArray.push(newEl);
  }
  return newArray;
};

const randomizeSelectedCards = (array: Array<Card>) => {
  const randomizedArray: Array<Card> = [];

  const guardian = new Set();
  while (randomizedArray.length < 16) {
    const randomNo = Math.floor(Math.random() * array.length);
    if (guardian.has(randomNo)) {
      continue;
    }
    const newEl = array[randomNo];
    guardian.add(randomNo);
    randomizedArray.push(newEl);
  }
  return randomizedArray;
};

const saveToLocal = (array: Array<Card>) => {
  localStorage.setItem("initialCards", JSON.stringify(array));
};

const setGame = () => {
  const selectCardsFromCollection: Array<Card> =
    pickRandomCardsFromCollection(picsCollection);
  const randomizedCards: Array<Card> = randomizeSelectedCards(
    selectCardsFromCollection
  );
  const randomizeSelectedCardsIDs: Array<Card> = randomizedCards.map((card) => {
    const newID = uuidv();
    return { ...card, id: newID.toString() };
  });
  finalGameSet = randomizeSelectedCardsIDs;
  saveToLocal(randomizeSelectedCardsIDs);
  return finalGameSet;
};

const retrieveFromLocal = () => {
  const gameFromLocal = localStorage.getItem("initialCards");
  if (gameFromLocal !== null) {
    finalGameSet = JSON.parse(gameFromLocal);
    return finalGameSet;
  } else {
    finalGameSet = setGame();
    return finalGameSet;
  }
};

const VictoryReward = (props) => {
  const randomRewardImg = pickRandomRewardImg();
  return (
    <div className="absolute top-0 left-0 w-full h-full flex place-content-center">
      <div className="relative w-full">
        <img
          src={randomRewardImg}
          alt="Cute k-pop idol"
          className="rounded-xl"
        />
        <div className="message absolute bottom-[10%] left-0 bg-[#ffffff88] w-full flex flex-col place-items-center  py-5">
          <p className="text-center font-poppins text-[18px] ss:-[20px] md:text-[24px] text-black">
            Congratulations! You won! Wanna go again?
          </p>
          <ResetButton onClick={props.onClick} text="Play Again" />
        </div>
      </div>
    </div>
  );
};

const ResetButton = (props) => {
  return (
    <button
      type="button"
      className="colorful-gradient px-8 py-2 text-white rounded-xl my-5"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

const Game = () => {
  retrieveFromLocal();

  const [cards, setCards] = useState(finalGameSet);
  const [openEls, setOpenEls] = useState<Card[]>([]);
  const [result, setResult] = useState<Card[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [victory, setVictory] = useState<boolean>(false);

  const disable = () => {
    setDisabled(true);
  };

  const enable = () => {
    setDisabled(false);
  };

  useEffect(() => {
    if (result.length === finalGameSet.length) {
      setTimeout(() => {
        setVictory(true);
      }, 500);
    }
  }, [result]);

  const clearLocalStorage = () => {
    setResult([]);
    localStorage.removeItem("initialCards");
    setGame();
    const resetGame = retrieveFromLocal();
    setCards(resetGame);
    setVictory(false);
  };

  const compare = useCallback(() => {
    const elOne = openEls[0];
    const elTwo = openEls[1];
    if (elOne.img === elTwo.img) {
      setResult((prevResult) => [...prevResult, elOne, elTwo]);
      setOpenEls([]);
      enable();
    } else {
      const arrayForDiffImgs = cards.map((card) => {
        return card.id === elOne.id || card.id === elTwo.id
          ? { ...card, isOpen: false, isDisabled: false }
          : card;
      });
      setTimeout(() => {
        setCards(arrayForDiffImgs);
        enable();
      }, 700);
      setOpenEls([]);
    }
  }, [cards, openEls]);

  useEffect(() => {
    if (openEls.length === 2) {
      disable();
      compare();
    }
  }, [openEls, compare]);

  const handleClick = (id: string) => {
    if (disabled) return;

    setCards((oldCards) => {
      const newArray = oldCards.map((card) => {
        return card.id === id
          ? { ...card, isOpen: !card.isOpen, isDisabled: true }
          : card;
      });
      return newArray;
    });

    const openEl = cards.find((card) => {
      return card.id === id;
    });
    if (openEl === undefined) {
      throw new TypeError("where the hell is my card");
    }
    setOpenEls((prevOpenEls) => [...prevOpenEls, openEl]);
    if (openEls.length === 2) {
      disable();
    }
  };

  const cardsEls = cards.map((card) => {
    return (
      <div
        style={{
          background: card.isOpen ? `url(${card.img}) center/100%` : "#ffe6ea",
          borderRadius: "12px",
        }}
        key={card.id}
        id={card.id}
        onClick={() => {
          card.isDisabled || disabled ? null : handleClick(card.id);
        }}
      ></div>
    );
  });

  return (
    <section id="relax" className="flex flex-col justify-center items-center">
      <div className="container w-fit h-fit mx-auto pb-10 flex flex-col items-center">
        <h2 className="font-header text-[50px] ss:text-[60px] md:text-[80px] text-center">
          Play the game
        </h2>
        <p className="font-poppins text-[20px] ss:text-[22px] text-center">
          Find and open all matching cards:
        </p>
        <ResetButton onClick={clearLocalStorage} text="Reset Game" />
        <div className="game-wrapper relative">
          <div className="gamefield grid grid-cols-4 grid-rows-4 gap-1 w-[290px] h-[290px] ss:w-[600px] ss:h-[600px] md:w-[812px] md:h-[812px]">
            {cardsEls}
          </div>
          {victory && <VictoryReward onClick={clearLocalStorage} />}
        </div>
      </div>
    </section>
  );
};

export default Game;
