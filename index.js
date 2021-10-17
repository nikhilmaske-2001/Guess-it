let randomNumber;
let selectedNumber;
let score = 0;

const generateRandomNumber = () => {
  // Generated any random number from 0 to 1
  let random = Math.random();

  // Generate any random number from 1 to 6 inclusive
  randomNumber = Math.floor(random * 6 + 1);
};

// All event handlers goes here
$("button").click(function () {
  $(".timer").hide();
  $(this).css("background-color", "grey");
  selectedNumber = $(this).val();
  document.getElementById("selected").innerHTML = selectedNumber;
  generateRandomNumber();
  if (selectedNumber == randomNumber) {
    $(".win").show();
    score++;
    document.getElementById("score").innerHTML = score;
  } else {
    $(".lose").show();
  }
  setInterval(() => {
    $(this).css("background-color", "transparent");
    $(".win").hide();
    $(".lose").hide();
  }, 3000);
  waitFor3Seconds();
});

// Function to wait for 3 seconds
const waitFor3Seconds = () => {
  $(".timer").show();
  setTimeout(function () {
    $(".timer").hide();
  }, 6000);
};

// Things happen only first time when page is loading
$(".loading").show();
setTimeout(function () {
  $(".loading").hide();
  waitFor3Seconds();
}, 3000);
