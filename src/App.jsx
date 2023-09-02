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
  })

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
                onClick={() => {
                  button === "C"
                    ? resetClickHandler
                    : button === "+-"
                      ? invertClckHnadler
                      : button === "%"
                        ? percentCLickHandler
                        : button === "="
                          ? equalsCLickHandler
                          : button === "/" || button === "X" || button === "-" || button === "+"
                            ? signCLikHnadler
                            : button === ","
                              ? commaClickHndler
                              : numCLickHnadler
                }}
              />
            )
          })
        }
      </ButtonBox>
    </Wrapper>
  )
};

export default App;
