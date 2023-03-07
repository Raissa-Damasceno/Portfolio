import projects from "./projects.json" assert { type: "json" };

const projectsCards = document.getElementById("projectscard");

// Display Card

const createCard = (id, image, name, description, repo, alive) => {
  const cardHtml = `<div class="swiper-slide card" id=${id}>
  <img src=${image} class="card-img-top" alt="no conection">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <a href=${repo} class="btn btn-primary">Repo</a>
      <a href=${alive} class="btn btn-primary">Alive</a>
    </div>   
  </div>`;
  return cardHtml;
};

let displayCard = "";

projects.map((el) => {
  displayCard += createCard(
    el.id,
    el.image,
    el.name,
    el.description,
    el.repositorio,
    el.alive
  );
});

projectsCards.innerHTML = displayCard;

// Scroll Card

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});