function blink_text() {
  $(".note").fadeOut(500);
  $(".note").fadeIn(500);
}

setInterval(blink_text, 1000);
