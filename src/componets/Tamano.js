import React, { useEffect, useState } from 'react';

const Tamano = () => {

    const [size, setSize] = useState("Pantalla grande")

    useEffect(() => {
       
        const changeSize = ( ) => {
             if(window.innerWidth > 700){
                    setSize('Pantalla grande')
                }else{
                    setSize('Pantalla pequeña')
                }
            
        }

        window.addEventListener('resize', changeSize)

        return() =>{
            window.removeEventListener('resize', changeSize)
        }


    },[])



    return (
        <div>
            <h2>{size}</h2>
        </div>
    );
};

export default Tamano;