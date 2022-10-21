let input = document.getElementById("convertInput")
let convertButton = document.getElementById("convertButton")
let convertBoxUSD = document.getElementById("convertItemUSD")
let convertBoxEUR = document.getElementById("convertItemEUR")
let convertBoxUAH = document.getElementById("convertItemUAH")
let convertBoxILS = document.getElementById("convertItemILS")

convertButton.addEventListener("click", () => {

    let value = input.value 
    if (value === "") {
        alert("Введите конвертируемую сумму!")
        return
    }
   convertBoxUSD.value = (input.value / 61.5).toFixed(1)
   convertBoxEUR.value = (input.value / 60.4).toFixed(1)
   convertBoxUAH.value = (input.value / 1.6).toFixed(1)
   convertBoxILS.value = (input.value / 18.23).toFixed(1)
   
    
    

})