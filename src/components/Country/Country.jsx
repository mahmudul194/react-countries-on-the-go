import React from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name,flags, population, region, area} = country;

    const handleVisited = () =>{
        console.log('Visited');
    }

    return (
        <div style={{
                border : '2px solid white',
                borderRadius : '10px',
                margin : '20px',
                padding : '20px',
                textAlign : 'center',
                fontSize : '18px',
            }}>
            <div>
                <img src={flags?.flags?.png} alt="" />
            </div>
            <div>
                <h3>Official Name : {name?.official} </h3>
                <h3> common Name: {name?.common} </h3>
                <h3>Population : {population?.population}</h3>
                <h3>Region: {region?.region}</h3>
                <h3>Area : {area.area} {area.area > 300000 ? 'Big Country' : 'Small Country'} </h3>
                <button onClick={handleVisited} className='btn' >Not Visited</button>
            </div>
        </div>
    );
};

export default Country;