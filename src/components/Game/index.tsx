import { v4 as uuidv } from "uuid";
import { picsCollection } from "../../constants";
import React, { useEffect } from "react";

interface Card {
  id: string;
  img: string;
  isOpen: boolean;
}

let finalGameSet: Array<Card> = [];
/* let isGameInitialized: boolean = false;
let selectedItemId: string | null = null; */

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

const clearLocalStorage = () => {
  localStorage.removeItem("initialCards");
};

/* const compare = (array: Array<Card>) => {
  const openEls = array.filter((item) => item.isOpen);
  console.log(openEls);
  const firstEl = openEls[0];
  const secondEl = openEls[1];
  console.log(firstEl);
  console.log(secondEl);
  if (firstEl.img === secondEl.img) {
    const result = array.map((card) => {
      return card.id === firstEl.id || card.id === secondEl.id
        ? { ...card, isOpen: true }
        : card;
    });
    return result;
  } else {
    const result = array.map((card) => {
      return card.id === firstEl.id || card.id === secondEl.id
        ? { ...card, isOpen: false }
        : card;
    });
    return result;
  }
}; */

let openCounter = 1;
let areCardsSame: boolean = false;
let lastSavedState: Array<Card> = [];

const Game = () => {
  retrieveFromLocal();
  const [cards, setCards] = React.useState(finalGameSet);

  useEffect(() => {
    if (openCounter < 3) {
      return;
    }
    console.log("Effect:");
    console.log(cards);
  }, [cards]);

  //if Open cards same(true) => SetCards(updatedArray)
  //if Open Cards different(false) => SetCards(previousVersionofArray)

  const handleClick = (id: string) => {
    openCounter = openCounter + 1;

    setCards((oldCards) => {
      lastSavedState = oldCards;
      console.log("Form setCards:");
      console.log(lastSavedState);

      const newArray = oldCards.map((card) => {
        return card.id === id ? { ...card, isOpen: !card.isOpen } : card;
      });
      return newArray;
    });
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
        onClick={() => handleClick(card.id)}
      ></div>
    );
  });

  return (
    <section>
      <div className="container flex flex-col items-center justify-between">
        <h2 className="font-header text-[60px] md:text-[80px] text-center">
          Play the game
        </h2>
        <div className="controls-wrapper flex items-center justify-center gap-1 mb-7">
          <button className="bg-slate-500 px-8 py-2 text-white rounded-xl">
            Play
          </button>
          <button className="bg-slate-500 px-8 py-2 text-white rounded-xl">
            Save
          </button>
          <button
            className="bg-slate-500 px-8 py-2 text-white rounded-xl"
            onClick={clearLocalStorage}
          >
            Clear Game
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
