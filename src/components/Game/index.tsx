import { v4 as uuidv } from "uuid";
import {
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
} from "../../assets";

interface Card {
  id: number;
  img: string;
}

const picsObject: Array<Card> = [
  {
    id: 1,
    img: chan,
  },
  {
    id: 2,
    img: binnie,
  },
  {
    id: 3,
    img: han,
  },
  {
    id: 4,
    img: minho,
  },
  {
    id: 5,
    img: hyunjin,
  },
  {
    id: 6,
    img: puppy,
  },
  {
    id: 7,
    img: felix,
  },
  {
    id: 8,
    img: innie,
  },
  {
    id: 9,
    img: hongjoong,
  },
  {
    id: 10,
    img: seonghwa,
  },
  {
    id: 11,
    img: san,
  },
  {
    id: 12,
    img: woo,
  },
  {
    id: 13,
    img: yeo,
  },
  {
    id: 14,
    img: mingi,
  },
  {
    id: 15,
    img: yunho,
  },
  {
    id: 16,
    img: jongho,
  },
];

const randomizeCards = (array: Array<Card>) => {
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

const pickRandomPics = (array: Array<Card>) => {
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

const Game = () => {
  const gameCards: Array<Card> = pickRandomPics(picsObject);
  const randomizedCards: Array<Card> = randomizeCards(gameCards);

  const randomizedIDs = randomizedCards.map((card) => {
    const newID = uuidv();
    return { ...card, id: newID.toString() };
  });

  return (
    <section>
      <div className="container">
        <div className="game-wrapper flex">
          <div className="gamefield grid grid-cols-4 grid-rows-4 gap-1">
            {randomizedIDs.map((card) => {
              return (
                <img
                  key={card.id}
                  src={card.img}
                  width={200}
                  height={200}
                  alt="img"
                  onClick={() => {
                    console.log(card.id);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="controls-wrapper"></div>
      </div>
    </section>
  );
};

export default Game;
