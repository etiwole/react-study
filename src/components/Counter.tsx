import {useState} from "react";
import classes from "./Counter.module.scss"

const Counter = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            {count}
            <button className={classes.btn} onClick={onClick}>Increment</button>
        </div>
    );
};

export default Counter;