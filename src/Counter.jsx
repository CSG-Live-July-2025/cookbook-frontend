import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log(count);
    setCount(count + 1)
  }

  return (
    <div>
      <p>You Clicked the button {count} times...</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
