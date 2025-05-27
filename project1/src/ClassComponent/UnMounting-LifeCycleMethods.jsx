import React from "react";

export class LifeCycleMethod2 extends React.Component {

  constructor() {
    super();
    console.log("Constructor called!");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component Did Mount called!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component Should Update called!" , nextProps , nextState);
    return true; 
  }


  componentWillUnmount(){
    console.log("Component will Unmount");
    
  }
  

     handleUpdate = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("Render called!");
    return (
      <div>
        <h2>Hello From LifeCycle Method - Updating</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleUpdate}>Update Count</button>
      </div>
    );
  }


}


