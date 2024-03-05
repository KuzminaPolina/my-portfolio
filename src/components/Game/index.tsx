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

const Game = () => {
  retrieveFromLocal();

  const [cards, setCards] = useState(finalGameSet);
  const [openEls, setOpenEls] = useState<Card[]>([]);
  const [result, setResult] = useState<Card[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const disable = () => {
    setDisabled(true);
  };

  const enable = () => {
    setDisabled(false);
  };

  useEffect(() => {
    if (result.length === finalGameSet.length) {
      setTimeout(() => {
        alert("Congratulations!");
      }, 300);
    }
  }, [result]);

  const clearLocalStorage = () => {
    setResult([]);
    localStorage.removeItem("initialCards");
    setGame();
    const resetGame = retrieveFromLocal();
    setCards(resetGame);
  };

  const compare = useCallback(() => {
    const elOne = openEls[0];
    const elTwo = openEls[1];
    //enable();
    if (elOne.img === elTwo.img) {
      setResult((prevResult) => [...prevResult, elOne, elTwo]);
      setOpenEls([]);
    } else {
      const arrayForDiffImgs = cards.map((card) => {
        return card.id === elOne.id || card.id === elTwo.id
          ? { ...card, isOpen: false, isDisabled: false }
          : card;
      });
      setTimeout(() => {
        setCards(arrayForDiffImgs);
      }, 700);
      setOpenEls([]);
    }
  }, [cards, openEls]);

  useEffect(() => {
    if (openEls.length === 2) {
      compare();
    }
  }, [openEls, compare]);

  const handleClick = (id: string) => {
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
          Open all matching cards:
        </p>
        <div className="controls-wrapper flex items-center justify-end w-[45%] gap-1 mb-7">
          <button
            className="bg-slate-500 px-8 py-2 text-white rounded-xl"
            onClick={clearLocalStorage}
          >
            Reset Game
          </button>
        </div>
        <div className="game-wrapper">
          <div className="gamefield grid grid-cols-4 grid-rows-4 gap-1">
            {cardsEls}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
