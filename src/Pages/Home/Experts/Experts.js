import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect( () => {
        fetch('experts.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    }, [])
    return (
        <div id="experts">
            <div>
                <h2 className="mt-5 text-primary">Our Experts</h2>
                <hr className="w-25 mx-auto" />
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-3 container mx-auto mt-2 g-4">
                
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
            </div>
        </div>
    );
};

export default Experts;