import React, { useEffect, useState } from 'react';



const Imagen = () => {

    const [color, setColor] = useState("yellow")

useEffect(() =>{

    const mouseMove = e =>{
        if (window.innerWidth / 2 > e.x) {
            setColor('yellow')
        }else{
            setColor('blue')
        }
    }

    window.addEventListener('mousemove', mouseMove)

    return () =>{
        window.removeEventListener('mousemove', mouseMove)
    }

},[])


    

    return (
        
        <div className='color-square' style={{background: color}}>
            Hola soy color
        </div>

    );
};

export default Imagen;