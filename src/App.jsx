import React from "react";
import Child from "./Component/Child";

function App(){
  const users = [
     { id: 1, name: "Ravi", city: "madurai", age: 22 },
    { id: 2, name: "Priya ", city: "kovi", age: 22 },
    { id: 3, name: "Anitha", city: "chennai", age: 22 },
    { id: 4, name: "Sneha", city: "vnr", age: 25 },
    { id: 5, name: "selvi", city: "salem", age: 29 },
  ];

  return (
    <div>
      <h1>I am the Parent component</h1>
       <h2>I am the child component</h2>
      <Child
        name={users[0].name}
        city={users[0].city}
        age={users[0].age}
    
      />
      <Child
        name={users[1].name}
        city={users[1].city}
        age={users[1].age}
       
      />
      <Child
        name={users[2].name}
        city={users[2].city}
        age={users[2].age}
        
      />
      <Child
        name={users[3].name}
        city={users[3].city}
        age={users[3].age}
       
      />
      <Child
        name={users[4].name}
        city={users[4].city}
        age={users[4].age}
       
      />
    </div>
  );
}
export default App;