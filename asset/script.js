// 折りたたみ可能状態
document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll('.foldable-header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = header.nextElementSibling;
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
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