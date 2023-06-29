/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import iconImg from '../assets/images/icon-location.svg';

const FlyMapTo = (props) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(props.coordinate, 15, { duration: 2 });
  }, [props.coordinate, map]);
};

const Map = (props) => {
  const markerIcon = new Icon({
    iconUrl: iconImg,
    iconSize: [46, 56],
  });

  return (
    <MapContainer
      className="w-full h-full"
      center={props.coordinate}
      zoom={15}
      zoomControl={false}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomleft" />
      <Marker position={props.coordinate} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <FlyMapTo coordinate={props.coordinate} />
    </MapContainer>
  );
};

export default Map;
