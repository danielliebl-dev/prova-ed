document.addEventListener("DOMContentLoaded", () => {
  // Insere a data de hoje formatada automaticamente
  const dateElement = document.getElementById("current-date");
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = today.toLocaleDateString('pt-BR', options);

  // Contador de curtidas interativo
  const likeBtn = document.getElementById("like-btn");
  const likeCountElement = document.getElementById("like-count");
  let likes = 0;

  likeBtn.addEventListener("click", () => {
    likes++;
    likeCountElement.textContent = likes;
  });
});
