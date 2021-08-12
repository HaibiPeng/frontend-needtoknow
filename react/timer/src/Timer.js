import { useRef, useState } from 'react';

const useTimer = (step = 1) => {
    const timer = useRef(null)
    const [num, setNum] = useState(0)

    const start = () => {
        const timeout = setInterval(() => {
            setNum((num) => num + 1) // 不能写为setNum(num + 1)；就不会更新num 的值
        }, step * 1000)
        timer.current = timeout
    }

    const stop = () => {
        window.clearInterval(timer.current)
        setNum(num)
    }

    const reset = () => {
        setNum(0)
        window.clearInterval(timer.current)
    }

    return [
        num,
        start,
        stop,
        reset
    ]
}
export default useTimer