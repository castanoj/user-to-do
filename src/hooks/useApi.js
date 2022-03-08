import axios from "axios";
import { useEffect, useState } from "react";


const useApi = (url) => {
    
    const [response, setResponse] = useState({});

    useEffect(() =>{
        axios.get(url)
            .then(res => setResponse(res.data))
       
    },[])
    
    return {
        response
    }

}

export default useApi;