import React from 'react';

function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  return (
      <div>
        <ul>
            {numbers.map((n) => (
              <li key={n}>{n}</li>
            ))}
        </ul>
        <button onClick={addNumber}> Add number</button>
      </div>
  )
}

export default App;
