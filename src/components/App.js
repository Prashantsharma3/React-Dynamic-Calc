import React,{useState,useEffect} from 'react'
import '../styles/App.css';
function App() {
const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [result, setResult] = useState(0);

const handleNum1Change = (e) => {
setNum1(e.target.value);
};

const handleNum2Change = (e) => {
setNum2(e.target.value);
};

const handleAddition = () => {
setResult(Number(num1) + Number(num2));
};

return (
<div>
<input id="input1" type="number" value={num1} onChange={handleNum1Change} />
<input id="input2" type="number" value={num2} onChange={handleNum2Change} />
<button onClick={handleAddition}>Add</button>
<p id="result">{result}</p>
</div>
);
}

export default App;
