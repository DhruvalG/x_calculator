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
            <button value="7" onClick={e => setValue(value + e.target.value)}/>
            <button value="8" onClick={e => setValue(value + e.target.value)}/>
            <button value="9" onClick={e => setValue(value + e.target.value)}/>
            <button value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <button value="4" onClick={e => setValue(value + e.target.value)}/>
            <button value="5" onClick={e => setValue(value + e.target.value)}/>
            <button value="6" onClick={e => setValue(value + e.target.value)}/>
            <button value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <button value="1" onClick={e => setValue(value + e.target.value)}/>
            <button value="2" onClick={e => setValue(value + e.target.value)}/>
            <button value="3" onClick={e => setValue(value + e.target.value)}/>
            <button value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <button value="C" onClick={e => setValue('') + setRes('')}/>
            <button value="0" onClick={e => setValue(value + e.target.value)}/>
            <button value="=" className='equal' onClick={e => setRes(value==0? "Error" : eval(value))}/>
            <button value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;