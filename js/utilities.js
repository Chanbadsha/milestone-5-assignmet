function getTextfieldValueById(id){
   const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue)
    console.log(typeof textNumber);
    return textNumber
}
function getInputfieldValueById(id){
   const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}

