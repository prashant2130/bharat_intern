const convertButton = document.getElementById("convert");
const celsiusInput = document.getElementById("celsius");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        resultElement.textContent = `${celsiusValue}°C is ${fahrenheitValue.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Please enter a valid temperature in Celsius.";
    }
});
