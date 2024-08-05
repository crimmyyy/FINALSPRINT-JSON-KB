document.addEventListener('DOMContentLoaded', function () {
    fetch('savedata.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response is poor. Please try again. ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayData(data);
            displayGameTitles(data);
            displayPlayerNames(data);
            displaySaveDates(data);
        })
        .catch(error => console.error('Error fetching "savedata.json":', error));
});

function displayData(data) {
    const contentDiv = document.getElementById('content');
    data.forEach(record => {
        const recordDiv = document.createElement('div');
        recordDiv.textContent = `Player: ${record.playerName}, Game: ${record.gameTitle}, Save Date: ${record.saveDate}`;
        contentDiv.appendChild(recordDiv);
    });
}

function displayGameTitles(data) {
    console.log('Game Titles:');
    data.forEach(record => {
        console.log(record.gameTitle);
    });
}

function displayPlayerNames(data) {
    console.log('Player Names:');
    data.forEach(record => {
        console.log(record.playerName);
    });
}

function displaySaveDates(data) {
    console.log('Save Dates (from top to bottom of the list):');
    data.forEach(record => {
        console.log(record.saveDate);
    });
}