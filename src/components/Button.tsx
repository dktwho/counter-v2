import React from 'react';


type ButtonPropsType = {
    title: string
    callback: () => void
    className?: string
    disabled?: any
}


export const Button = ({title, callback, className, disabled}: ButtonPropsType) => {
    return (
        <>
            <button className={className} onClick={callback} disabled={disabled}>
                {title}
            </button>
        </>
    );
};
