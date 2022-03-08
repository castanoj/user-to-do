import {useState, useEffect} from 'react';
import useCounter from '../hooks/useCounter';
//import React from 'react';


const Contador = () => {

   const {counter, decremento, incremento} = useCounter();

    return (
        <div>

        <h2>{counter}</h2>
        <button onClick={decremento}>Decre</button>
        <button onClick={incremento}>Incre</button>
        </div>
    );
};

export default Contador;