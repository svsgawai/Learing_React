import React, { useState } from "react";
import { Link } from "react-router-dom";

const DynamicRadio = () => {
  const games = ["Circket", "Hokey", "Football"];
  const days = ["Weekdays", "Weekend"];

  const [game, setGame] = useState<string>();
  const [day, setDay] = useState<string>();

  const changeGame = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGame(e.target.value);
  };
  const changeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };

  return (
    <>
      <Link to={"/"}>Home</Link>
      <h2>Select which Game You want to play?</h2>

      <h4>Select a Game</h4>
      {games.map((item, index) => {
        return (
          <>
            <input
              type="radio"
              id={item}
              name="options"
              value={item}
              onChange={(e) => changeGame(e)}
            />
            <label htmlFor="">{item}</label>
            <br />
          </>
        );
      })}

      <h4>Select Days</h4>
      {days.map((item, index) => {
        return (
          <>
            <input
              type="radio"
              id={item}
              name="options1"
              value={item}
              onChange={(e) => changeDay(e)}
            />
            <label htmlFor="">{item}</label>
            <br />
          </>
        );
      })}

      <span>
        {game && day && (
          <b>
            You have Selected the {game} game and will be available on {day}
          </b>
        )}
      </span>
    </>
  );
};

export default DynamicRadio;
