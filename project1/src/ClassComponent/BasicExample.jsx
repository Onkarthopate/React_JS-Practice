import React from "react";

export class BasicExample extends React.Component {
    constructor() {
        super();
        console.log("from construtor"); //call first
    }
    render() {
        console.log("from render"); //call second
        
        return (                     //call third
            <>
                <h2>Hello From Class Components</h2>
            </>
        )
    }

}
