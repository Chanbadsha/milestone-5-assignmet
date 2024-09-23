function getTextfieldValueById(id){
   const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue)
    return textNumber
}
function getInputfieldValueById(id){
   const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}

document.getElementById("noakhali-donate-btn").addEventListener("click", function(){
    console.log(getInputfieldValueById("noakhali-donate-input"));
});