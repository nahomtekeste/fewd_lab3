import React from "react"; 
import { MapContainer, TileLayer } from 'react-leaflet'; 
import { Marker } from "react-leaflet";
import L from "leaflet"
import { Popup } from "react-leaflet";


delete L.Icon.Default.prototype.getIconUrl; 

L.Icon.Default.mergeOptions({ 
    iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'), 
        iconUrl:require('leaflet/dist/images/marker-icon.png'), 
    shadowUrl:require('leaflet/dist/images/marker-shadow.png'), 

})  

const Map = () => { 
    const position = [55.86639, -4.24919] 

 

return( 

    <MapContainer center={position} zoom={9} scrollWheelZoom={true} className="map"> 
    <TileLayer 

    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 

    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 

    /> 
    <Marker position={position}>
    <Popup>
        GCU
    </Popup>
    </Marker>

    
    </MapContainer> 

    ) 

} 

export default Map; 