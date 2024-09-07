import React, { useState } from 'react';
function Calculator() {
  const [value, setValue] = useState('');
  const [res, setRes] = useState('');

  return (
    <div className="container">
      <div className="calculator">
        <h1>React Calculator</h1>
        <form action="">
          <div className='display' style={{display:"flex", flexDirection:"column"}}>
            <input type= "text" value={value}/>
            <div className='output'>{res}</div>
          </div>
          <div>
            <button value="7" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>7</button>
            <button value="8" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>8</button>
            <button value="9" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>9</button>
            <button value="*" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>*</button>
          </div>
          <div>
            <button value="4" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>4</button>
            <button value="5" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>5</button>
            <button value="6" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>6</button>
            <button value="+" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>+</button>
          </div>
          <div>
            <button value="1" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>1</button>
            <button value="2" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>2</button>
            <button value="3" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>3</button>
            <button value="-" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>-</button>
          </div>
          <div>
            <button value="C" onClick={e => e.preventDefault() + setValue('') + setRes('')}>C</button>
            <button value="0" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>0</button>
            <button value="=" className='equal' onClick={e => e.preventDefault() + setRes(value==0? "Error" : eval(value))}>=</button>
            <button value="/" onClick={e => e.preventDefault() + setValue(value + e.target.value)}>/</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;