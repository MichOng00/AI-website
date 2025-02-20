// Initialize temperature data and chart
const temperatureData = [0.5, 0.6, 0.7, 0.8, 1.1, 1.2, 1.5]; // Simulated data for global temperature change (°C)
const emissionsData = [34.2, 35.3, 36.5, 37.1, 38.3, 39.0, 39.5]; // Simulated data for carbon emissions (GtCO2)

const tempLabels = ['2000', '2005', '2010', '2015', '2020', '2025', '2030']; // Years for the data
const emissionsLabels = ['2000', '2005', '2010', '2015', '2020', '2025', '2030']; // Years for emissions

// Temperature Chart
const tempCtx = document.getElementById('tempChart').getContext('2d');
const tempChart = new Chart(tempCtx, {
    type: 'line',
    data: {
        labels: tempLabels,
        datasets: [{
            label: 'Global Temperature Change (°C)',
            data: temperatureData,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Global Temperature Change Over Time'
        }
    }
});

// Emissions Chart
const emissionsCtx = document.getElementById('emissionsChart').getContext('2d');
const emissionsChart = new Chart(emissionsCtx, {
    type: 'line',
    data: {
        labels: emissionsLabels,
        datasets: [{
            label: 'Carbon Emissions (GtCO2)',
            data: emissionsData,
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Global Carbon Emissions Over Time'
        }
    }
});

// Description Updates (simulated)
document.getElementById('temp-description').textContent = 'This graph shows the global temperature trend over the last few decades.';
document.getElementById('emissions-description').textContent = 'This graph shows the carbon emissions data over the past years.';
