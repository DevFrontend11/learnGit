import React from "react";

const Counter = (props) => {
  const { count, setCount } = props;
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="p-4 mx-auto mt-5 border border-gray-300 w-max h-max">
      <div className="text-center">Counter: {count}</div>
      <div className="mt-4 control">
        <button className="mr-5 border border-gray-300" onClick={Increment}>
          Increment
        </button>
        <button className="ml-5 border border-gray-300" onClick={Decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
