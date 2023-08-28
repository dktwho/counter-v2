import React from 'react';
import s from "../App.module.css";
import {CounterPropsType} from "./Counter";

export const WindowCounter = ({startValue, counter, maxCountValue}: CounterPropsType) => {
    return (
        <div>
            {startValue < 0 || maxCountValue <= startValue ? 'incorrect value' : counter}
        </div>
    );
};
