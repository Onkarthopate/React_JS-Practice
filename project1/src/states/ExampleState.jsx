import { useState } from "react";

function ExampleState() {

    const [count, setCount] = useState(0);

    function increment() {

        setCount(count + 1);
    }

    function decrement() {

        if(count <= 0 ){
            return ;
        }
        setCount(count - 1);
    }

    return (
        <>
            <h2>Count : {count}</h2>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default ExampleState;