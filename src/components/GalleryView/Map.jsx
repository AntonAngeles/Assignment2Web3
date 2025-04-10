import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useEffect } from 'react';

const RecenterAutomatically = ({ lat, long }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, long]);
    }, [lat, long]);
    return null;
}

const Map = (props) => {
    return (
            <MapContainer className='h-60' center={[props.lat, props.long]} zoom={13} style={{zIndex: 0}} >
                <TileLayer
                    attribution='&copy; <a 
                    href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.lat, props.long]}>
                    <Popup>
                        {props.location}
                    </Popup>
                </Marker>
                <RecenterAutomatically lat={props.lat} long={props.long} />
            </MapContainer>
    )
}
export default Map