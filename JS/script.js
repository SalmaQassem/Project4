const homePage = document.querySelector(".homepage");
const playButton = document.querySelector(".play-button");
const gamePage = document.querySelector(".game");
const cards = document.querySelectorAll(".card-wrapper");
playButton.addEventListener("click", () => {
  homePage.classList.add("hide");
  homePage.addEventListener("animationend", () => {
    homePage.classList.remove("hide");
    homePage.classList.add("hidden");
    cards.forEach((card) => {
      card.classList.add("show");
    });
    gamePage.classList.add("show");
  });
});
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    card.classList.add("is-flipped");
    const cardId = card.dataset.id;
    /*const icons = document.querySelectorAll(
      `.icons[data-id="${cardId}"] .icon`
    );
    icons.forEach((icon) => {
      icon.style.visibility = "visible";
      icon.classList.add("show");
      icon.addEventListener("animationend", () => {
        icon.classList.remove("show");
      });
    });*/
  });
});
