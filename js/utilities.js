function getTextfieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  console.log(typeof textNumber);
  return textNumber;
}
function getInputfieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = Number(inputValue);
  return inputNumber;
}

function makeBtnactive(id) {
  const designBtn = document.getElementById(id);
  const historyBtn = document.getElementById("history-id");
  const donationBtn = document.getElementById("donation-id");
  historyBtn.classList.remove("bg-lime-400");
  donationBtn.classList.remove("bg-lime-400");
  designBtn.classList.add("bg-lime-400");
}
document.getElementById("donation-id").addEventListener("click", function () {
  makeBtnactive("donation-id");
});
document.getElementById("history-id").addEventListener("click", function () {
  makeBtnactive("history-id");
});
