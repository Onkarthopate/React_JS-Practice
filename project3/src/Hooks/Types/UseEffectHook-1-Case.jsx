// import { useState , useEffect} from "react";

// function NoUseEffectExample() {
//   const [text, setText] = useState('');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       <p>You Typed: {text}</p>
//     </div>
//   );
// }

// export default NoUseEffectExample;


// function UseEffectOnceExample() {
//   const [text, setText] = useState('');

//   function handleChange(e) {
//     setText(e.target.value);
// }

//   // Runs only once after initial render
//   useEffect(() => {
//     console.log("Component mounted!");
//   }, []); // empty dependencies

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       <p>You Typed: {text}</p>
//     </div>
//   );
// }

// export default UseEffectOnceExample;


// import { useState, useEffect } from "react";

// function UseEffectWithDepsExample() {
//   const [text, setText] = useState('');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   // Runs whenever 'text' changes
//   useEffect(() => {
//     console.log("You typed:", text);
//   }, [text]); // 'text' is the dependency

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       <p>You Typed: {text}</p>
//     </div>
//   );
// }

// export default UseEffectWithDepsExample;

