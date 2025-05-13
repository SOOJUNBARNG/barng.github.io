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
