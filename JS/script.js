const homePage = document.querySelector(".homepage");
const playButton = document.querySelector(".play-button");
const gamePage = document.querySelector(".game");
const cards = document.querySelectorAll(".card-wrapper");
const soundIcons = document.querySelectorAll(".icon.sound");
const recordIcons = document.querySelectorAll(".icon.speak");
const successModal = document.querySelector(".success-card");
const overlay = document.querySelector(".overlay");
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
    const icons = document.querySelectorAll(
      `.icons[data-id="${cardId}"] .icon`
    );
    icons.forEach((icon) => {
      icon.style.visibility = "visible";
      icon.classList.add("show");
      icon.addEventListener("animationend", () => {
        icon.classList.remove("show");
      });
    });
  });
});
soundIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("clicked");
    icon.addEventListener("animationend", () => {
      icon.classList.remove("clicked");
    });
  });
});
document.querySelector(".show-success").addEventListener("click", () => {
  successModal.classList.add("show");
  overlay.classList.add("show");
});
