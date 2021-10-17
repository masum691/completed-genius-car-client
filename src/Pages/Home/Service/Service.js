import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log(props)
    const {name, img, description, price} = props.service;
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h1>{name} </h1>
            <p>{description}</p>
            <h5>$ {price}</h5>
        </div>
    );
};

export default Service;