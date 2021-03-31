import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {offers as offersType} from '../../types';
import PropTypes from "prop-types";

import 'leaflet/dist/leaflet.css';

const Map = ({offers, activeOfferID}) => {
  const mapRef = useRef();
  const pointsRef = useRef();

  const city = offers[0].city;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapRef.current);

    return () => {
      mapRef.current.off();
      mapRef.current.remove();
    };
  }, [city]);

  useEffect(() => {
    const points = offers.map((offer) => {
      const icon = leaflet.icon({
        iconUrl: `${activeOfferID === offer.id ? `img/pin-active.svg` : `img/pin.svg`}`,
        iconSize: [27, 39]
      });

      return leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
        title: offer.title
      }, {
        icon
      })
      .bindPopup(offer.title);
    });

    pointsRef.current = leaflet.layerGroup(points);
    pointsRef.current.addTo(mapRef.current);

    return () => {
      mapRef.current.removeLayer(pointsRef.current);
    };
  });

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: offersType,
  activeOfferID: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  activeOfferID: state.activeOfferID
});

export {Map};
export default connect(mapStateToProps, null)(Map);
