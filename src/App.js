
import './App.css';
import Child from './Child';


function App() {
  let name =["achu","abhi","akhi"];
  let ages = [20,23,24];
  return (
    <div className="App">
      <h1> Welcome to React</h1>
     <p>React Course contents are below</p>
     {name.map((n,index)=>
     (
      <Child na ={n} age ={ages [index]}/>
     ))}
    </div>
    
  );
}

export default App;
