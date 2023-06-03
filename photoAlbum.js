$(document).ready(function () {
  const preloader = document.getElementById("preloader");
  const preloaderText = document.getElementById("preloader-text");
  let textToType = "Knock Knock !!! Whats Here ?";
  const typingDelay = 100;
  const fadeOutDelay = 2000;
  let  charIndex= 0;
  let times = 1;

  
  function typeText() {
    preloaderText.textContent = textToType.slice(0, charIndex);
    charIndex++;
    if (charIndex <= textToType.length) {
      setTimeout(typeText, typingDelay);
    } else {
      if (times == 1)  $("#gift-box-div").show();
      else if (times == 2)  {
        $("#gift-box-div-bigger").show();
        window.scrollTo({
          top: 0,
        });
      };
    }
  }

  function fadeOutPreloader() {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }
  typeText(times);

  $("#gift-box-image").click(() => {
    times ++;
    charIndex = 0;
    preloaderText.textContent = "";
    $("#gift-box-div").hide();
    textToType = "Happy Birthday !!! And A Much Bigger Gift This Time !!!!"
    typeText();
  });
  $("#gift-box-image-bigger").click(() => {
    fadeOutPreloader();
  });
});
