'use strict';

/**
 * @ngdoc constant
 * @name arboretumApp.mapstyle
 * @description
 * # mapstyle
 * Constant in the arboretumApp.
 */
angular.module('arboretumApp')
  .constant('mapstyle', {
    'version': 8,
    'name': 'Light',
    'sources': {
        'mapbox': {
            'url': 'mapbox://mapbox.mapbox-streets-v6',
            'type': 'vector'
        },
        'mapbox://mapbox.mapbox-terrain-v2': {
            'url': 'mapbox://mapbox.mapbox-terrain-v2',
            'type': 'vector'
        }
    },
    'sprite': 'mapbox://sprites/eczajk1/cieszaiux00knqam3b7444bmd',
    'glyphs': 'mapbox://fonts/eczajk1/{fontstack}/{range}.pbf',
    'layers': [
        {
            'id': 'background',
            'type': 'background',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'background-color': '#eee'
            },
            'interactive': true
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'snow'
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'landcover_snow',
            'paint': {
                'fill-color': '#fff',
                'fill-opacity': 0.5
            },
            'source-layer': 'landcover'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'crop'
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'landcover_crop',
            'paint': {
                'fill-color': '#ececec',
                'fill-opacity': 0.5
            },
            'source-layer': 'landcover'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'grass'
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'landcover_grass',
            'paint': {
                'fill-color': '#e5e5e5',
                'fill-opacity': 0.5
            },
            'source-layer': 'landcover'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'scrub'
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'landcover_scrub',
            'paint': {
                'fill-color': '#e3e3e3',
                'fill-opacity': 0.5
            },
            'source-layer': 'landcover'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'wood'
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'landcover_wood',
            'paint': {
                'fill-color': '#dcdcdc',
                'fill-opacity': 0.5
            },
            'source-layer': 'landcover'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'Polygon'
                ],
                [
                    '==',
                    'class',
                    'industrial'
                ]
            ],
            'type': 'fill',
            'source': 'mapbox',
            'id': 'landuse_industrial',
            'paint': {
                'fill-color': '#fff',
                'fill-opacity': 0.5
            },
            'source-layer': 'landuse'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'park'
                ]
            ],
            'type': 'fill',
            'source': 'mapbox',
            'id': 'landuse_park',
            'paint': {
                'fill-color': 'lightgreen',
                'fill-opacity': 0.65
            },
            'source-layer': 'landuse'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'wood'
                ]
            ],
            'type': 'fill',
            'source': 'mapbox',
            'id': 'landuse_wood',
            'paint': {
                'fill-color': '#e0e0e0'
            },
            'source-layer': 'landuse'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'level',
                    94
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'hillshade_highlight_bright',
            'paint': {
                'fill-color': '#fff',
                'fill-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            15,
                            0.15
                        ],
                        [
                            17,
                            0.05
                        ]
                    ]
                }
            },
            'source-layer': 'hillshade'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'level',
                    90
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'hillshade_highlight_med',
            'paint': {
                'fill-color': '#fff',
                'fill-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            15,
                            0.15
                        ],
                        [
                            17,
                            0.05
                        ]
                    ]
                }
            },
            'source-layer': 'hillshade'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'level',
                    89
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'hillshade_shadow_faint',
            'paint': {
                'fill-color': '#666',
                'fill-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            14,
                            0.06
                        ],
                        [
                            17,
                            0.01
                        ]
                    ]
                }
            },
            'source-layer': 'hillshade'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'level',
                    78
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'hillshade_shadow_med',
            'paint': {
                'fill-color': '#666',
                'fill-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            14,
                            0.06
                        ],
                        [
                            17,
                            0.01
                        ]
                    ]
                }
            },
            'source-layer': 'hillshade'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'level',
                    67
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'hillshade_shadow_dark',
            'paint': {
                'fill-color': '#888888',
                'fill-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            14,
                            0.06
                        ],
                        [
                            17,
                            0.01
                        ]
                    ]
                }
            },
            'source-layer': 'hillshade'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'level',
                    56
                ]
            ],
            'type': 'fill',
            'source': 'mapbox://mapbox.mapbox-terrain-v2',
            'id': 'hillshade_shadow_extreme',
            'paint': {
                'fill-color': '#999',
                'fill-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            14,
                            0.06
                        ],
                        [
                            17,
                            0.01
                        ]
                    ]
                }
            },
            'source-layer': 'hillshade'
        },
        {
            'id': 'building',
            'type': 'fill',
            'source': 'mapbox',
            'source-layer': 'building',
            'minzoom': 15,
            'paint': {
                'fill-outline-color': '#c0c0c0',
                'fill-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            15,
                            0
                        ],
                        [
                            16.5,
                            1
                        ]
                    ]
                },
                'fill-antialias': true,
                'fill-color': '#cbcbcb'
            },
            'interactive': true
        },
        {
            'id': 'waterway',
            'type': 'line',
            'source': 'mapbox',
            'source-layer': 'waterway',
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    'in',
                    'class',
                    'river',
                    'canal'
                ]
            ],
            'paint': {
                'line-color': '#d6d6d6',
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            6,
                            0.25
                        ],
                        [
                            20,
                            6
                        ]
                    ]
                }
            },
            'interactive': true
        },
        {
            'id': 'waterway_stream',
            'type': 'line',
            'source': 'mapbox',
            'source-layer': 'waterway',
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'class',
                    'stream'
                ]
            ],
            'paint': {
                'line-color': '#21B5EA',
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            13,
                            0.75
                        ],
                        [
                            20,
                            4
                        ]
                    ]
                }
            },
            'interactive': true
        },
        {
            'id': 'water',
            'type': 'fill',
            'source': 'mapbox',
            'source-layer': 'water',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'fill-color': '#21B5EA'
            },
            'interactive': true
        },
        {
            'interactive': true,
            'layout': {
                'line-join': 'miter',
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'type',
                    'runway'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'aeroway_runway',
            'paint': {
                'line-width': {
                    'base': 1.15,
                    'stops': [
                        [
                            11,
                            3
                        ],
                        [
                            20,
                            32
                        ]
                    ]
                },
                'line-color': '#fff',
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            9,
                            0.5
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            },
            'source-layer': 'aeroway'
        },
        {
            'interactive': true,
            'layout': {
                'line-join': 'miter'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'type',
                    'taxiway'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'aeroway_taxiway',
            'paint': {
                'line-width': {
                    'base': 1.15,
                    'stops': [
                        [
                            10,
                            0.25
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                'line-color': '#fff'
            },
            'source-layer': 'aeroway'
        },
        {
            'id': 'tunnel_minor',
            'type': 'line',
            'source': 'mapbox',
            'source-layer': 'tunnel',
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    'in',
                    'class',
                    'motorway_link',
                    'street',
                    'street_limited',
                    'service',
                    'driveway',
                    'path'
                ]
            ],
            'paint': {
                'line-color': '#efefef',
                'line-width': {
                    'base': 1.55,
                    'stops': [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            20
                        ]
                    ]
                },
                'line-dasharray': [
                    0.36,
                    0.18
                ]
            },
            'interactive': true
        },
        {
            'id': 'tunnel_major',
            'type': 'line',
            'source': 'mapbox',
            'source-layer': 'tunnel',
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    'in',
                    'class',
                    'motorway',
                    'main'
                ]
            ],
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.4,
                    'stops': [
                        [
                            6,
                            0.5
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                },
                'line-dasharray': [
                    0.28,
                    0.14
                ]
            },
            'interactive': true
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'path'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-path',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                }
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    'in',
                    'class',
                    'street',
                    'street_limited'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-street-low-zoom',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            11.5,
                            0
                        ],
                        [
                            12,
                            1
                        ]
                    ]
                }
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'class',
                    'service',
                    'driveway'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-service-driveway',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                }
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'motorway_link'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-motorway_link',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'class',
                    'street_limited'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-street_limited',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'minzoom': 14,
            'layout': {
                'line-cap': 'round',
                'line-join': 'round',
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'class',
                    'street'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-street',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            12.5,
                            0.3
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'layout': {
                'line-cap': 'round',
                'line-join': 'round',
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'class',
                    'main'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-main',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            6,
                            0.5
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                }
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'layout': {
                'line-cap': 'round',
                'line-join': 'round',
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'class',
                        'main'
                    ],
                    [
                        '==',
                        'type',
                        'trunk'
                    ]
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-trunk',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'layout': {
                'line-cap': 'round',
                'line-join': 'round',
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'motorway'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-motorway',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                }
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'minzoom': 13,
            'layout': {
                'line-cap': 'round',
                'line-join': 'round',
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'class',
                    'major_rail',
                    'minor_rail'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-rail',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            14,
                            0.5
                        ],
                        [
                            20,
                            1
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'road'
        },
        {
            'interactive': true,
            'minzoom': 13,
            'layout': {
                'line-cap': 'butt',
                'line-join': 'miter',
                'visibility': 'visible'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'class',
                    'major_rail',
                    'minor_rail'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'road-rail-tracks',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            14,
                            4
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'road'
        },
        {
            'id': 'bridge_minor_case',
            'type': 'line',
            'source': 'mapbox',
            'source-layer': 'bridge',
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    'in',
                    'class',
                    'motorway_link',
                    'street',
                    'street_limited',
                    'service',
                    'driveway',
                    'path'
                ]
            ],
            'paint': {
                'line-color': '#eee',
                'line-width': {
                    'base': 1.6,
                    'stops': [
                        [
                            12,
                            0.5
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                'line-gap-width': {
                    'base': 1.55,
                    'stops': [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            20
                        ]
                    ]
                }
            },
            'interactive': true
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'path'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-path',
            'paint': {
                'line-color': '#efefef',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                }
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'minzoom': 11,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'maxzoom': 14.1,
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    'in',
                    'class',
                    'street',
                    'street_limited'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-street-low-zoom',
            'paint': {
                'line-color': '#efefef',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            11.5,
                            0
                        ],
                        [
                            12,
                            1
                        ]
                    ]
                }
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'minzoom': 10,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'class',
                    'motorway_link'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-motorway_link',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'minzoom': 14,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'class',
                    'street_limited'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-street_limited',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'minzoom': 14,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'street'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-street',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'class',
                        'main'
                    ],
                    [
                        '!=',
                        'type',
                        'trunk'
                    ]
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-main',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            6,
                            0.5
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                }
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'class',
                        'main'
                    ],
                    [
                        '==',
                        'type',
                        'trunk'
                    ]
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-trunk',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            0.5
                        ],
                        [
                            9,
                            1.25
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'round',
                'line-join': 'round'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'motorway'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-motorway',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            0.5
                        ],
                        [
                            9,
                            1.25
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'minzoom': 13,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'butt',
                'line-join': 'miter',
                'line-round-limit': 2
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'class',
                    'major_rail',
                    'minor_rail'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-rail',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            14,
                            0.5
                        ],
                        [
                            20,
                            1
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'minzoom': 14,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'butt',
                'line-join': 'miter',
                'line-round-limit': 2
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'class',
                    'major_rail',
                    'minor_rail'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-rail-tracks',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            14,
                            4
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'minzoom': 14,
            'layout': {
                'visibility': 'visible',
                'line-cap': 'butt',
                'line-join': 'miter',
                'line-round-limit': 2
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'aerialway'
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'bridge-rail-tracks_copy',
            'paint': {
                'line-color': '#fff',
                'line-width': {
                    'base': 1.5,
                    'stops': [
                        [
                            14,
                            0.5
                        ],
                        [
                            20,
                            1
                        ]
                    ]
                },
                'line-opacity': 1
            },
            'source-layer': 'bridge'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-join': 'bevel'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '>=',
                        'admin_level',
                        3
                    ],
                    [
                        '==',
                        'maritime',
                        0
                    ]
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'admin-3-4-boundaries-bg',
            'paint': {
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            3.5
                        ],
                        [
                            12,
                            6
                        ]
                    ]
                },
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            2,
                            0
                        ],
                        [
                            5,
                            0.75
                        ]
                    ]
                },
                'line-color': '#fff'
            },
            'source-layer': 'admin'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-join': 'miter'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'admin_level',
                        2
                    ],
                    [
                        '==',
                        'maritime',
                        0
                    ],
                    [
                        '==',
                        'disputed',
                        2
                    ]
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'admin-2-boundaries-bg',
            'paint': {
                'line-color': '#fff',
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            0
                        ],
                        [
                            4,
                            0.75
                        ]
                    ]
                },
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            2,
                            3.5
                        ],
                        [
                            10,
                            10
                        ]
                    ]
                }
            },
            'source-layer': 'admin'
        },
        {
            'interactive': true,
            'layout': {
                'visibility': 'visible',
                'line-join': 'miter'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '>=',
                        'admin_level',
                        3
                    ],
                    [
                        '==',
                        'maritime',
                        0
                    ]
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'admin-3-4-boundaries',
            'paint': {
                'line-color': '#b5b5b5',
                'line-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            2,
                            0
                        ],
                        [
                            3,
                            1
                        ]
                    ]
                },
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            0.5
                        ],
                        [
                            12,
                            2
                        ]
                    ]
                },
                'line-dasharray': {
                    'base': 1,
                    'stops': [
                        [
                            4,
                            [
                                2,
                                0
                            ]
                        ],
                        [
                            5,
                            [
                                2,
                                2,
                                6,
                                2
                            ]
                        ]
                    ]
                }
            },
            'source-layer': 'admin'
        },
        {
            'interactive': true,
            'minzoom': 1,
            'layout': {
                'visibility': 'visible',
                'line-join': 'round',
                'line-cap': 'round'
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'admin_level',
                        2
                    ],
                    [
                        '==',
                        'maritime',
                        0
                    ],
                    [
                        '==',
                        'disputed',
                        0
                    ]
                ]
            ],
            'type': 'line',
            'source': 'mapbox',
            'id': 'admin-2-boundaries',
            'paint': {
                'line-color': '#c0c0c0',
                'line-opacity': 1,
                'line-width': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            0.5
                        ],
                        [
                            10,
                            2
                        ]
                    ]
                }
            },
            'source-layer': 'admin'
        },
        {
            'interactive': true,
            'layout': {
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            15.95,
                            9
                        ],
                        [
                            16,
                            11
                        ]
                    ]
                },
                'icon-image': 'default-4-small',
                'text-max-angle': 38,
                'symbol-spacing': {
                    'base': 1,
                    'stops': [
                        [
                            10,
                            200
                        ],
                        [
                            15,
                            600
                        ]
                    ]
                },
                'text-font': [
                    'DIN Offc Pro Bold',
                    'Arial Unicode MS Regular'
                ],
                'symbol-placement': 'line',
                'visibility': 'none',
                'text-field': '{ref}',
                'text-letter-spacing': 0.05
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        'in',
                        'shield',
                        'us-interstate',
                        'us-interstate-business',
                        'us-interstate-duplex'
                    ],
                    [
                        '<=',
                        'reflen',
                        6
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'interstate-motorway_shields',
            'paint': {
                'text-color': '#929292',
                'text-halo-color': '#fff',
                'icon-color': 'white',
                'icon-halo-width': 1,
                'icon-halo-color': 'rgba(0, 0, 0, 1)'
            },
            'source-layer': 'road_label'
        },
        {
            'interactive': true,
            'minzoom': 12,
            'layout': {
                'text-font': [
                    'DIN Offc Pro Italic',
                    'Arial Unicode MS Regular'
                ],
                'visibility': 'visible',
                'symbol-placement': 'line',
                'text-field': '{name_en}',
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            13,
                            12
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '==',
                    'class',
                    'river'
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'waterway-label',
            'paint': {
                'text-color': '#929292'
            },
            'source-layer': 'waterway_label'
        },
        {
            'interactive': true,
            'minzoom': 12,
            'layout': {
                'symbol-placement': 'line',
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Bold'
                ],
                'text-transform': 'none',
                'text-letter-spacing': 0,
                'text-padding': 0,
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            8,
                            8
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '!in',
                    'class',
                    'motorway',
                    'main',
                    'street_limited',
                    'street'
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'road-label-sm',
            'paint': {
                'text-halo-color': '#fff',
                'text-halo-width': 2,
                'text-color': '#929292'
            },
            'source-layer': 'road_label'
        },
        {
            'interactive': true,
            'layout': {
                'symbol-placement': 'line',
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Bold'
                ],
                'text-transform': 'none',
                'text-letter-spacing': 0,
                'text-padding': 0,
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            8,
                            8
                        ],
                        [
                            20,
                            16
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'class',
                    'street',
                    'street_limited'
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'road-label-med',
            'paint': {
                'text-halo-color': '#fff',
                'text-halo-width': 2,
                'text-color': '#929292'
            },
            'source-layer': 'road_label'
        },
        {
            'interactive': true,
            'layout': {
                'symbol-placement': 'line',
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Bold'
                ],
                'text-transform': 'none',
                'text-letter-spacing': 0,
                'text-padding': 0,
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            8,
                            8
                        ],
                        [
                            20,
                            17
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'class',
                    'motorway',
                    'main'
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'road-label-large',
            'paint': {
                'text-halo-color': '#fff',
                'text-halo-width': 2,
                'text-color': '#929292'
            },
            'source-layer': 'road_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'visibility': 'visible',
                'text-field': {
                    'base': 1,
                    'stops': [
                        [
                            12,
                            ''
                        ],
                        [
                            13,
                            '{name_en}'
                        ]
                    ]
                },
                'text-max-width': 9,
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        'in',
                        'maki',
                        'airport',
                        'heliport',
                        'rocket'
                    ],
                    [
                        '<=',
                        'scalerank',
                        2
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'airport-label',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1,
                'text-halo-blur': 0
            },
            'source-layer': 'poi_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 8,
                'visibility': 'visible',
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Regular',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            14
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'maki',
                        'park'
                    ],
                    [
                        '<=',
                        'scalerank',
                        1
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'poi-parks-scalerank1',
            'paint': {
                'text-color': '#4f4f4f',
                'text-halo-color': '#fff',
                'text-halo-width': 1
            },
            'source-layer': 'poi_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 8,
                'visibility': 'visible',
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Regular',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            14
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '!in',
                        'maki',
                        'rail-light',
                        'rail-metro',
                        'rail',
                        'airport',
                        'airfield',
                        'heliport',
                        'rocket',
                        'park',
                        'golf',
                        'cemetary',
                        'zoo',
                        'campsite',
                        'swimming',
                        'dog-park'
                    ],
                    [
                        '<=',
                        'scalerank',
                        1
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'poi-scalerank1',
            'paint': {
                'text-color': '#5a5a5a',
                'text-halo-color': '#fff',
                'text-halo-width': 1
            },
            'source-layer': 'poi_label'
        },
        {
            'interactive': true,
            'minzoom': 5,
            'layout': {
                'text-font': [
                    'DIN Offc Pro Italic',
                    'Arial Unicode MS Regular'
                ],
                'visibility': 'visible',
                'text-field': '{name_en}',
                'text-max-width': 7,
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            13,
                            12
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                }
            },
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'water-label',
            'paint': {
                'text-color': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            '#929292'
                        ],
                        [
                            20,
                            '#929292'
                        ]
                    ]
                }
            },
            'source-layer': 'water_label'
        },
        {
            'interactive': true,
            'minzoom': 12,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Bold',
                    'Arial Unicode MS Bold'
                ],
                'text-max-width': 7,
                'text-letter-spacing': 0.1,
                'text-transform': 'uppercase',
                'text-size': {
                    'stops': [
                        [
                            12,
                            10
                        ],
                        [
                            16,
                            14
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'Point'
                ],
                [
                    'in',
                    'type',
                    'suburb',
                    'neighbourhood'
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'place_label_neighborhood',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1,
                'text-halo-blur': 1,
                'text-opacity': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            0
                        ],
                        [
                            12,
                            0.66
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            'source-layer': 'place_label'
        },
        {
            'interactive': true,
            'minzoom': 8,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Regular',
                    'Arial Unicode MS Bold'
                ],
                'text-max-width': 15,
                'text-size': {
                    'stops': [
                        [
                            6,
                            10
                        ],
                        [
                            12,
                            13
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'Point'
                ],
                [
                    'in',
                    'type',
                    'town',
                    'village',
                    'hamlet'
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'place_label_other',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1,
                'text-halo-blur': 1
            },
            'source-layer': 'place_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Bold'
                ],
                'text-max-width': 10,
                'text-anchor': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            'top'
                        ],
                        [
                            6,
                            'center'
                        ]
                    ]
                },
                'text-offset': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            [
                                0,
                                0.1
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                'text-size': {
                    'stops': [
                        [
                            6,
                            11
                        ],
                        [
                            14,
                            19
                        ]
                    ]
                }
            },
            'maxzoom': 16,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'type',
                        'city'
                    ],
                    [
                        '>',
                        'scalerank',
                        4
                    ],
                    [
                        'in',
                        'ldir',
                        'S',
                        'E',
                        'SE',
                        'SW'
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'place_label_city_small_s',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1.5,
                'text-halo-blur': 0
            },
            'source-layer': 'place_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Bold'
                ],
                'text-max-width': 10,
                'text-anchor': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            'bottom'
                        ],
                        [
                            6,
                            'center'
                        ]
                    ]
                },
                'text-offset': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            [
                                0,
                                -0.2
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                'text-size': {
                    'stops': [
                        [
                            6,
                            11
                        ],
                        [
                            14,
                            19
                        ]
                    ]
                }
            },
            'maxzoom': 16,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'type',
                        'city'
                    ],
                    [
                        '>',
                        'scalerank',
                        4
                    ],
                    [
                        'in',
                        'ldir',
                        'N',
                        'W',
                        'NW',
                        'NE'
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'place_label_city_small_n',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1.5,
                'text-halo-blur': 0
            },
            'source-layer': 'place_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Bold'
                ],
                'text-max-width': 10,
                'text-anchor': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            'top'
                        ],
                        [
                            6,
                            'center'
                        ]
                    ]
                },
                'text-offset': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            [
                                0,
                                0.1
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                'text-size': {
                    'stops': [
                        [
                            5,
                            11
                        ],
                        [
                            12,
                            19
                        ]
                    ],
                    'base': 0.9
                }
            },
            'maxzoom': 16,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'type',
                        'city'
                    ],
                    [
                        '<=',
                        'scalerank',
                        4
                    ],
                    [
                        '>',
                        'scalerank',
                        1
                    ],
                    [
                        'in',
                        'ldir',
                        'S',
                        'E',
                        'SE',
                        'SW'
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'place_label_city_medium_s',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1.5,
                'text-halo-blur': 0
            },
            'source-layer': 'place_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Bold'
                ],
                'text-max-width': 10,
                'text-anchor': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            'bottom'
                        ],
                        [
                            6,
                            'center'
                        ]
                    ]
                },
                'text-offset': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            [
                                0,
                                -0.2
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                'text-size': {
                    'stops': [
                        [
                            5,
                            11
                        ],
                        [
                            12,
                            19
                        ]
                    ],
                    'base': 0.9
                }
            },
            'maxzoom': 16,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'type',
                        'city'
                    ],
                    [
                        '<=',
                        'scalerank',
                        4
                    ],
                    [
                        '>',
                        'scalerank',
                        1
                    ],
                    [
                        'in',
                        'ldir',
                        'N',
                        'W',
                        'NW',
                        'NE'
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'place_label_city_medium_n',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1.5,
                'text-halo-blur': 0
            },
            'source-layer': 'place_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Bold',
                    'Arial Unicode MS Bold'
                ],
                'text-max-width': 15,
                'text-transform': 'none',
                'text-anchor': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            'top'
                        ],
                        [
                            6,
                            'center'
                        ]
                    ]
                },
                'text-offset': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            [
                                0,
                                0.1
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                'text-size': {
                    'stops': [
                        [
                            4,
                            11
                        ],
                        [
                            10,
                            20
                        ]
                    ],
                    'base': 0.9
                }
            },
            'maxzoom': 16,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '==',
                        'type',
                        'city'
                    ],
                    [
                        '<=',
                        'scalerank',
                        1
                    ],
                    [
                        'in',
                        'ldir',
                        'S',
                        'SE',
                        'SW',
                        'E'
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'place_label_city_large_s',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1.5,
                'text-halo-blur': 0
            },
            'source-layer': 'place_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Bold',
                    'Arial Unicode MS Bold'
                ],
                'text-max-width': 5,
                'text-transform': 'none',
                'text-anchor': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            'bottom'
                        ],
                        [
                            6,
                            'center'
                        ]
                    ]
                },
                'text-offset': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            [
                                0,
                                -0.2
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                'symbol-avoid-edges': false,
                'text-size': {
                    'stops': [
                        [
                            4,
                            11
                        ],
                        [
                            10,
                            20
                        ]
                    ],
                    'base': 0.9
                }
            },
            'maxzoom': 16,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'all',
                    [
                        '<=',
                        'scalerank',
                        1
                    ],
                    [
                        'in',
                        'ldir',
                        'N',
                        'NE',
                        'NW',
                        'W'
                    ],
                    [
                        '==',
                        'type',
                        'city'
                    ]
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'place_label_city_large_n',
            'paint': {
                'text-color': '#666',
                'text-halo-color': '#fff',
                'text-halo-width': 1.5,
                'text-halo-blur': 0
            },
            'source-layer': 'place_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 8,
                'visibility': 'none',
                'symbol-placement': 'point',
                'text-field': '{name_en}',
                'text-line-height': 1.2,
                'text-letter-spacing': 0.1,
                'text-font': [
                    'DIN Offc Pro Regular',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            4,
                            12
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'Point'
                ],
                [
                    'in',
                    'labelrank',
                    4,
                    5,
                    6
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'marine_label_point_other',
            'paint': {
                'text-color': '#666'
            },
            'source-layer': 'marine_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 8,
                'visibility': 'visible',
                'symbol-placement': 'point',
                'text-field': '{name_en}',
                'text-line-height': 1.3,
                'text-letter-spacing': 0.1,
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            13
                        ],
                        [
                            5,
                            18
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'Point'
                ],
                [
                    '==',
                    'labelrank',
                    3
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'marine_label_point_3',
            'paint': {
                'text-color': '#666',
                'text-opacity': 0.25
            },
            'source-layer': 'marine_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 8,
                'visibility': 'visible',
                'symbol-placement': 'point',
                'text-field': '{name_en}',
                'text-line-height': 1.2,
                'text-letter-spacing': 0,
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            14
                        ],
                        [
                            5,
                            24
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'Point'
                ],
                [
                    '==',
                    'labelrank',
                    2
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'marine_label_point_2',
            'paint': {
                'text-color': '#666',
                'text-opacity': 0.25
            },
            'source-layer': 'marine_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 4,
                'visibility': 'visible',
                'symbol-placement': 'point',
                'text-field': '{name_en}',
                'text-line-height': 1.5,
                'text-letter-spacing': 0.25,
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            1,
                            12
                        ],
                        [
                            4,
                            30
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'Point'
                ],
                [
                    '==',
                    'labelrank',
                    1
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'marine_label_point_1',
            'paint': {
                'text-color': '#666',
                'text-opacity': 0.25
            },
            'source-layer': 'marine_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 15,
                'visibility': 'visible',
                'symbol-placement': 'line',
                'text-field': '{name_en}',
                'text-line-height': 1.2,
                'text-letter-spacing': 0,
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            4,
                            12
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    'in',
                    'labelrank',
                    4,
                    5,
                    6
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'marine_label_line_other',
            'paint': {
                'text-color': '#666',
                'text-opacity': 0.25
            },
            'source-layer': 'marine_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 15,
                'visibility': 'visible',
                'symbol-placement': 'line',
                'text-field': '{name_en}',
                'text-line-height': 1.2,
                'text-letter-spacing': 0,
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            13
                        ],
                        [
                            5,
                            18
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'labelrank',
                    3
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'marine_label_line_3',
            'paint': {
                'text-color': '#666',
                'text-opacity': 0.25
            },
            'source-layer': 'marine_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 15,
                'visibility': 'visible',
                'symbol-placement': 'line',
                'text-field': '{name_en}',
                'text-line-height': 1.2,
                'text-letter-spacing': 0,
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            14
                        ],
                        [
                            5,
                            24
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'labelrank',
                    2
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'marine_label_line_2',
            'paint': {
                'text-color': '#666',
                'text-opacity': 0.25
            },
            'source-layer': 'marine_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-max-width': 15,
                'visibility': 'visible',
                'symbol-placement': 'line',
                'text-field': '{name_en}',
                'text-line-height': 1.2,
                'text-letter-spacing': 0.4,
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            3,
                            25
                        ],
                        [
                            4,
                            30
                        ]
                    ]
                }
            },
            'filter': [
                'all',
                [
                    '==',
                    '$type',
                    'LineString'
                ],
                [
                    '==',
                    'labelrank',
                    1
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'marine_label_line_1',
            'paint': {
                'text-color': '#666',
                'text-opacity': 0.25
            },
            'source-layer': 'marine_label'
        },
        {
            'interactive': true,
            'minzoom': 3,
            'layout': {
                'text-transform': 'uppercase',
                'visibility': 'visible',
                'text-field': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            '{abbr}'
                        ],
                        [
                            4,
                            '{name_en}'
                        ]
                    ]
                },
                'text-font': [
                    'DIN Offc Pro Bold',
                    'Arial Unicode MS Regular'
                ],
                'text-letter-spacing': 0.15,
                'text-max-width': 7,
                'text-size': {
                    'base': 1,
                    'stops': [
                        [
                            4,
                            9
                        ],
                        [
                            7,
                            18
                        ]
                    ]
                }
            },
            'maxzoom': 7,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '>=',
                    'area',
                    80000
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'state-label-lg',
            'paint': {
                'text-color': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            '#929292'
                        ],
                        [
                            20,
                            '#929292'
                        ]
                    ]
                }
            },
            'source-layer': 'state_label'
        },
        {
            'interactive': true,
            'minzoom': 1,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-max-width': 7,
                'text-size': {
                    'stops': [
                        [
                            3,
                            8
                        ],
                        [
                            9,
                            18
                        ]
                    ],
                    'base': 0.9
                }
            },
            'maxzoom': 10,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    '>=',
                    'scalerank',
                    5
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'country-label-sm',
            'paint': {
                'text-color': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            '#444'
                        ],
                        [
                            10,
                            '#888'
                        ]
                    ]
                },
                'text-halo-color': '#fff',
                'text-halo-width': 1,
                'text-halo-blur': 1
            },
            'source-layer': 'country_label'
        },
        {
            'interactive': true,
            'minzoom': 1,
            'layout': {
                'text-field': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            '{code}'
                        ],
                        [
                            2,
                            '{name_en}'
                        ]
                    ]
                },
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-max-width': 7,
                'text-size': {
                    'stops': [
                        [
                            2,
                            8
                        ],
                        [
                            7,
                            18
                        ]
                    ],
                    'base': 0.9
                }
            },
            'maxzoom': 8,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'scalerank',
                    3,
                    4
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'country-label-md',
            'paint': {
                'text-color': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            '#444'
                        ],
                        [
                            10,
                            '#888'
                        ]
                    ]
                },
                'text-halo-color': '#fff',
                'text-halo-width': 1,
                'text-halo-blur': 1
            },
            'source-layer': 'country_label'
        },
        {
            'interactive': true,
            'layout': {
                'text-field': '{name_en}',
                'text-font': [
                    'DIN Offc Pro Medium',
                    'Arial Unicode MS Regular'
                ],
                'text-max-width': 6,
                'text-size': {
                    'stops': [
                        [
                            1,
                            9
                        ],
                        [
                            5,
                            18
                        ]
                    ],
                    'base': 0.9
                }
            },
            'maxzoom': 12,
            'filter': [
                'all',
                [
                    'in',
                    '$type',
                    'Polygon',
                    'LineString',
                    'Point'
                ],
                [
                    'in',
                    'scalerank',
                    1,
                    2
                ]
            ],
            'type': 'symbol',
            'source': 'mapbox',
            'id': 'country-label-lg',
            'paint': {
                'text-color': {
                    'base': 1,
                    'stops': [
                        [
                            0,
                            '#444'
                        ],
                        [
                            10,
                            '#888'
                        ]
                    ]
                },
                'text-halo-color': '#fff',
                'text-halo-width': 1,
                'text-halo-blur': 1
            },
            'source-layer': 'country_label'
        }
    ],
    'created': '2015-09-20T20:50:36.934Z',
    'id': 'cieszaiux00knqam3b7444bmd',
    'modified': '2015-09-25T20:39:15.468Z',
    'owner': 'eczajk1',
    'draft': false
  });
