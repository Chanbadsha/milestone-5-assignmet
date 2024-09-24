function showHistory(id, fundName) {
  const fundNameS = document.getElementById(fundName).innerText;
  const div = document.createElement("div");
  const currentDate = new Date();
  const inputNumber = getInputfieldValueById(id);
  div.innerHTML = `
     <div class="text_div flex flex-col gap-2 my-2 border-2 p-4">
      <h2 id="history-amount" class="font-bold md:text-xl">Donation Amount : ${inputNumber}Tk</h2>
       <h2 id="history-fund" class="font-bold md:text-xl ">Donation Fund: ${fundNameS} </h2>
     <p id="history-date" class="">${currentDate}</p>
    </div>
    `;

  document.getElementById("show-history").appendChild(div);
}
