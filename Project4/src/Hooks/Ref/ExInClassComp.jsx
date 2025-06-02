import React from "react";

export class ExampleClassCompRef extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = () => {
    this.inputRef.current.focus(); 
  }


    render(){
        return(
            <div>
                <h2>Example Ref in Class Components</h2>
                <input placeholder="click on button to see magic.." ref ={this.inputRef} className="form-control"/>
                <button onClick={this.focusInput}>Click here</button>
            </div>
        )
    }

}
