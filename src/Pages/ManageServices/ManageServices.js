import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}/`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                }
            })
    }
    return (
        <div className="w-50 mx-auto">
            <h1>Manage Services</h1>
            {
                services.map(service => <div
                    key={service._id}>
                    <div className="shadow my-5 bg-dark text-light">
                        <div>
                            <img className="rounded mt-4" src={service.img} alt="img" />
                            <h4 className="mt-3">{service.name}</h4>
                            <p className="px-5">{service.description}</p>
                        </div>
                        <div>
                            <button className="btn btn-danger mt-2 mb-5" onClick={() => handleDelete(service._id)}>Delete Service</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;