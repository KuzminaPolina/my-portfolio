import { v4 as uuidv } from "uuid";
import { picsCollection } from "../../constants";
import { useEffect, useState, useCallback } from "react";

interface Card {
  id: string;
  img: string;
  isOpen: boolean;
  isDisabled: boolean;
}

let finalGameSet: Card[] = [];

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

const VictoryMsg = (props) => {
  return (
    <div className="bg-opacity-50 bg-white absolute top-0 left-0 w-full h-full flex place-content-center">
      <div
        className="flex flex-col justify-center py-5 absolute top-[40%] left-[25%] w-[50%] bg-rose-200 shadow-xl p-8"
        style={{
          borderRadius: "12px",
          border: "solid 8px #ff7088",
        }}
      >
        <p className="text-center font-poppins text-[24px] mb-10 text-white">
          Congratulations! You won! Wanna try again?
        </p>
        <ResetButton onClick={props.onClick} text="Play Again" />
      </div>
    </div>
  );
};

const ResetButton = (props) => {
  return (
    <button
      className="colorful-gradient px-8 py-2 text-white rounded-xl"
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
    //enable();
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
          background: card.isOpen
            ? `url(${card.img}) center/200px 200px`
            : "#ffe6ea",
          width: "200px",
          height: "200px",
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
    <section>
      <div className="container flex flex-col items-center justify-between">
        <h2 className="font-header text-[60px] md:text-[80px] text-center">
          Play the game
        </h2>
        <p className="font-poppins text-[24px] mb-10 text-center">
          Find and open all matching cards:
        </p>
        <div className="controls-wrapper flex items-center justify-end w-[45%] gap-1 mb-7">
          <ResetButton onClick={clearLocalStorage} text="Reset Game" />
        </div>
        <div className="game-wrapper relative">
          <div className="gamefield grid grid-cols-4 grid-rows-4 gap-1">
            {cardsEls}
          </div>
          {victory && <VictoryMsg onClick={clearLocalStorage} />}
        </div>
      </div>
    </section>
  );
};

export default Game;
