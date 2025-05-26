import React from "react";

export class LifeCycleMethod extends React.Component {

    constructor() {
        console.log("Inside Constructor");

        super();
    }

    componentWillMount() {
        console.log("Component will Mount");

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/4')
            .then(response => response.json())
            .then(data => console.log(data));
    }


    render() {
        console.log("Inside Render Outside Return");

        return (
            <>
                <h2>React Class LifeCycle Methods</h2>
            </>
        )
    }
}