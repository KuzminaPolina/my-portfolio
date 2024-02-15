import { v4 as uuidv } from "uuid";
import { picsCollection } from "../../constants";

interface Card {
  id: string;
  img: string;
  isOpen: boolean;
}

let finalGameSet: Array<Card> = [];
let isGameInitialized: boolean = false;

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
    return { ...card, id: newID.toString(), isOpen: true };
  });
  saveToLocal(randomizeSelectedCardsIDs);
  finalGameSet = randomizeSelectedCardsIDs;
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
  setGame();
};

const Cards = () => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
  };
  retrieveFromLocal();

  return (
    <>
      {finalGameSet.map((card) => {
        return (
          <div
            style={{
              background: `${card.isOpen}`
                ? `url(${card.img}) center/200px 200px`
                : "#000000",
              width: "200px",
              height: "200px",
              borderRadius: "12px",
            }}
            key={card.id}
            onClick={handleClick}
          ></div>
        );
      })}
    </>
  );
};

const Game = () => {
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
            <Cards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
