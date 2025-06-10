import { useState } from "react";
import Child from "./Child";

function Parent() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if(count <= 0){
            return alert('Count cannot be negative') ;
        }
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Hello I am From parent</h2>
            {/* <h3>{count}</h3> */}
            <Child increment = {increment}  decrement = {decrement}  count = {count}/>
        </div>
    );
}

export default Parent;