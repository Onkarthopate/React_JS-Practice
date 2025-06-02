import { useRef } from "react";

function ExampleFuncCompRef() {

    const inputRef = useRef(null);
   const handleClick = ()=>{
        inputRef.current.focus();
    }
    return ( 
        <div>
            <h2>
                UseRef Components Example
            </h2>

            <input type="search" placeholder="Search For Anything ..." ref={inputRef}  className="form-control" />
            <button onClick={handleClick}>Click Here</button>
        </div>
     );
}

export default ExampleFuncCompRef;