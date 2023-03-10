import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);

  const doAction = (e, action) => {
    e.preventDefault();

    if ('' === inputRef.current.value) {
      setError(true);

      return;
    }

    setError(false);
    action();
  };

  const plus = () => {
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = () => {
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = () => {
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = () => {
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();

    inputRef.current.value = '';
  };

  const resetResult = (e) => {
    e.preventDefault();

    setResult(0);
  };

  return (
      <div className="App">
        <div>
          <h1>Simplest Working Calculator</h1>
        </div>
        <form>
          <p ref={resultRef}>
            {result}
          </p>
          <input
              pattern="[0-9]"
              ref={inputRef}
              type="number"
              placeholder="Type a number"
          />
          <button onClick={(e) => doAction(e, plus)}>add</button>
          <button onClick={(e) => doAction(e, minus)}>subtract</button>
          <button onClick={(e) => doAction(e, times)}>multiply</button>
          <button onClick={(e) => doAction(e, divide)}>divide</button>

          <button onClick={resetInput}>reset input</button>
          <button onClick={resetResult}>reset result</button>

          {error && <p className='error'>You must enter a number to perform actions!</p>}
        </form>
      </div>
  );
}

export default App;
