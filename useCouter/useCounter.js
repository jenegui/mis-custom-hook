import { useState } from 'react';


export const useCounter = ( initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState); // 10

    const increment = () => {
        setCounter( counter + 1 );
    }

    const reset = ( ) => {
        setCounter( initialState );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
