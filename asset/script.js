// Load header dynamically
fetch('/barng.github.io/asset/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data)
    .catch(error => console.error('Error loading the header:', error));

fetch('/barng.github.io/asset/language_switcher.html')
    .then(response => response.text())
    .then(data => document.getElementById('language-switcher').innerHTML = data)
    .catch(error => console.error('Error loading the header:', error));

// Foldable
document.addEventListener('DOMContentLoaded', function() {
    // Find all the foldable headers
    const foldableHeaders = document.querySelectorAll('.foldable-header');
    
    foldableHeaders.forEach(header => {
        // Add a click event listener to each header
        header.addEventListener('click', function() {
        // Toggle the 'active' class on the header
        this.classList.toggle('active');
    
        // Get the content element, which is the next element sibling
        const content = this.nextElementSibling;
    
        // Check if the content is currently shown or hidden and toggle it
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
        });
    });
    });