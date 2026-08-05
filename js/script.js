function showDetail(title, description) {
  document.getElementById('animeModalLabel').innerText = title;
  document.getElementById('animeDetail').innerText = description;
}

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("modeIcon");

  body.classList.toggle("dark-mode");
  document.querySelectorAll('.card').forEach(card => {
    card.classList.toggle('dark-mode');
  });
  document.querySelector('footer').classList.toggle('bg-dark');
  document.querySelector('footer').classList.toggle('bg-light');

  const isDark = body.classList.contains("dark-mode");
  icon.src = isDark ? "img/moon.png" : "img/sun.png";
}

document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const cards = document.querySelectorAll(".anime-card");
  cards.forEach(card => {
    const title = card.querySelector(".card-title").innerText.toLowerCase();
    card.style.display = title.includes(keyword) ? "" : "none";
  });
});


