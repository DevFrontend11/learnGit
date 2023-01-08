import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByValue(10));
  };
  return (
    <div className="p-4 mx-auto mt-5 border border-gray-300 w-max h-max">
      <div className="text-center">Counter: {count}</div>
      <div className="mt-4 control">
        <button
          className="p-2 mr-5 border border-gray-300"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="p-2 ml-5 border border-gray-300"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="p-2 ml-5 border border-gray-300"
          onClick={handleIncrementByValue}
        >
          IncrementByValue
        </button>
      </div>
    </div>
  );
};

export default Counter;
