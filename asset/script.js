document.addEventListener("DOMContentLoaded", function() {
    // Get all foldable headers
    const headers = document.querySelectorAll('.foldable-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = header.nextElementSibling; // The corresponding foldable content
            // Toggle the display of the foldable content
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
