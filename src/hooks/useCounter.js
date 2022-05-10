import { useState } from "react"

const useCounter = () => {

    const [counter, setCounter] = useState(0);

    const menos = () => setCounter(counter - 1)
    const mas = () => setCounter(counter + 1)

    return {counter, menos, mas}
}

export default useCounter;
