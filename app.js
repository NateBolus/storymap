// Initialize Leaflet Map
const map = L.map('map').setView([5.65107, -0.183195], 17); // Center on UG Dept. Geography

// Add Tile Layers
const satellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});

const hotOSM = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; OpenStreetMap contributors, HOT',
});

satellite.addTo(map);

// Toggle base layers
const baseMaps = {
  "Google Satellite": satellite,
  "Humanitarian OSM": hotOSM
};

L.control.layers(baseMaps).addTo(map);

// Sample popup
L.marker([5.65107, -0.183195]).addTo(map)
  .bindPopup('Department of Geography & Resource Development')
  .openPopup();

// Example code to load GeoJSON  
L.geoJSON(data, {  
  onEachFeature: function (feature, layer) {  
    layer.bindPopup(`<h3>${feature.properties.name}</h3><img src="${feature.properties.photo}" width="100">`);  
  }  
}).addTo(map);  

// Search Functionality (Stub)
document.getElementById('searchBox').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  
  // Mock search results
  if (query.includes('hod')) {
    resultsDiv.innerHTML = `
      <div><strong>Dr. John Doe</strong><br/>Head of Department<br/>Office: Room 12</div>
    `;
  } else {
    resultsDiv.innerHTML = '';
  }
});
