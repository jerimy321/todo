import React, { useState, useEffect } from "react";

const Quotes = () => {
  const quotesList = [
    {
      text: "하루하루를 어떻게 보내는가에 따라 인생이 결정된다.",
      author: "Annie Dillard",
    },
    {
      text: "일 분 전 만큼 먼 시간은 없다.",
      author: "James Bishop",
    },
    {
      text: "오늘 이라는 것은 두 번 다시 오지 않는다. 이것을 잊지 말아야 한다.",
      author: "Dante Alighieri",
    },
    {
      text: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
      author: "Alan Kay",
    },
    {
      text: "얻기 어려운 것은 시기요, 놓치기 쉬운 것은 기회다.",
      author: "조광조",
    },
    {
      text: "당신은 지체할 수도 있지만 시간은 그러하지 않을 것이다. 이른 아침은 입에 황금을 물고 있다.",
      author: "Benjamin Franklin",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    const interval = setInterval(getRandomQuote, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getRandomQuote = () => {
    setCurrentQuote(quotesList[Math.floor(Math.random() * quotesList.length)]);
  };
  return (
    <div>
      {currentQuote && (
        <div>
          <p>{currentQuote.text}</p>
          <p>- {currentQuote.author} -</p>
        </div>
      )}
    </div>
  );
};

export default Quotes;
