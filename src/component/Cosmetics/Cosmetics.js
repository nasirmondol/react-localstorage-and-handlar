import React, { useEffect, useState } from 'react';
import { getPrice } from '../../utilities/calculate';
import Cosmatic from '../Cosmatic/Cosmatic';

const Cosmetics = () => {
    const [cosmatics, setCosmatics] = useState([]);
    console.log(cosmatics);

    useEffect(() =>{
        fetch('cosmatics.json')
        .then(res => res.json())
        .then(data => setCosmatics(data))
    }, []);
    const total = getPrice(cosmatics);
    return (
        <div>
            <h2>Welcome to my cosmetics world!!</h2>
            <p>Money needed: {total}</p>
            
            {
                cosmatics.map(cosmatic => <Cosmatic 
                key={cosmatic.id}
                cosmatic={cosmatic}
                ></Cosmatic>)
            }
        </div>
    );
};

export default Cosmetics;