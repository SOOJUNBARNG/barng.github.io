// 折りたたみ可能状態
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".foldable-header");
    headers.forEach(header => {
        header.style.cursor = "pointer";
        header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        if (content && content.classList.contains("foldable-content")) {
            content.style.display = content.style.display === "none" ? "block" : "none";
        }
        });

        // Optionally hide all content by default
        const content = header.nextElementSibling;
        if (content && content.classList.contains("foldable-content")) {
        content.style.display = "none";
        }
    });
});

// Load header dynamically
fetch('../asset/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data)
    .catch(error => console.error('Error loading the header:', error));

fetch('../asset/language_switcher.html')
.then(response => response.text())
.then(data => document.getElementById('language-switcher').innerHTML = data)
.catch(error => console.error('Error loading the header:', error));