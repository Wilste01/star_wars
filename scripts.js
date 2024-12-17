const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
    target: 'https://api.tenor.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Ta bort /api från sökvägen
    },
}));

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});

const proxyUrl = 'http://localhost:3000/api/v1/search?q=';
const API_Key = "AIzaSyAM_c6Z1X52ppG7lHFPr87mr-oHpY09bjQ";
let history = JSON.parse(localStorage.getItem('gifHistory')) || [];

// Hämta GIF från Tenor baserat på användarens val
document.getElementById('getGifBtn').addEventListener('click', function() {
    const situation = document.getElementById('situation').value;
    const dramaMode = document.getElementById('dramaMode').checked;

    fetch(`${proxyUrl}${encodeURIComponent(situation)}&key=${API_Key}&limit=1`)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.results[0].media[0].gif.url;
            displayGif(gifUrl, dramaMode);
            saveToHistory(gifUrl, situation);
        })
        .catch(err => console.error('Error fetching GIF:', err));
});

// Visa GIF på sidan
function displayGif(gifUrl, dramaMode) {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = `<img src="${gifUrl}" alt="GIF">`;

    if (dramaMode) {
        gifContainer.querySelector('img').style.transform = 'scale(1.2)';
    }
}

// Spara GIF till historik
function saveToHistory(gifUrl, situation) {
    history.push({ gifUrl, situation });
    localStorage.setItem('gifHistory', JSON.stringify(history));
    updateHistory();
}

// Uppdatera historiklistan
function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.situation} - Klicka för att visa GIF`;
        listItem.addEventListener('click', () => displayGif(item.gifUrl, false));
        historyList.appendChild(listItem);
    });
}

// Rensa historik
document.getEl
