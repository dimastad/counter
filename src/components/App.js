import React, { Component } from "react";
import Counter from './Counter'
import style from '../styles/Counter.css';

class App extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <h1 className={style.title}>My Counter!</h1>
                <Counter/>
            </div>
        );
    }
}

export default App;