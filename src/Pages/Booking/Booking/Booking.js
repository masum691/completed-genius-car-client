import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({})
    const {serviceId} = useParams();

    useEffect( () => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>Details of : {service.name}</h1>
            <h1>This is booking: {serviceId}</h1>
        </div>
    );
};

export default Booking;