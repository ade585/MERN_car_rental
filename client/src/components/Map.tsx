/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className='w-full flex justify-center px-4 my-10 z-[0]'>
      <MapContainer
        center={[31.274080 ,-97.381150]}
        zoom={10}
        scrollWheelZoom={false}
        className='h-[40vh]  md:h-[50vh]  lg:h-[70vh] w-full rounded-2xl shadow-2xl'
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker key={1} position={[31.275110,-97.495750]} ></Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
