function convertTemperature() {
  const tempInput = document.getElementById("temperature").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const result = document.getElementById("result");

  if (tempInput === "" || isNaN(tempInput)) {
    result.innerText = "Please enter a valid number!";
    return;
  }

  const temp = parseFloat(tempInput);
  let converted;
  let unitLabel;

  if (unit === "celsius") {
    converted = (temp * 9 / 5) + 32;
    unitLabel = "Fahrenheit";
  } else {
    converted = (temp - 32) * 5 / 9;
    unitLabel = "Celsius";
  }

  result.innerText = `Converted Temperature: ${converted.toFixed(2)} °${unitLabel}`;
}
