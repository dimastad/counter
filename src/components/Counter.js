import React, { Component } from "react";
import { useState } from 'react';
import style from '../styles/Counter.css';

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className={style.block}>
            <p className={style.text}>Вы кликнули 
                <span className={style.result}> {count} </span>
                  раз
            </p>
            <button className={style.button} onClick={() => setCount(count + 1)}>
                Увеличить
            </button>
            <button className={style.button} onClick={() => setCount(count - 1)}>
                Уменьшить
            </button>
            <button className={style.button} onClick={() => setCount(count * 0)}>
                Обнулить
            </button>
        </div>
    );
}