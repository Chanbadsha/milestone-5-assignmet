document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("noakhali-donate-input");
    const totalBalance = getTextfieldValueById("primary_money");
    if (inputBalance > totalBalance) {
      alert(
        `Your input balance must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (!isNaN(inputBalance)) {
      const individualBalance = getTextfieldValueById("noakhali-total-donate");
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primary_money").innerText = newTotalBalance;
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("noakhali-total-donate").innerText =
        newIndividualBalance;
    } else {
      alert("Your input number is not valid");
    }
    document.getElementById("noakhali-donate-input").value = "";
  });

document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("feni-donate-input");
    const totalBalance = getTextfieldValueById("primary_money");
    if (inputBalance > totalBalance) {
      alert(
        `Your input balance must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (!isNaN(inputBalance)) {
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primary_money").innerText = newTotalBalance;

      const individualBalance = getTextfieldValueById("feni-total-donate");
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("feni-total-donate").innerText =
        newIndividualBalance;
    } else {
      alert("Your input number is not valid");
    }
    document.getElementById("feni-donate-input").value = "";
  });
document
  .getElementById("qouta-donate-btn")
  .addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("qouta-donate-input");
    const totalBalance = getTextfieldValueById("primary_money");
    if (inputBalance > totalBalance) {
      alert(
        `Your input balance must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (!isNaN(inputBalance)) {
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primary_money").innerText = newTotalBalance;

      const individualBalance = getTextfieldValueById("qouta-total-donate");
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("qouta-total-donate").innerText =
        newIndividualBalance;
    } else {
      alert("Your input number is not valid");
    }
    document.getElementById("qouta-donate-input").value = "";
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("donation-id").focus();
});
