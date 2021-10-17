import React from 'react';
import './Expert.css'

const Expert = (props) => {
    const { name, img, expertize } = props.expert;
    return (
        <div>
            <div>
                <div class="col expert">
                    <div class="card">
                        <img className="service-img" src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <h5 className="text-danger">- {expertize}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Expert;