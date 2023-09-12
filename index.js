class TemperatureConverter {
  constructor() {
    this.tempInput = document.getElementById("tempInput");
    this.selectUnit = document.getElementById("selectUnit");
    this.result = document.getElementById("result");
  }

  convertTemperature() {
    try {
      const temperature = Number(this.tempInput.value);
      const unit = this.selectUnit.value;

      if (isNaN(temperature)) {
        throw new Error(
          `${temperature} is not a number. PLease enter a number`
        );
      }

      let convertedTemp;
      switch (unit) {
        case "fahrenheit":
          convertedTemp = (temperature - 32) * (5 / 9);
          this.result.textContent = `Celsius: ${convertedTemp.toFixed(2)}°C`;
          break;
        case "celsius":
          convertedTemp = (temperature * 9) / 5 + 32;
          this.result.textContent = `Fahrenheit: ${convertedTemp.toFixed(2)}°F`;
          break;
        default:
          throw new Error("Invalid unit selection.");
      }
    } catch (error) {
      this.result.textContent = `Error: ${error.message}`;
    } finally {
      this.tempInput.value = "";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const converter = new TemperatureConverter();
  const convertButton = document.getElementById("convertButton");

  convertButton.addEventListener("click", function () {
    converter.convertTemperature();
  });
});
