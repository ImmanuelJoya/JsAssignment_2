// Importing utility functions using ES6 module syntax
import { calculateArea, convertTemperature, generateRandomPassword, welcomeMessage } from './utils.js';

// Main function to run the application
const runApp = () => {
    console.log("=== Running Functions ===");

    // First Function: Print a welcome message
    welcomeMessage("John", "Doe");

    // Second Function: Convert temperature
    const fahrenheit = convertTemperature(25); // Convert 25°C to Fahrenheit
    console.log(`25°C is equivalent to ${fahrenheit}°F`);

    // Third Function: Calculate area of a rectangle
    const area = calculateArea(10, 5); // Calculate area with length=10 and width=5
    console.log(`The area of the rectangle is ${area}`);

    // Fourth Function: Generate a random password
    const password = generateRandomPassword(12); // Generate a 12-character password
    console.log(`Generated Password: ${password}`);
};

// Run the application
runApp();