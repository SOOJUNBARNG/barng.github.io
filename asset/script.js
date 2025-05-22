// Load header dynamically
fetch('../asset/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data)
    .catch(error => console.error('Error loading the header:', error));

fetch('../asset/language_switcher.html')
.then(response => response.text())
.then(data => document.getElementById('language-switcher').innerHTML = data)
.catch(error => console.error('Error loading the header:', error));