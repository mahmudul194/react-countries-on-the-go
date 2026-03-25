import React, { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name,flags, population, region, area} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // setVisited(visited===true ? false : true)
        setVisited(!visited)
    }

    return (
        <div className={`Country ${visited && 'visited-country'} `}>
            <div>
                <img src={flags?.flags?.png} alt="" />
            </div>
            <div>
                <h3>Official Name : {name?.official} </h3>
                <h3> common Name: {name?.common} </h3>
                <h3>Population : {population?.population}</h3>
                <h3>Region: {region?.region}</h3>
                <h3>Area : {area.area} {area.area > 300000 ? 'Big Country' : 'Small Country'} </h3>
                <button onClick={handleVisited} className='btn' >
                    {visited === true ? 'Visited' : 'Not Visited'}
                </button>
            </div>
        </div>
    );
};

export default Country;