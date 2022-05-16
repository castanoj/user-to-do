import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Residents from './Residents';


const Location = () => {

    const [location, setLocation] = useState({});

    const [id, setId] = useState('');

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
             
    }, [])


    const searchId = () => {
        console.log(id);
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data))
    }

  

    console.log(location);
    return (
        <div>

            <div className='input'>
                <div className='inputBtn'>
                    <input className='input-text' type="text" value={id} onChange={e => setId(e.target.value)} placeholder={'type a location id'} />
                    <button onClick={searchId}>Search</button>
                </div>
            </div>

            <div className='container-info'>
                <div className='info'>
                    <h2>{location.name}</h2>
                    <div className='info2'>
                        <div>
                            <h4>Type:</h4>
                            <h3>{location.type}</h3>
                        </div>
                        <div>
                            <h4>Dimension:</h4>
                            <h3>{location.dimension}</h3>
                        </div>
                        <div>
                            <h4>Population:</h4>
                            <h3>{location.residents?.length}</h3>

                        </div>
                        <div>
                            <h4>Id:</h4>
                            <h3>{location.id}</h3>
                        </div>
                    </div>

                </div>

            </div>


            <ul className='residents-list'>
                {location.residents?.map(resident => (
                    <Residents resident={resident} key={resident.id} />
                ))}
            </ul>




        </div>
    );
};

export default Location;