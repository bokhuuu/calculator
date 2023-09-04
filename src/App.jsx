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
  [0, ",", "="],
];

const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  })

  const numCLickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log((Number(calc.num + value)))

    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0" ? 0
            : calc.num % 1 === 0 ? Number(calc.num + value)
              : calc.num + value,
        result:
          !calc.sign ? 0 : calc.result
      })
    }
  }

  return (
    <Wrapper>
      <Screen
        value={calc.num}
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
                  //         : button === "/" || button === "X" || button === "-" || button === "+" ? signClickHandler
                  //           : button === "," ? commaClickHandler
                  numCLickHandler
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
