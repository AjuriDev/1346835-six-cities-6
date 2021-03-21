import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {offers as offersType} from '../../types';
import {city} from '../../const';

import 'leaflet/dist/leaflet.css';

const Map = ({currentOffers}) => {
  const mapRef = useRef();

  const points = currentOffers.map((offer) => {
    return {
      lat: offer.location.latitude,
      lng: offer.location.longitude,
      title: offer.title
    };
  });

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.lat,
        lng: city.lng
      },
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: point.lat,
        lng: point.lng
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });

    return () => {
      mapRef.current.off();
      mapRef.current.remove();
    };
  }, [city, points]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  currentOffers: offersType,
};

const mapStateToProps = (state) => ({
  currentOffers: state.currentOffers
});

export {Map};
export default connect(mapStateToProps, null)(Map);
