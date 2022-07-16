import './App.css';
import React,{useState, useMemo} from 'react';

function App() {

  const [count, setCount]=useState(0);
  const [item, setItem]=useState(10);

  // function multiCount(){
  //   console.warn("multiCount")
  //   return count * 5;
  // }
  const multiCountMemo = useMemo(function multiCount(){
    console.warn("multiCount")
    return count * 5;
  },[count])

return (

    <div className="App">
      <h1>UseMemo Hook in React</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      {/* <h2>{multiCount()}</h2> */}
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count+1)}>Update Count</button>
      <button onClick={() => setItem(item*10)}>Update Item</button>
    </div>
  );
}

export default App;
