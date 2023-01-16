import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "당장~",
    src: require("../../img/good.jpg")
  },
  {
    name: "저런...",
    src: require("../../img/good2.png")
  },
  {
    name: "왜요",
    src: require("../../img/good3.png")
  },
  {
    name: "뽀용뽀용",
    src: require("../../img/good4.jpg")
  }
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = food => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">3차반 유행어 월드컵</h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="food-img" src={d.src} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
