import React, { useState } from 'react';
import users from "../users.json"

const getRandom = () => Math.floor(Math.random() * users.length)

const colors = ['#845EC2','#D65DB1', '#FF6F91' ,'#FF9671', '#FFC75F', '#F9F871']


const User = () => {
    
    const [user, setUser] = useState(users[getRandom()]);

    //const user = users[0];

    const changeUser = () =>{
        setUser(users[getRandom()])
    } 

    const color = colors[Math.floor(Math.random() * 6)]

    document.body.style = `background: ${color}`

    return (
        <div className='card' style={{color: color}}>
            <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
            <img src={user.picture.large} alt="" />
            
            <ul>
                <li><i className="fa-solid fa-envelope"></i>
                    {user.email}
                </li>
                <li><i className="fa-solid fa-phone"></i>
                    {user.phone}
                </li>
                <li><i className="fa-solid fa-location-pin"></i>
                {user.location.city} {user.location.country} {user.location.state}
                </li>
            </ul>

            <button onClick={changeUser}>C</button>
            
        </div>
    );
};


export default User;