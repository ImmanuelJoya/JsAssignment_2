// Importing utility functions using ES6 module syntax
import { convertTemperature, generateRandomEmail, generateRandomPassword, welcomeMessage } from './utils.js';

// Main function to run the application
const runApp = () => {
    console.log("=== Running Functions ===");

    // First Function: Print a welcome message
    welcomeMessage("John", "Doe");

    // Second Function: Convert temperature
    // Generate a random number between -20 and 20 (Since its winter)
    const randomCelsius = Math.floor(Math.random() * 41) - 20;

    // Convert the random Celsius value to Fahrenheit using the imported function
    const fahrenheit = convertTemperature(randomCelsius);

    // Log the result
    console.log(`${randomCelsius}°C is equivalent to ${fahrenheit}°F`);

    const email = generateRandomEmail(12);
    console.log(`Generated Email: ${email}@gmail.com`);

    // Fourth Function: Generate a random password
    const password = generateRandomPassword(12); // Generate a 12-character password
    console.log(`Generated Password: ${password}`);

    console.log("=========================");
};

// Run the application
runApp();