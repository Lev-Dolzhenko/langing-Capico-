//header

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

//manage

const videoManage = document.querySelector(".manage__video");
const buttonManage = document.querySelector(".manage__button");
const manageFrame = document.querySelector(".manage__frame");
const overlayVideo = document.querySelector(".overlay_video");

buttonManage.addEventListener("click", function (event) {
  event.stopPropagation();
  manageFrame.classList.remove("manageFrameAnimationReverse");
  overlayVideo.classList.remove("overlayVideoReverse");
  manageFrame.classList.add("manageFrameAnimation");
  overlayVideo.classList.add("overlayVideo");
});

const handleClickOutside = (event) => {
  if (manageFrame.classList.contains("manageFrameAnimation")) {
    if (
      manageFrame &&
      !manageFrame.contains(event.target) &&
      event.target !== buttonManage
    ) {
      manageFrame.classList.remove("manageFrameAnimation");
      overlayVideo.classList.remove("overlayVideo");
      manageFrame.classList.add("manageFrameAnimationReverse");
      overlayVideo.classList.add("overlayVideoReverse");
      console.log("not elem");
    }
  }
};

document.addEventListener("click", handleClickOutside);

buttonManage.addEventListener("mouseover", () => {
  videoManage.classList.remove("manageVideoAnimationReverse");
  videoManage.classList.add("manageVideoAnimation");
});

buttonManage.addEventListener("mouseleave", () => {
  videoManage.classList.remove("manageVideoAnimation");
  videoManage.classList.add("manageVideoAnimationReverse");
});

//test

const testButton = document.querySelector(".test__button");
const testButtonCircle = document.querySelector(".test__button-circle");
const testButtonArrow = document.querySelector(".test__button_arrow");

testButton.addEventListener("mouseover", () => {
  testButtonCircle.classList.remove("createCircleAnimationReverse");
  testButtonCircle.classList.add("createCircleAnimation");
});

testButton.addEventListener("mouseleave", () => {
  testButtonCircle.classList.remove("createCircleAnimation");
  testButtonCircle.classList.add("createCircleAnimationReverse");
});

testButton.addEventListener("mouseover", () => {
  testButtonArrow.classList.remove("createArrowAnimationReverse");
  testButtonArrow.classList.add("createArrowAnimation");
});

testButton.addEventListener("mouseleave", () => {
  testButtonArrow.classList.remove("createArrowAnimation");
  testButtonArrow.classList.add("createArrowAnimationReverse");
});

//trade

const tradeButton = document.querySelector(".trade__button");
const tradeButtonCircle = document.querySelector(".trade__button-circle");
const tradeButtonArrow = document.querySelector(".trade__button_arrow");

tradeButton.addEventListener("mouseover", () => {
  tradeButtonCircle.classList.remove("createCircleAnimationReverse");
  tradeButtonCircle.classList.add("createCircleAnimation");
});

tradeButton.addEventListener("mouseleave", () => {
  tradeButtonCircle.classList.remove("createCircleAnimation");
  tradeButtonCircle.classList.add("createCircleAnimationReverse");
});

tradeButton.addEventListener("mouseover", () => {
  tradeButtonArrow.classList.remove("createArrowAnimationReverse");
  tradeButtonArrow.classList.add("createArrowAnimation");
});

tradeButton.addEventListener("mouseleave", () => {
  tradeButtonArrow.classList.remove("createArrowAnimation");
  tradeButtonArrow.classList.add("createArrowAnimationReverse");
});

//init swiper work

var swiper = new Swiper(".mySwiper_work", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next_work",
    prevEl: ".swiper-button-prev_work ",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

//init swiper benefits

var swiper = new Swiper(".mySwiper_benefits", {
  direction: "vertical",
  spaceBetween: "20px",
  loop: true,
  navigation: {
    nextEl: ".benefits__button_prev",
    prevEl: ".benefits__button_next",
  },
});
