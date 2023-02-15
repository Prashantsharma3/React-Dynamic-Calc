import React,{useState,useEffect} from 'react'
import '../styles/App.css';
function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  const handleInput1 = (e) => {
    setInput1(Number(e.target.value));
  };

  const handleInput2 = (e) => {
    setInput2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(input1 + input2);
  };

  return (
    <div>
      <input type="number" id="input1" value={input1} onChange={handleInput1} />
      <input type="number" id="input2" value={input2} onChange={handleInput2} />
      <button onClick={handleAddition}>Add</button>
      <p id="result">{result}</p>
    </div>
  );
}

export default App;
