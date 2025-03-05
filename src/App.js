import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);
  
  const onClickPlus = () =>{
    setCount(count + 1)
  }

  const onClickMinus = () =>{
    setCount(count - 1)
  }

  return (
    <div className="App">
        <h1 className='App__h1'> Счетчик: </h1>
        <span className='App__p'>{count}</span>
        <div className='App__buttonbox'>
          <button className='App__buttonbox-buttonplus' onClick={onClickPlus}> +1 </button>
          <button className='App__buttonbox-buttonminus' onClick={onClickMinus}> -1 </button>
        </div>
    </div>
  );
}

export default App;
