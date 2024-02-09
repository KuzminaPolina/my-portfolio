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

const picsArray = [
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
];

const randomizeCards = (array: string[]) => {
  const randomizedArray: string[] = [];

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

const pickRandomPics = (array: string[]) => {
  const newArray: string[] = [];

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
  const gameCards: string[] = pickRandomPics(picsArray);
  const randomizedCards: string[] = randomizeCards(gameCards);

  return (
    <section>
      <div className="container">
        <div className="game-wrapper flex">
          <div className="gamefield grid grid-cols-4 grid-rows-4 gap-1">
            {randomizedCards.map((card) => (
              <img src={card} width={200} height={200} alt="img" />
            ))}
          </div>
        </div>
        <div className="controls-wrapper"></div>
      </div>
    </section>
  );
};

export default Game;
