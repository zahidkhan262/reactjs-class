import React from 'react';
import Card from './Card';

const Counter = ({ state, setCurrentData }) => {
    return (
        <div>
            <h1>Counter {state}</h1>
            <Card Counter={state} setCounter={setCurrentData} />
        </div>
    )
}

export default Counter
