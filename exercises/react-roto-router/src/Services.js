import React from 'react'
import services from './services.json';
import { Link } from 'react-router-dom';

function Services(){
    const serviceCardComponents = services.map(service =>(
        <Link to={`/services/${service.id}`} className="service-card" key={service.id}>
            <h3>{service.name}</h3>
            <p>${service.price}</p>
        </Link>
    ))
    return(
        <section>
            <h3>Services</h3>
            <div className="service-card-list">
                {serviceCardComponents}
            </div>
            
        </section>
    )
}

export default Services;