import ExampleComp from "./ExampleComp";
import {ErrorBoundary} from './ErrorBoundary'


function App1() {
  return (
    <div>
      <h1>My App</h1>

      <ErrorBoundary>
        <ExampleComp />
      </ErrorBoundary>

      <p>This text will still be visible even if the component above fails.</p>
    </div>
  );
}

export default App1;