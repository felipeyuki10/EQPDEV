const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', () => {
  // Redireciona para o dashboard
  window.location.href = "dashboard.html"; 
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = "chamado1.html"; // redireciona
    });
  });
});
