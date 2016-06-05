'use strict';

/**
 * @ngdoc service
 * @name arboretumApp.constants
 * @description
 * # constants
 * Service in the arboretumApp.
 */
angular.module('arboretumApp')

.constant('mapDefaults', {

  defaults: {
    attributionControl: false,
    maxZoom: 22,
    minZoom: 12,
    dragging: true,
    scrollWheelZoom: true,
    zoomControl: false,
    touchZoom: true,
    doubleClickZoom: false,
    controls: {
        layers: {
          visible: false,
          options: {
            position: 'topright'
          }
        }
      }
  },

  layers: {
    baselayers: {},
    overlays: {},
  },

  center: {},

  maxbounds: {
      northEast: {
          lat: 39.269,
          lng: -76.723
      },
      southWest: {
          lat: 39.258,
          lng: -76.704
      },
      pad: 2.5
  },

  bounds: {
    northEast: {
        lat: 39.269,
        lng: -76.723
    },
    southWest: {
        lat: 39.258,
        lng: -76.704
    }
  },
  events: {
      map: {
          enable: ['mouseup', 'layeradd', 'layerremove'],
          logic: 'broadcast'
      }
  }
})

.service('basemap', function (mapstyle) {
  return {
    // baselayers: {
    mapboxGlLayer: {
      name: 'Basemap',
      type: 'mapboxGL',
      layerOptions: {
        maxZoom: 19,
        showOnSelector: false,
        accessToken: 'pk.eyJ1IjoiZWN6YWprMSIsImEiOiIzeVJsZENzIn0.qU3ya0uQmCvX5OyCxkKCuw',
        style: mapstyle
      }
    }
  // }
  };
});
