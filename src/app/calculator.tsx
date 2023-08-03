"use client";

import React, { useState, useEffect } from "react";

export default function calculator() {
  const [inputNum, setInputNum] = useState("");
  const [answer, setAnswer] = useState("");

  function pushNum(value: string) {
    if (isOperator(value) && answer.length) {
      setInputNum(answer + value);
      setAnswer("");
    } else {
      setInputNum((prevInput) => prevInput + value);
      setAnswer("");
    }
  }

  function isOperator(value: string) {
    return value === "+" || value === "-" || value === "*" || value === "/";
  }

  function clear() {
    setInputNum("");
    setAnswer("");
  }

  function solve() {
    try {
      if (inputNum) {
        const result = eval(inputNum);
        setAnswer(result.toString());
        setInputNum("");
      } else {
        setAnswer("");
      }
    } catch (error) {
      setAnswer("Error");
    }
  }

  return (
    <div className="max-w-[500px] mx-auto">
      <div className="h-auto p-4 mt-[80px] md:mt-[160px] rounded bg-blue-500">
        {/* Screen */}
        <div className="w-full h-16 text-black py-1 px-2 text-right bg-slate-300 rounded mb-6">
          {/* First row */}
          <div className="flex justify-end">
            <input
              type="text"
              value={inputNum}
              readOnly
              className=" w-full bg-transparent text-right text-lg"
            />
          </div>

          {/* Second row */}
          <div>
            <div id="equal" className="hidden">
              =
            </div>
            <div id="answer text-lg">{answer}</div>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => clear()}
            className="w-full h-10 bg-orange-600 rounded"
          >
            AC
          </button>
          <button className="w-full h-10 bg-blue-900 rounded">-/+</button>
          <button
            onClick={() => pushNum("%")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            %
          </button>
          <button
            onClick={() => pushNum("/")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            ÷
          </button>
          <button
            onClick={() => pushNum("7")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            7
          </button>
          <button
            onClick={() => pushNum("8")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            8
          </button>
          <button
            onClick={() => pushNum("9")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            9
          </button>
          <button
            onClick={() => pushNum("x")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            x
          </button>
          <button
            onClick={() => pushNum("4")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            4
          </button>
          <button
            onClick={() => pushNum("5")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            5
          </button>
          <button
            onClick={() => pushNum("6")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            6
          </button>
          <button
            onClick={() => pushNum("-")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            -
          </button>
          <button
            onClick={() => pushNum("1")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            1
          </button>
          <button
            onClick={() => pushNum("2")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            2
          </button>
          <button
            onClick={() => pushNum("3")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            3
          </button>
          <button
            onClick={() => pushNum("+")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            +
          </button>
          <button
            onClick={() => pushNum("0")}
            className="w-full h-10 bg-blue-900 rounded col-span-2"
          >
            0
          </button>
          <button
            onClick={() => pushNum(".")}
            className="w-full h-10 bg-blue-900 rounded"
          >
            .
          </button>
          <button
            onClick={() => solve()}
            className="w-full h-10 bg-blue-900 rounded"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
