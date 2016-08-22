var wrap = document.querySelector(".wrapper");

wrap.style.backgroundColor = "#849d8f";
wrap.style.backgroundImage = "radial-gradient(circle at 50% 15%, #cff6e1, #849d8f 530px)";

var radio_1 = document.getElementById("radio-1");
radio_1.onchange = function() {
  wrap.style.backgroundColor = "#849d8f";
  wrap.style.backgroundImage = "radial-gradient(circle at 50% 15%, #cff6e1, #849d8f 530px)";
};

var radio_2 = document.getElementById("radio-2");
radio_2.onchange = function() {
  wrap.style.backgroundColor = "#8996a6";
  wrap.style.backgroundImage = "radial-gradient(circle at 50% 15%, #d6ebfd, #8996a6 530px)";
};

var radio_3 = document.getElementById("radio-3");
radio_3.onchange = function() {
  wrap.style.backgroundColor = "#9d8b84";
  wrap.style.backgroundImage = "radial-gradient(circle at 50% 15%, #f9e4da, #9d8b84 530px)";
};
