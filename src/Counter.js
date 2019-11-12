import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState('');

    return (
        <div>
            <p>The counter is at : {count} </p>
            <input value={count} onChange={(e) => setCount(+e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>>
              +1
        </button>
            <button onClick={() => setCount(count - 1)}>>
              -1
        </button>
        </div>
    );
}

export default Counter;