"use client"
import React, { useState } from "react";

export default function Home(props) {
  const [number, setNumber] = useState(0);
  const [allNumber, setAllNumber] = useState([]);

  const remove = () => {
    let arrayNumber = String(number).split("").map((num) => {
      return Number(num);
    });

    if (arrayNumber.length !== 1) {
      const removeNumber = arrayNumber.slice(0, -1);
      const result = removeNumber.reduce((accumulator, num) => `${accumulator}${num}`, "");
      const nan = result.length === 0 ? 0 : result[0];
      setNumber(parseInt(result));
    } else {
      setNumber(0);
    }
  }

  const addString = (other) => {
    if (other !== "=") {
      const newNumber = [...allNumber, number, other];
      setNumber(0);
      setAllNumber(newNumber);
    }
  }

  const addNumber = (newNumber) => {
    if (number === 0) {
      setNumber(number + newNumber);
    } else {
      const numberString = `${number}${newNumber}`
      setNumber(parseInt(numberString));
    }
  }

  return (
    <main>
      <section id="calculator">
        <div id="view">
          <p>A</p>
          <p id="value">{allNumber.length === 0 ?
            number : allNumber.map((num, i) => <p key={i}>{num.toString()}</p>)
          }</p>
        </div>
        <div id="calculation">
          <section>
            <button onClick={() => remove()}>{"<-"}</button>
            <button onClick={() => addString("(")}>{"("}</button>
            <button onClick={() => addString(")")}>{")"}</button>
            <button onClick={() => addString("%")}>%</button>
          </section>
          <section>
            <button onClick={() => addNumber(7)}>7</button>
            <button onClick={() => addNumber(8)}>8</button>
            <button onClick={() => addNumber(9)}>9</button>
            <button onClick={() => addString("/")}>/</button>
          </section>
          <section>
            <button onClick={() => addNumber(4)}>4</button>
            <button onClick={() => addNumber(5)}>5</ button>
            <button onClick={() => addNumber(6)}>6</button>
            <button onClick={() => addString("*")}>*</button>
          </section>
          <section>
            <button onClick={() => addNumber(1)}>1</button>
            <button onClick={() => addNumber(2)}>2</button>
            <button onClick={() => addNumber(3)}>3</button>
            <button onClick={() => addString("-")}>-</button>
          </section>
          <section>
            <button onClick={() => addNumber(0)}>0</button>
            <button onClick={() => addString(".")}>.</button>
            <button onClick={() => addString("=")}>=</button>
            <button onClick={() => addString("+")}>+</button>
          </section>
        </div>
      </section>
    </main>
  );
}