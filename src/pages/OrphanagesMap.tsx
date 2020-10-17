import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../images/mark.svg'
import mapIcon from '../utils/MapIcons'
import api from '../services/Api'

interface Orphanage {
    id: number,
    latitude: number,
    longitude: number,
    name: string
}


export default () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        })
    }, [])

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>
                    <h2>Escolha um orfanato no mapa</h2>

                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Foz do iguaçu</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map 
            center={[-25.5171112, -54.6171749]}
            zoom={12}
            style={{
                width: '100%',
                height:'100%'}}>
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                { orphanages.map(orphanage => (
                                <Marker 
                                key={orphanage.id}
                                position={[orphanage.latitude, orphanage.longitude]}
                                icon={mapIcon}>
                    
                                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                        {orphanage.name}
                                        <Link to={`/orphanages/${orphanage.id}`}>
                                           <FiArrowRight size={20} color="#FFF"/>
                                        </Link>
                                    </Popup>
                                </Marker>
                )) }
            
            </Map>


            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}