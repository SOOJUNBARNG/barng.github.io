// Load header dynamically
fetch('/barng.github.io/asset/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data)
    .catch(error => console.error('Error loading the header:', error));

fetch('/barng.github.io/asset/language_switcher.html')
.then(response => response.text())
.then(data => document.getElementById('language-switcher').innerHTML = data)
.catch(error => console.error('Error loading the header:', error));