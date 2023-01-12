import style from "./style.module.scss";

import { dataType } from "../types/data";
import { FC } from "react";

import { useState } from "react";

import { Slider } from "../slider";

export const Circle: FC = () => {
  const data = require("../data/index.json");

  const [Stateindex, setIndex] = useState<number>(1); // текущий выбраный элемент

  const increment = () => {
    setIndex((prev) => prev + 1);
    if (Stateindex + 1 >= data.length) {
      setIndex(0);
    }
  }; // выбрать следующий элемент по кругу

  const decrement = () => {
    setIndex((prev) => prev - 1);
    if (Stateindex <= 0) {
      setIndex(5);
    }
  }; // выбрать предидущий элемент по кругу
  console.log(360 / (6 * Stateindex));
  return (
    <>
      <div className="container">
        <div className={style.lines}>
          <div className={style.promo}>
            {data
              .filter((item: dataType) => item.id === Stateindex)
              .map((year: dataType) => (
                <h1 className={style.circleTitle}>
                  {year.FromYear} <span>{year.toYear}</span>
                </h1>
              ))}
            <div
              className={style.circel}
              // style={{
              //   transform: `rotate(calc(   180deg  / ${data.length}   ))`,
              // }}
            >
              {data.map((item: dataType, index: number) => (
                <div>
                  <ul>
                    
                    <li
                      onClick={() => {
                        setIndex(index);
                      }}
                      key={item.id}
                      className={`${style.point} ${
                        index === Stateindex ? style.active : ""
                      }`}
                      style={{

                        transform: `rotate(calc(   360deg  / ${data.length}    * ${index}    ))`, // размещение элементов по кругу
                      }}
                    >

                      {index === Stateindex && (
                      <div className={style.type}
                      style={{
                        transform: `rotate(calc(360deg / -${data.length}  * ${index} - 90deg ))`, //  что бы выровнить тип таба ровно  
                      }}>{item.type}</div>
                    )}

                      <span
                        style={{
                          transform: `rotate(calc(360deg / -${data.length}  * ${index} - 90deg ))`, // что бы выровнить цифры внутри каждого круга
                        }}
                      >
                        {item.number}
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={style.controllers}>
            <div className={style.slideNumber}>
              0{Stateindex + 1}/0{data.length}
            </div>
            <div className={style.buttons}>
              <button
                onClick={() => {
                  decrement();
                }}
                className={style.btn}
              >
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                    stroke="#42567A"
                    stroke-width="2"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  increment();
                }}
                className={style.btn}
              >
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                    stroke="#42567A"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {data
          .filter((item: dataType) => item.id === Stateindex)
          .map((data: dataType) => (
            <Slider {...data} />
          ))}

        <div className={style.controllersMobile}>
          <div>
            <div className={style.slideNumber}>
              0{Stateindex + 1}/0{data.length}
            </div>
            <div className={style.buttons}>
              <button
                onClick={() => {
                  decrement();
                }}
                className={style.btn}
              >
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                    stroke="#42567A"
                    stroke-width="2"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  increment();
                }}
                className={style.btn}
              >
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                    stroke="#42567A"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={style.pagintaiion}>
            {[...new Array(data.length)].map((_, index) => (
              <ul>
                <li
                  className={`${style.paginatePoint} ${
                    index === Stateindex ? style.activePaginate : ""
                  }`}
                ></li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
