// Section Two
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("noakhali-donate-input");
    const totalBalance = getTextfieldValueById("primary_money");
    if (totalBalance === 0) {
      alert("You don't have enough balance to donate.");
      return;
    } else if (inputBalance > totalBalance) {
      alert(
        `Your donation amount must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (inputBalance == " ") {
      alert("Please write donation amount");
    } else if (!isNaN(inputBalance) && inputBalance !== 0) {
      const individualBalance = getTextfieldValueById("noakhali-total-donate");
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primary_money").innerText = newTotalBalance;
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("noakhali-total-donate").innerText =
        newIndividualBalance;

      showHistory("noakhali-donate-input", "noa");

      /**
       * ! Modal section
       */
      my_modal_1.showModal();
      document.getElementById(
        "modalInput"
      ).innerText = `You have succsefully ৳${inputBalance} ${
        document.getElementById("noa").innerText
      }`;
    } else {
      alert("Your donation amount is not valid");
    }
    document.getElementById("noakhali-donate-input").value = "";
  });

// Section Two
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("feni-donate-input");
    const totalBalance = getTextfieldValueById("primary_money");

    if (totalBalance === 0) {
      alert("You don't have enough balance to donate.");
      return;
    } else if (inputBalance == " ") {
      alert("Please write donation amount");
    } else if (inputBalance > totalBalance) {
      alert(
        `Your donation amount must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (!isNaN(inputBalance) && inputBalance !== 0) {
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primary_money").innerText = newTotalBalance;

      const individualBalance = getTextfieldValueById("feni-total-donate");
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("feni-total-donate").innerText =
        newIndividualBalance;

      showHistory("feni-donate-input", "feni");
      /**
       * ! Modal section
       */
      my_modal_1.showModal();
      document.getElementById(
        "modalInput"
      ).innerText = `You have succsefully ৳${inputBalance} ${
        document.getElementById("feni").innerText
      }`;
    } else {
      alert("Your donation amount is not valid");
    }
    document.getElementById("feni-donate-input").value = "";
  });

// Section Three
document
  .getElementById("qouta-donate-btn")
  .addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("qouta-donate-input");
    const totalBalance = getTextfieldValueById("primary_money");

    if (totalBalance === 0) {
      alert("You don't have enough balance to donate.");
      return;
    } else if (inputBalance == " ") {
      alert("Please write donation amount");
    } else if (inputBalance > totalBalance) {
      alert(
        `Your donation amount must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (!isNaN(inputBalance) && inputBalance !== 0) {
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primary_money").innerText = newTotalBalance;

      const individualBalance = getTextfieldValueById("quota-total-donate");
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("quota-total-donate").innerText =
        newIndividualBalance;
      // fundNames();
      // history("qouta-donate-input");
      showHistory("qouta-donate-input", "qouta");
      /**
       * ! Modal section
       */
      my_modal_1.showModal();
      document.getElementById(
        "modalInput"
      ).innerText = `You have succsefully donate ৳${inputBalance} ${
        document.getElementById("qouta").innerText
      }`;
    } else {
      alert("Your donation amount is not valid");
    }
    document.getElementById("qouta-donate-input").value = "";
  });
