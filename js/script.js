var wrapper = document.querySelector(".wrapper");
var radio_1 = document.getElementById("radio-1");
var radio_2 = document.getElementById("radio-2");
var radio_3 = document.getElementById("radio-3");

radio_1.addEventListener("change", function() {
  wrapper.classList.remove("background-slide-2");
  wrapper.classList.remove("background-slide-3");
  wrapper.classList.add("background-slide-1");
})

radio_2.addEventListener("change", function() {
  wrapper.classList.remove("background-slide-1");
  wrapper.classList.remove("background-slide-3");
  wrapper.classList.add("background-slide-2");
})

radio_3.addEventListener("change", function() {
  wrapper.classList.remove("background-slide-1");
  wrapper.classList.remove("background-slide-2");
  wrapper.classList.add("background-slide-3");
})

var feedback_open = document.querySelector(".button-feedback");
var feedback = document.querySelector(".feedback-box");
var feedback_overlay = document.querySelector(".feedback-overlay");
var feedback_close = feedback.querySelector(".feedback-box-close");
var feedback_form = feedback.querySelector("form");
var feedback_name = feedback.querySelector("[name=name-feedback]");
var feedback_email = feedback.querySelector("[name=email-feedback]");
var feedback_commentary = feedback.querySelector("[name=commentary-feedback]");

feedback_open.addEventListener("click", function(e) {
  e.preventDefault();
  feedback.classList.add("feedback-box-show");
  feedback_overlay.classList.add("feedback-overlay-show");
  feedback_name.focus();
})

feedback_close.addEventListener("click", function(e) {
  e.preventDefault();
  feedback.classList.remove("feedback-box-show");
  feedback_overlay.classList.remove("feedback-overlay-show");
  feedback.classList.remove("feedback-box-error");
})

feedback_overlay.addEventListener("click", function() {  
  feedback.classList.remove("feedback-box-show");
  feedback_overlay.classList.remove("feedback-overlay-show");
  feedback.classList.remove("feedback-box-error");
})

feedback_form.addEventListener("submit", function(e) {
  if (!feedback_name.value || !feedback_email.value || !feedback_commentary.value) {
    e.preventDefault();
    feedback.classList.remove("feedback-box-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-box-error");
  }
})