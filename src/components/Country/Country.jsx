import React from 'react';

const Country = ({country}) => {
    const {name,flags, population, region} = country;
    return (
        <div style={{
            border : '2px solid white',
            borderRadius : '10px',
            margin : '20px',
            padding : '20px'
        }}>
            <img src={flags?.flags?.png} alt="" />
            <h3>Official Name : {name?.official} </h3>
            <h3> common Name: {name?.common} </h3>
            <h3>Population : {population?.population}</h3>
            <h3>Region: {region?.region}</h3>
        </div>
    );
};

export default Country;