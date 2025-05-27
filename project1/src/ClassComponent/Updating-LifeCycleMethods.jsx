import React from "react";

// export class LifeCycleMethod1 extends React.Component {

//   constructor() {
//     super();
//     console.log("Constructor called!");
//     this.state = { count: 0 };
//   }

//   componentDidMount() {
//     console.log("Component Did Mount called!");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("Component Should Update called!" , nextProps , nextState);
//     return true; 
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate called!" , prevProps, prevState);
//     return {prevState,prevProps};
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("Component Did Update called!" , {prevProps , prevState , snapshot , currentState: this.state});
//   }

//      handleUpdate = () => {
//     this.setState(prevState => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     console.log("Render called!");
//     return (
//       <div>
//         <h2>Hello From LifeCycle Method - Updating</h2>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleUpdate}>Update Count</button>
//       </div>
//     );
//   }
// }


export class LifeCycleMethod1 extends React.Component {
  constructor() {
    super();
    console.log("Constructor called!");
    this.state = { message: "Initial message" };
  }

  componentDidMount() {
    console.log("Component Did Mount called!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update called!");
    return true; // Always allow updates to demonstrate
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called!");
    // Capture info before DOM updates,
    return "Snapshot data"; // Example snapshot data
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update called!", snapshot);
  }

  handleUpdate = () => {  
    console.log("handleUpdate called!");
    this.setState({
      message: "Updated message at " + new Date().toLocaleTimeString()
    });
  };

  render() {
    console.log("Render called!");
    return (
      <div>
        <h2>React Class Lifecycle Methods - Example</h2>
        <p>{this.state.message}</p>
        <button onClick={this.handleUpdate}>Update Message</button>
      </div>
    );
  }
}
