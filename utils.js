// First Function: Welcome Message
export const welcomeMessage = (firstName, lastName) => {
    console.log(`Welcome ${firstName} ${lastName} to Georgian@Ilac College!`);
};

// Second Function: Convert Temperature (Celsius to Fahrenheit)
export const convertTemperature = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
};

// Third Function: Calculate Area of a Rectangle
export const calculateArea = (length, width) => {
    return length * width;
};

// Fourth Function: Generate Random Password
export const generateRandomPassword = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
};