"use client"
import Calculation from "@/components/Calculation";
import View from "@/components/View";
import React, { useState } from "react";

export default function Home(props) {
  const [number, setNumber] = useState(0);
  const [allNumber, setAllNumber] = useState([]);
  const [resultCalc, setResultCalc] = useState(0);

  return (
    <main>
      <section id="calculator">
        <View number={number} allNumber={allNumber} resultCalc={resultCalc} />
        <Calculation
          number={number}
          setNumber={setNumber}
          allNumber={allNumber}
          setAllNumber={setAllNumber}
          setResultCalc={setResultCalc}
        />
      </section>
    </main>
  );
}