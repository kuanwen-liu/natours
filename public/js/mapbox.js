/* eslint-disable */
console.log('Heyyyyyy Bonnie!!!!!!!!!!!');

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibGl1OTY1ODkxIiwiYSI6ImNrZmFqZDV6ajB3aWwyeXJxcHIxaGRwbjMifQ.0FTPYfhx131KsNCVvM5ZnQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/liu965891/ckfak7u141prf19s1ujoqpf8i',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
    //   zoom: 4,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      right: 100,
      left: 100,
    },
  });
};
