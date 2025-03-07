document.addEventListener('DOMContentLoaded', function() {
    // Sample data for charts
    const emissionsData = {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'CO2 Emissions (in million tons)',
            data: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const impactData = {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Environmental Impact Score',
            data: [70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    // Render charts
    new Chart(document.getElementById('emissionsCanvas'), {
        type: 'line',
        data: emissionsData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Carbon Emissions Over Time'
                }
            }
        }
    });

    new Chart(document.getElementById('impactCanvas'), {
        type: 'bar',
        data: impactData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Environmental Impact Analysis'
                }
            }
        }
    });

    // Play/Pause background music on button click
    const playPauseButton = document.getElementById('play-pause-music');
    const backgroundMusic = document.getElementById('background-music');

    playPauseButton.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play().then(() => {
                playPauseButton.textContent = 'Pause Music';
            }).catch(error => {
                console.error('Playback failed:', error);
            });
        } else {
            backgroundMusic.pause();
            playPauseButton.textContent = 'Play Music';
        }
    });
});
