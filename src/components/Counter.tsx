import {useState} from "react";
import "./Counter.scss"

const Counter = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            {count}
            <button onClick={onClick}>Increment</button>
        </div>
    );
};

export default Counter;