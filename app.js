const resetButton = document.getElementById("reset-button")
const billInput = document.getElementById("billInput")
const numberOfPeople = document.getElementById("numberOfPeople")
const tipPercent = document.getElementById("tipPercent")
const totalCost = document.getElementById("totalCost")
const perPersonTotal = document.getElementById("perPersonTotal")

const calculate = () => {
    const bill = Number(billInput.value)
    const numberOfPeoples  = Number(numberOfPeople.value)
    const percent = Number(tipPercent.value) / 100
    const tipCost = bill * percent
    const total = tipCost + bill
    const totalPerPeople = total / numberOfPeoples
    
    totalCost.innerText = `${total.toFixed(2)}`
    perPersonTotal.innerText = `${totalPerPeople.toFixed(2)}`
}

const reset = () => {
    billInput.value="";
    numberOfPeople.value="";
    tipPercent.value="";
    totalCost.innerText="0.00";
    perPersonTotal.innerText="0.00";
}

