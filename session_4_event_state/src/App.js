import { useState } from 'react';

function App() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Person />
    </div>
  )
  ;
}

const Person = () => {
  const [person, setPerson] = useState({name: 'MindX', age: 12});

  const onIncreaseAge = () =>{
    // person.age = person.age + 1;
    // setPerson(person);
    setPerson({...person, age: person.age + 1});
  }

  const onDecreaseAge = () => {
    setPerson((prev) => {
      if(prev.age === 0) { return prev;}
      return { ...prev, age: prev.age - 1};
    })
  }

  return(
    <div>
      <p>Hello I'm {person.name}. I'm {person.age} years old.</p>
      <button onClick={onIncreaseAge}>Increase age</button>
      <button onClick={onDecreaseAge}>Decrease Age</button>
    </div>
  )
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncreaseClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
        <span>{count}</span>
        <button onClick={onIncreaseClick} >Increase</button>
    </div>
  )
}

export default App;
