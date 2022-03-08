import axios from 'axios'
import { useState, useEffect } from 'react';
import React from 'react';


const Apii = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
             .then(res => setUser(res.data.results[0]))
    },[]);

    const changeUser = () => {
        axios.get('https://randomuser.me/api/')
             .then(res => setUser(res.data.results[0]))
    }



    

    return (
        <div>
            <h1>{user.name?.title} {user.name?.first} {user.name?.last}</h1>
            <img src={user.picture?.large} alt="" />
            <p>{user.email}</p>
            <p>{user.location?.country}</p>
            <button onClick={changeUser}>Change User</button>
        </div>
    );
};

export default Apii;