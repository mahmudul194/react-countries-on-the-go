import React from 'react';

const Country = ({country}) => {
    const {name,flags, population} = country;
    return (
        <div>
            <h3>Official Name : {name.official} </h3>
            <h3> common Name: {name.common} </h3>
            <h3>Population : {population.population}</h3>
            <img src={flags.flags.png} alt="" />
        </div>
    );
};

export default Country;