/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "the cat"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomNumberWho = Math.floor(Math.random() * 4);
  let randomNumberaction = Math.floor(Math.random() * 4);
  let randomNumberwhat = Math.floor(Math.random() * 3);
  let randomNumberwhen = Math.floor(Math.random() * 5);

  return (
    who[randomNumberWho] +
    " " +
    action[randomNumberaction] +
    " " +
    what[randomNumberwhat] +
    " " +
    when[randomNumberwhen]
  );
};
