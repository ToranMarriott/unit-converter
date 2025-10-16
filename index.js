const lengthConversion = 3.281
const volumeConversion = 0.264
const massConversion = 2.204
const inputBox = document.getElementById("to-convert")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

convertBtn.addEventListener("click", function() {
    convert()
})

function convert() {
    lengthOutput.innerHTML = `${inputBox.value} Meters = ${parseFloat(inputBox.value*lengthConversion).toFixed(3)} Feet <br> ${inputBox.value} Feet = ${parseFloat(inputBox.value/lengthConversion).toFixed(3)} Meters`
    volumeOutput.innerHTML = `${inputBox.value} Liters = ${parseFloat(inputBox.value*volumeConversion).toFixed(3)} Gallons <br> ${inputBox.value} Gallons = ${parseFloat(inputBox.value/volumeConversion).toFixed(3)} Liters`
    massOutput.innerHTML = `${inputBox.value} Kilograms = ${parseFloat(inputBox.value*massConversion).toFixed(3)} Pounds <br> ${inputBox.value} Pounds = ${parseFloat(inputBox.value/massConversion).toFixed(3)} Kilograms`
}