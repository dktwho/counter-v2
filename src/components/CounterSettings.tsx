import React, {ChangeEvent} from 'react';
import s from "../App.module.css";
import {Button} from "./Button";


type SettingType = {
    startValue: number
    maxValue: number
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    appSet: () => void

}
export const CounterSettings = ({startValue, maxValue, onChangeStartValue, onChangeMaxValue, appSet}: SettingType) => {

    return (

        <div className={s.counterSettings}>
            <div className={s.mainForDivWithInput}>
                <div className={s.divWithInput}>max value: <input value={maxValue} onChange={onChangeMaxValue}
                                                                  className={maxValue <= startValue ? s.inputError : s.inputSettings}
                                                                  type="number"/></div>
                <div className={s.divWithInput}>start value: <input value={startValue} onChange={onChangeStartValue}
                                                                    className={startValue < 0 || maxValue <= startValue ? s.inputError : s.inputSettings}
                                                                    type="number"/></div>
            </div>

            <div className={s.btnSetter}>
                <Button title={'set'} callback={appSet}
                        className={startValue < 0 || maxValue <= startValue ? s.btnDisabled : s.btnActive}
                        disabled={maxValue <= startValue || startValue < 0 ? 'disabled' : ''}/>
            </div>

        </div>
    );
};