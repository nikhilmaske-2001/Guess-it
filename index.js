let randomNumber;

let selectedNumber;

const generateRandomNumber = () => {
  // Generated any random number from 0 to 1
  let random = Math.random();

  // Generate any random number from 1 to 6 inclusive
  randomNumber = Math.floor(random * 6 + 1);
};

// All event handlers goes here

$("button").click(function () {
  $(this).css("background-color", "grey");
  selectedNumber = $(this).val();
  document.getElementById("selected").innerHTML = selectedNumber;
  generateRandomNumber();
  if (selectedNumber == randomNumber) {
    $(".win").removeClass("hide");
  } else {
    $(".lose").removeClass("hide");
  }
  setInterval(() => {
    $(this).css("background-color", "transparent");
  }, 2000);
});
