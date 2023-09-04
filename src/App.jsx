import React, { useState } from "react";

import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  const numCLickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);

    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num:
          //prevent from entering two zeros
          calc.num === 0 && value === "0" ? 0
            : calc.num % 1 === 0 ? Number(calc.num + value)
              : calc.num + value,
        result:
          //handle nagative numbers
          !calc.sign ? 0 : calc.result
      })
    };
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value)
    setCalc({
      ...calc,
      num:
        //add comma to number if it is not already there
        !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value)

    setCalc({
      ...calc,
      sign: value,
      result:
        !calc.result && calc.num ? calc.num : calc.result,
      num: 0,
    });
  };

  return (
    <Wrapper>
      <Screen
        value={calc.num ? calc.num : calc.result}
      />
      <ButtonBox>
        {
          buttonValues.flat().map((button, i) => {
            return (
              <Button
                key={i}
                className={button === "=" ? "equals" : ""}
                value={button}
                onClick={
                  // button === "C" ? resetClickHandler
                  //   : button === "+-" ? invertClckHandler
                  //     : button === "%" ? percentCLickHandler
                  //       : button === "=" ? equalsCLickHandler
                  button === "/" || button === "X" || button === "-" || button === "+" ? signClickHandler
                    : button === "." ? commaClickHandler
                      : numCLickHandler
                }
              />
            )
          })
        }
      </ButtonBox>
    </Wrapper>
  )
};

export default App;
