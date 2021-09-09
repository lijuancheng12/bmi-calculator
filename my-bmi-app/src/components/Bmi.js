import React from "react";
import styles from "./Bmi.module.scss";
import face from "../iconsface.png";

const BmiCalculateCompnents = (props) => {
  const numberOfBmi =
    props.inputWeight / (props.inputHeight * props.inputHeight * 0.0001);
  if (20 <= numberOfBmi && numberOfBmi <= 25) {
    return (
      <div>
        Din Bmi är {numberOfBmi} <img src={face} />
      </div>
    );
  } else if (25 < numberOfBmi && numberOfBmi <= 30) {
    return <div>Din Bmi är {numberOfBmi}</div>;
  } else if (30 < numberOfBmi && numberOfBmi) {
    return <div>Din Bmi är {numberOfBmi}</div>;
  }
};

const HeightAndWeight = (props) => {
  const [inputHeight, setInputHeight] = React.useState("");
  const [inputWeight, setInputWeight] = React.useState("");
  const [hasClicked, setHasClicked] = React.useState(false);

  const OnCalculate = () => {
    setHasClicked(true);
  };
  return hasClicked ? (
    <BmiCalculateCompnents
      inputWeight={parseInt(inputWeight)}
      inputHeight={parseInt(inputHeight)}
    />
  ) : (
    <div className={styles.container}>
      Hej{props.name} Hur lång är du?{" "}
      <span>
        <input
          type="text"
          onChange={(e) => setInputHeight(e.target.value)}
          value={inputHeight}
        />
        CM
      </span>
      Vad är din vikt?
      <span>
        <input
          type="text"
          onChange={(e) => setInputWeight(e.target.value)}
          value={inputWeight}
        />
      </span>
      KG
      <button onClick={OnCalculate}>RäknaBMI</button>
    </div>
  );
};
export const BmiCalculate = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [hasClicked, setHasClicked] = React.useState(false);

  const onChangeButton = () => {
    setHasClicked(true);
  };
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return hasClicked ? (
    <HeightAndWeight name={inputValue} />
  ) : (
    <div className={styles.container}>
      Hej! Vad heter du?{" "}
      <input
        type="text"
        name="name"
        onChange={onChangeHandler}
        value={inputValue}
      />
      <div className={styles.wrapper}>
        <button onClick={onChangeButton}>
          <span className={styles.buttonText}>Skicka</span>
          <div class="success">
            <svg
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 29.756 29.756"
              xmlSpace="preserve"
            >
              <style>{"enable-background:new 0 0 29.756 29.756;"}</style>
              <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};