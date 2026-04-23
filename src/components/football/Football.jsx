import { useState, useEffect, useRef } from "react";
import "../../components/football/football.css";

export const Football = () => {
  const [score, setScore] = useState(0);
  const ballRef = useRef(null);
  const goalRef = useRef(null);
  const fieldRef = useRef(null);

  const positions = [
    { left: "30%", top: "50%" },
    { left: "50%", top: "40%" },
    { left: "70%", top: "50%" },
  ];

  useEffect(() => {
    resetBall();
  }, []);

  const handleGoalClick = () => {
    const ball = ballRef.current;
    const goal = goalRef.current;
    const field = fieldRef.current;

    const goalRect = goal.getBoundingClientRect();
    const fieldRect = field.getBoundingClientRect();

    const goalCenterX = goalRect.left + goalRect.width / 2 - fieldRect.left;
    const goalCenterY = goalRect.top + goalRect.height / 2 - fieldRect.top;

    ball.style.transition = "all 0.5s ease-in-out";
    ball.style.left = `${goalCenterX - ball.offsetWidth / 2}px`;
    ball.style.top = `${goalCenterY - ball.offsetHeight / 2}px`;

    setTimeout(() => {
      setScore((prev) => prev + 1);
      resetBall();
    }, 600);
  };

  const resetBall = () => {
    const ball = ballRef.current;
    ball.style.transition = "none";
    const randomPos = positions[Math.floor(Math.random() * positions.length)];
    ball.style.left = randomPos.left;
    ball.style.top = randomPos.top;
  };

  return (
    <>
      <h2 className="title">football</h2>
      <div className="field" ref={fieldRef}>
        <div className="goal" ref={goalRef} onClick={handleGoalClick}></div>
        <div className="ball" ref={ballRef}></div>
        <p className="score">Score: {score}</p>
      </div>
    </>
  );
};
