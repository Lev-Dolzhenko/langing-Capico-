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
