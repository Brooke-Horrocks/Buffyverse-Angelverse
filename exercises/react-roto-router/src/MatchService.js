import React from 'react'
import services from './services.json'
import ServiceDetail from './ServiceDetail';

function MatchService({match}) {
    const foundService = services.find(service => service.id === match.params.serviceId);
    return <ServiceDetail {...foundService}/>
}

export default MatchService;