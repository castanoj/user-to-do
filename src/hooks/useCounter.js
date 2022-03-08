import { useState } from "react";


const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const incremento = () => setCounter(counter+1)

    const decremento = () => setCounter(counter-1)

    return{
        counter,
        incremento,
        decremento
    }

}

export default useCounter;