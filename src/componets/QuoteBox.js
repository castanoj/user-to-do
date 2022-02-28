import React, { useState } from 'react';
import quotes from "../quotes.json"
//import colorsj from "../colors.json"

const getRandom = () => Math.floor(Math.random() * quotes.length)

const colors = ['#845EC2','#4B4453','#C34A36','#00896F','#C34A36','#FF6F91']


const QuoteBox = () => {
    
    const [quote, setQuote] = useState(quotes[getRandom()]);
    
    const changeQuote = () =>{
        setQuote(quotes[getRandom()])
    }
    
    const color = colors[Math.floor(Math.random() * 6)]

    document.body.style = `background: ${color} `

    return (
        <div className='card' style={{color: color}}>

            <div className='content-card'>
                <i className="icon fa-solid fa-quote-left"></i>
                <div className='note'>
                {quote.quote} 
                </div>
            </div>

            <div className='content-card-button' >
                {quote.author}
                <button style={{color: color}} onClick={changeQuote} >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;