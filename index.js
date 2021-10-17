let randomNumber;

const generateRandomNumber = () => {
  // Generated any random number from 0 to 1
  let random = Math.random();

  randomNumber = Math.floor(random * 6 + 1);
};

function blink_text() {
  $(".note").fadeOut(500);
  $(".note").fadeIn(500);
}

$(".generate-button").on("click", () => {
  generateRandomNumber();
  console.log(randomNumber);
});

setInterval(blink_text, 1000);
