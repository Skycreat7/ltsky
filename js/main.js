const path = require('path');
const express = require('express');
const app = express();

app.use('', express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    console.log('/ ->>');
    return response.sendFile('index.html', {
        root: '.',
    });
});

app.get('/auth/discord', (request, response) => {
    console.log('/auth/discord');
    return response.sendFile('dashboard.html', {
        root: '.',
    });
});

const port = '53134';
app.listen(port, () => console.log(`App listening at port: ${port}`));

document.addEventListener('DOMContentLoaded', function () {
    const profile = document.querySelector('.profile');
    const dropdown = document.querySelector('.profile-dropdown');

    profile.addEventListener('click', function (event) {
        event.stopPropagation();
        if (!dropdown.contains(event.target)) {
            dropdown.classList.toggle('active');
        }
    });

    document.addEventListener('click', function (event) {
        if (!profile.contains(event.target) && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
    });
});
