import { useEffect, useState } from "react";
import { BaseProps } from "../types";

export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      console.log("useEffect started");
      const i = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(i);
    }
    console.log("useEffect stopped");
  }, [isRunning]);
  return (
    <>
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>Start/Stop</button>
    </>
  );
}
// The dependency array in the useEffect hook is used to specify when the effect should run. If the array is empty, the effect will only run once when the component mounts. If the array contains a value, the effect will run when that value changes. If the array contains multiple values, the effect will run when any of those values change. Therefore the button click will start and stop the interval. The reason for the count to stop is actually because the return function is called when the component is unmounted which happens when the button is clicked and the component is removed from the DOM. The return function is called when the component is unmounted and is used to clean up any resources that the effect may have created. In this case, it is used to clear the interval that was created when the component mounted and will therefore only start the interval again when isRunning is true.
