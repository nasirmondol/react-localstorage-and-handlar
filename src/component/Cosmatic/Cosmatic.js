import React from 'react';
import { addToDb, removeFromDb } from '../fakeDb';

const Cosmatic = (props) => {
    const {name, price, id, picture} = props.cosmatic;


    const handelAddToCart = id =>{
        addToDb(id)
    }

    const removeDb = id =>{
        removeFromDb(id)
    }
    return (
        <div>
            <img src={picture} alt="" />
            <h3>I will buy this cosmetic for my future hubby.</h3>
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <p><small>The number is: {id}</small></p>
            <button onClick={() => handelAddToCart(id)}>Add to cart</button>
            <button onClick={() => removeDb(id)}>Remove Item</button>
        </div>
    );
};

export default Cosmatic;