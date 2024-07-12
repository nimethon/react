import './App.css';
import React , {useEffect, useState} from 'react' ;
var pstyle={
  border: "2px red solid",
  margin: "10px",
  borderRadius: "10px",
  color: "red",
  backgroundColor:"black",
  padding:"10px"
}
function App() {
  const prdct = [
    {name: 'photoshop', price:'$90'},
    {name: 'Illustrator', price:'$60'},
    {name: 'Lightroom', price:'$40'},
    {name: 'Premier Pro', price:'$20'}
  ]
  const friends = [
    {name: 'maruf', age:'22 year', sex:'male'},
    {name: 'srabon', age:'19 year', sex:'male'},
    {name: 'kader', age:'23 year' ,sex:'male'},
    {name: 'sujon', age:'21 year' ,sex:'male'},
    {name: 'emon', age:'23 year' ,sex:'male'},
    {name: 'rana', age:'22 year' ,sex:'male'}

  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        <h1>methon</h1>
        {
          prdct.map( element => <Product shehenaj={element}></Product>)
        }
        {
          friends.map(element => <Friend methon={element}></Friend>)
        }
        <Person name="methon" price="200 tk"></Person>
        <Person name="sujon" price="60 tk"></Person>
        
      </header>
    </div>
  );
}
function User(){

  const [user, setUser] = useState([]);

  useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then(data => setUser(data));
  })

  return(
    <div>
      <ul>
        {
          user.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>dynamic: {count}</h1>
      <button onClick={ ()=> setCount(count+1)} >Increase</button>
      <button onMouseMove={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Person(pera){
return(
    <div style={pstyle}>
      <h1> {pera.name} </h1>
      <h2>{pera.price}</h2>
    </div>
  )
}

function Product(machine){
  return(
    <div style={pstyle}>
      <h2> {machine.shehenaj.name} </h2>
      <h3> {machine.shehenaj.price} </h3>
      <button>Buy</button>
    </div>
  )
}
function Friend (value){
  return(
    <div style={pstyle}>
      <h1>{value.methon.name}</h1>
      <h2> {value.methon.age} </h2>
      <h3> {value.methon.sex} </h3>
    </div>
  )
}
export default App;
