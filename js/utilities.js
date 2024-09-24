function getTextfieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);

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
document
  .getElementById("history-id")
  .addEventListener("click", function (event) {
    event.preventDefault();
    makeBtnactive("history-id");
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
  });

document
  .getElementById("donation-id")
  .addEventListener("click", function (event) {
    event.preventDefault();
    makeBtnactive("donation-id");
    document.getElementById("donation-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
  });


document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});



