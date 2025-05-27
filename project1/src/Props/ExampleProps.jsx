// function ExampleProps(props) {
//     return ( 
//         <div>
//             <h2>Hello My name is {props.name} and age is {props.age}</h2>
//         </div>
//      );
// }

// export default ExampleProps;


// destructuring
function ExampleProps({name , age}) {
    return ( 
        <div>
            <h2>Hello My name is {name} and age is {age}</h2>
        </div>
     );
}

export default ExampleProps;