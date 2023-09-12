# Temperature Converter Website

This is a simple website that allows you to convert temperatures between Fahrenheit and Celsius, by utilizing classes, switch statements, and try-catch-finally statements for temperature conversion and error handling.

## How to Use the Website

1. Open the `index.html` file in your web browser.
2. Enter a temperature value in the input field.
3. Select the desired unit (Fahrenheit or Celsius) from the dropdown.
4. Click the "Convert" button to see the converted temperature (or any error messages for invalid input).

## Code Walkthrough

### JavaScript Class

We've created a `TemperatureConverter` class in the `index.js` file to encapsulate the temperature conversion logic. This class has the following methods:

- **constructor():** Initializes the class by retrieving HTML elements.
- **convertTemperature():** Performs the temperature conversion and handles errors.

### Switch Statement

The `switch` statement inside the `convertTemperature` method is used to determine the selected temperature unit (Fahrenheit or Celsius) and perform the conversion accordingly. Depending on the unit, it calculates the converted temperature and displays it in the result paragraph.

```javascript
switch (unit) {
  case "fahrenheit":
    // Conversion formula for Fahrenheit to Celsius
    convertedTemp = (temperature - 32) * (5 / 9);
    this.result.textContent = `Celsius: ${convertedTemp.toFixed(2)}°C`;
    break;
  case "celsius":
    // Conversion formula for Celsius to Fahrenheit
    convertedTemp = (temperature * 9) / 5 + 32;
    this.result.textContent = `Fahrenheit: ${convertedTemp.toFixed(2)}°F`;
    break;
  default:
    throw new Error("Invalid unit selection.");
}
```

### Try-Catch-Finally

The error handling is implemented using `try-catch-finally`. If the user enters an invalid temperature value or selects an invalid unit, an error message is displayed. The `catch` block captures and displays the error message, while the `finally` block ensures that the input field is cleared, providing a clean interface for the next conversion.

```javascript
try {
  // ... The is pretty long
} catch (error) {
  this.result.textContent = `Error: ${error.message}`;
} finally {
  this.tempInput.value = "";
}
```

The Temperature Converter website is a user-friendly tool for quickly converting temperatures, and the code structure shows the use of classes, switch statements, and try-catch-finally statements for improved maintainability and error handling.
