import { useState } from 'react';

export function Welcome(props) {
  const [isActive, setIsActive] = useState(false);
  // isActive - state variable
  // setIsActive - function to assign what isActive is
  // false - default value for isActive

  const toggleActive = () => {
    // ! - inverse operator - if something is true, change it to false and vice versa
    setIsActive(!isActive);
  }

  return (
    <div>
      <h2>Welcome {props.name}, to my React Application!!!</h2>
      <button onClick={toggleActive}>Click ME</button>
      {/* short circuit - js */}
      {isActive && <p>This text only shows when isActive is true</p>}
      {/* Ternary Operator */}
      <p>{isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}
