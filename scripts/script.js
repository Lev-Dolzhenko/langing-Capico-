const infoButton = document.querySelector(".info__button");

const infoButtonCircle = document.querySelector(".info__button_circle");
const infoButtonArrow = document.querySelector(".info__button_arrow");

infoButton.addEventListener("mouseover", () => {
  infoButtonArrow.classList.remove("arrowAnimationHeaderButtonReverse");
  infoButtonArrow.classList.add("arrowAnimationHeaderButton");
});

infoButton.addEventListener("mouseout", () => {
  infoButtonArrow.classList.remove("arrowAnimationHeaderButton");
  infoButtonArrow.classList.add("arrowAnimationHeaderButtonReverse");
});

infoButton.addEventListener("mouseover", () => {
  infoButtonCircle.classList.remove("circleAnimationHeaderReverse");
  infoButtonCircle.classList.add("circleAnimationHeaderButtom");
});

infoButton.addEventListener("mouseleave", () => {
  infoButtonCircle.classList.remove("circleAnimationHeaderButtom");
  infoButtonCircle.classList.add("circleAnimationHeaderReverse");
});
