import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const getHi = () => {

        if(counter % 5 === 0) {
          return <h1>Es multiplo de cinco</h1>
        } else if (counter % 3 === 0) {
            return <h1>Es multiplo de tres</h1>
        }else if (counter % 2 === 0){
            return <h1>Es multiplo de Dos</h1>
        }else {
            return <h1>No es multiplo</h1>
        }
    
      }

    //Renderizado condicional con el operador AND

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter - 1)}>Menos</button>
            <button onClick={() => setCounter(counter + 1)}>Mas</button>

            {
                counter % 5 === 0 ? (
                    <>
                        <h1>Es multiplo de cinco</h1>
                    </>
                ) : (
                    counter % 3 === 0 ? (
                        <h1>Es multiplo de tres</h1>
                    ) : (
                        counter % 2 === 0 ? (
                            <h1>Es multiplo de Dos</h1>
                        ) : (
                            <h1>No es multiplo</h1>
                        )
                    )
                )
            }

            {getHi()}

        </div>
    );
};

export default Counter;
