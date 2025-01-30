const lengthInput = document.getElementById('length');
const lowercaseCheck = document.getElementById('lowercase');
const uppercaseCheck = document.getElementById('uppercase');
const numbersCheck = document.getElementById('numbers');
const specialCheck = document.getElementById('special');
const generateButton = document.getElementById('generate');
const passwordField = document.getElementById('password');
const copyButton = document.getElementById('copy');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?/';

function generatePassword() {
    let allChars = '';
    let password = '';
    if (lowercaseCheck.checked) allChars += lowercaseChars;
    if (uppercaseCheck.checked) allChars += uppercaseChars;
    if (numbersCheck.checked) allChars += numberChars;
    if (specialCheck.checked) allChars += specialChars;

    if (allChars.length === 0) {
        alert('Please select at least one character type!');
        return;
    }

    const length = parseInt(lengthInput.value);
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    passwordField.value = password;
}

generateButton.addEventListener('click', generatePassword);

copyButton.addEventListener('click', () => {
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
