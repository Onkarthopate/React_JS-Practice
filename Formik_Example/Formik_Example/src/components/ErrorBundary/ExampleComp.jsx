function ExampleComp() {
      throw new Error("I crashed!");
  return <div>This won't render</div>;
}


export default ExampleComp;