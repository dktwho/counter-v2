import React from 'react';
import s from "../App.module.css";
import {WindowCounter} from "./WindowCounter";

export type CounterPropsType = {
    counter: number
    maxCountValue: number
    startValue: number
}

export const Counter = ({counter, maxCountValue, startValue}: CounterPropsType) => {
    return (
        <div className={counter < maxCountValue ? s.counter : s.counterDisabled}>
            <WindowCounter startValue={startValue} counter={counter} maxCountValue={maxCountValue}/>
        </div>
    );
};
