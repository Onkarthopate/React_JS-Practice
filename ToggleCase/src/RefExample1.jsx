// import React from "react";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//   }

//   focusInput = () => {
//     this.inputRef.current.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input ref={this.inputRef} />
//         <button onClick={this.focusInput}>Focus</button>
//       </div>
//     );
//   }
// }
// export default MyComponent

import React from "react";

export default class ToggleTheme extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  toggleTheme = () => {
    const container = this.containerRef.current;
    if (container.style.backgroundColor === "black") {
      container.style.backgroundColor = "white";
      container.style.color = "black";
    } else {
      container.style.backgroundColor = "black";
      container.style.color = "white";
    }
  };

  render() {
    return (
      <div ref={this.containerRef} style={{ padding: "90px", backgroundColor: "white", color: "black" }}>
        <p>Hello, this is the theme container!</p>
        <button onClick={this.toggleTheme}>Toggle Theme</button>
      </div>
    );
  }
}
