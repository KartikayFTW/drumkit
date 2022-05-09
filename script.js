"use strict";

window.addEventListener("keydown", function (e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(data);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  const removeTransition = function (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  };
  const keys = this.document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
});
