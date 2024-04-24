// import styled from "styled-components";
import { Button } from "../styled/Button";
import './style/StartGame.css';

const StartGame = ({ toggle }) => {
  return (
    <div className="cont">
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </div>
  );
};

export default StartGame;


