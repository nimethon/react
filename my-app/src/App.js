import './App.css';
import React, { useEffect, useState } from 'react';
function App() {


  const nayoks = ['manna', 'razzak', 'salman sah', 'alomgir', 'shuvo']
  const products = [
    {name: 'photoshop', price:'$90'},
    {name: 'Illustrator', price:'$60'},
    {name: 'Lightroom', price:'$40'},
    {name: 'Premier Pro', price:'$20'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <User></User>
        <Counter></Counter>
        <ul>
        {
           nayoks.map(element => <li>{element}</li>)
        }
        </ul>
        <ol>
        {
          products.map(element => <li> {element.name} </li> )
        }
        </ol>
        {
          products.map(element => <Product one={element} ></Product>)
        }
      </header>
    </div>
  );
}
function User  (){
  const [user, setUser] = useState([]);

  useEffect ( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(data => setUser(data)); 
  })

  return(
    <div>
      <ul>
        {
          user.map(user => <li> {user.name} </li>)
        }
      </ul>
    </div>
  )
}
function Counter (){
  const [count, setCount] = useState (10);
  return(
    <div>
      <h1> Count: {count}</h1>
     <button onClick= {()=>setCount(count+1)}>Increase</button>
     <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

 function Product(props){
  var productStyle ={
    border:'1px solid gray',
    borderRadius:'10px',
    margin:'10px',
    backgroundColor:'tomato',
    height:'280px',
    width:'250px',
    float:'left'
  } 
  const {name, price }= props.one;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{props.one.price}</h3>
      <button>Buy Now</button>
    </div>
  )
 }
function Person(perameter){
  var style= { 
    border: "2px red solid" ,
    margin: "10px"
  }
  return (
<div style={style}>
  <h1>Name: {perameter.nayok} </h1>
  <h2 style={{border:"2px solid yellow", margin: "5px"}}>Hero of {perameter.nayika}</h2>
</div>
  ); 
}
export default App;