import { v4 as uuidv } from "uuid";
import { picsCollection } from "../../constants";
import { useState } from "react";

interface Card {
  id: string;
  img: string;
  isOpen: boolean;
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

const clearLocalStorage = () => {
  localStorage.removeItem("initialCards");
};

let openCards: Array<Card> = [];
//let areCardsSimilar: boolean = false;

const Game = () => {
  retrieveFromLocal();
  const [cards, setCards] = useState(finalGameSet);
  //const [openCardsState, setOpenCards] = useState(openCardsArray);
  //const [areCardsSame, setAreCardsSame] = useState(false);

  const handleClick = (id: string) => {
    const fieldBeforeTwoCardsOpened = cards;
    setCards((oldCards) => {
      const newArray = oldCards.map((card) => {
        return card.id === id ? { ...card, isOpen: !card.isOpen } : card;
      });

      return newArray;
    });

    const openEl = cards.find((card) => {
      return card.id === id;
    });
    if (openEl === undefined) {
      throw new TypeError("where the hell is my card");
    }
    openCards.push(openEl);

    if (openCards.length === 2) {
      const elOne = openCards[0];
      const elTwo = openCards[1];

      if (elOne.img === elTwo.img) {
        console.log("imgs are same");
        openCards = [];
      } else {
        console.log("imgs are diff");
        const arrayForDiffImgs = cards.map((card) => {
          return card.id === elOne.id ? { ...card, isOpen: false } : card;
        });
        setTimeout(() => {
          setCards(arrayForDiffImgs);
        }, 1000);
        openCards = [];
      }
    }

    if (openCards.length > 2) {
      setCards(fieldBeforeTwoCardsOpened);
      openCards = [];
    }
  };

  //1. Сохраням в переменную оригинальное состояние поля до открытия очередной пары карт, состояние 1.
  //2. Открываем карту, записываем в массив открытых
  //3. Открываем карту опять, записываем в массив открытых
  //4. Как только длина массива откртых становится равна 2, триггерим сравнение
  //5. Здесь надо как-то записать в массив состояние поля с 2мя открытыми картами, точно не знаю, где, но нужно запомнить это состояние, состояние 2.
  //6. Сравнить две карты.
  //7. Если они равны, делаем setCards(состояние 2), т.к. оно верное
  //8. Если они не равны, делаем setCards(состояние 1), т.е то, которое было до открытия двух карт.
  //9. Если массив открытых карт больше 3, делаем снова setCards(состояние 1)

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
