import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementbyvalue,
} from "./redux-toolkit/counterSlice";

const App = () => {
    const { count } = useSelector((state) => state.counter);
    // console.log(counter)
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleIncrement1 = () => {
        dispatch(incrementbyvalue(10));
    };
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <div>{count}</div>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement1}>INCREMENT</button>
        </div>
    );
};

export default App;
