import { useState } from "react";

// function HookUseState() {

//     const [counter, setCounter] = useState(0);

//     const increment = () => {
//         setCounter(counter + 1);
//     }

//     const decrement = () => {
//         if (counter <= 0) {
//             return;
//         }
//         setCounter(counter - 1);
//     }

//     const style = {
//         border: "1px solid black",
//         padding: "5px",
//         cursor: "pointer",

//     }
//     return (
//         <>
//             <h2 className="text-primary p-3">UseState Hook Example</h2>
//             <p>
//                 <span style={style} onClick={increment}>+</span>
//                 {counter}
//                 <span style={style} onClick={decrement}>-</span></p>
//         </>
//     );
// }

// export default HookUseState;


function HookUseStateDarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleCase() {
        setDarkMode(!darkMode);
    }

    const style = {
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
        minHeight: "100vh",
    }
    return (
        <div style={style}>
            <div>
                <h2>Dark-Light Effect</h2><br />
                <h6>
                    Click To {!darkMode ? "Dark" : "White" } mode:{""} 
                   
                    {darkMode ? (
                        <i className="fa-regular fa-sun"></i>

                    ) : (
                        <i className="fa-solid fa-moon"></i>
                    )}
                </h6>
                <button className="btn btn-primary " onClick={toggleCase}> Click </button>
            </div>

        </div>
    );
}

export default HookUseStateDarkMode;