import React, { useState } from 'react';
function Calculator() {
  const [value, setValue] = useState('');
  const [res, setRes] = useState('');

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display' style={{display:"flex", flexDirection:"column"}}>
            <input type= "text" value={value}/>
            <div className='output'>{res}</div>
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="C" onClick={e => setValue('') + setRes('')}/>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={e => setRes(value==0? "Error" : eval(value))}/>
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;