import React, { useEffect } from 'react';
import useTimer from './Timer'

export default function App() {
    const [num, start, stop, reset] = useTimer(1)

    useEffect(() => {
        start() // 启动定时器
    }, []);

    const Stop = (e, num) => {
        e.preventDefault()
        stop()
    }

    const Reset = (e) => {
        e.preventDefault()
        reset() // 清除定时
    }
    return (
        <div>
            <h1>time: {num}</h1>
            <button onClick={(e) => Stop(e, num)}>Stop</button>
            <button onClick={() => start()}>Start</button>
            <button onClick={(e) => Reset(e)}>Reset</button>
        </div>
    );
}