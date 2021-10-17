import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log(props)
    const { name, img, description, price } = props.service;
    return (
        <div className="service-container">
            {/* <img src={img} alt="" />
            <h1>{name} </h1>
            <p>{description}</p>
            <h5>$ {price}</h5> */}

            <div class="col">
                <div class="card">
                    <img className="service-img" src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <hr className="w-100" />
                        <h5>$ {price}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;