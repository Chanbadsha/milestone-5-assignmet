document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
 
    const inputBalance = getInputfieldValueById("noakhali-donate-input");
   
  
     const totalBalance = getTextfieldValueById("primary_money");
     const individualBalance = getTextfieldValueById("noakhali-total-donate");
     const newTotalBalance = totalBalance - inputBalance;
     document.getElementById("primary_money").innerText = newTotalBalance;
     const newIndividualBalance = individualBalance + inputBalance;
     document.getElementById("noakhali-total-donate").innerText =
       newIndividualBalance;
  
  });

document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const totalBalance = getTextfieldValueById("primary_money");
    const inputBalance = getInputfieldValueById("feni-donate-input");
    const newTotalBalance = totalBalance - inputBalance;
    document.getElementById("primary_money").innerText = newTotalBalance;

    const individualBalance = getTextfieldValueById("feni-total-donate");
    const newIndividualBalance = individualBalance + inputBalance;
    document.getElementById("feni-total-donate").innerText =
      newIndividualBalance;
  });
document
  .getElementById("qouta-donate-btn")
  .addEventListener("click", function () {
    const totalBalance = getTextfieldValueById("primary_money");
    const inputBalance = getInputfieldValueById("qouta-donate-input");
    const newTotalBalance = totalBalance - inputBalance;
    document.getElementById("primary_money").innerText = newTotalBalance;

    const individualBalance = getTextfieldValueById("qouta-total-donate");
    const newIndividualBalance = individualBalance + inputBalance;
    document.getElementById("qouta-total-donate").innerText =
      newIndividualBalance;
  });
