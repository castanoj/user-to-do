import axios from "axios";
import React, { useEffect, useState } from "react";

const Residents = ({ resident }) => {
    const [residents, setResidents] = useState({});

    useEffect(() => {
        axios.get(resident).then((res) => setResidents(res.data));
    }, [resident]);

    console.log(residents);


    return (
        <li >

            <div className="cards">

                <img src={residents.image} alt="" />

                <div className="card-info">
                    <h3 className="card-info_name">{residents.name}</h3>

                    <h3 className="card-info_status">
                        {
                            residents.status === 'Alive' ? (
                                <>
                                    <h3><i class="fa-solid fa-heart-pulse"></i>{residents.status}</h3>
                                </>
                            ) : (
                                residents.status === 'Dead' ? (
                                    <h3><i class="fa-solid fa-skull"></i> {residents.status}</h3>
                                ) : (
                                    <h3  className="card-info_status-unk"><i class="fa-solid fa-circle-question"></i> {residents.status}</h3>
                                )

                            )
                        }
                    </h3>
                    <h3 className="card-info_specie"><span>SPECIE</span> {residents.species}</h3>
                    <h3 className="card-info_gender"><span>GENDER</span> {residents.gender}</h3>
                    <h3 className="card-info_gender"><span>EPISODES WHERE APPEAR</span> {residents.episode?.length}</h3>
                </div>

            </div>

        </li>
    );
};

export default Residents;
