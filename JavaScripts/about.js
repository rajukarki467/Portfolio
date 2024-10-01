const roles = ["Computer Engineer", "Frontend Developer", "Backend Developer", "Fullstack Developer"];
let index = 0;
let currentText = "";
const textRoleElement = document.querySelector('.text-role');

function typeText(text, i = 0) {
    if (i < text.length) {
        currentText += text[i];
        textRoleElement.textContent = currentText;
        setTimeout(() => typeText(text, i + 1), 100); // Adjust typing speed here
    }
}

function eraseText(i) {
    if (i >= 0) {
        currentText = currentText.slice(0, i);
        textRoleElement.textContent = currentText;
        setTimeout(() => eraseText(i - 1), 100); // Adjust erasing speed here
    } else {
        // Start typing the next role after erasing
        index = (index + 1) % roles.length;
        setTimeout(() => typeText(roles[index]), 300);
    }
}

function showText() {
    // Start erasing the current text
    setTimeout(() => eraseText(currentText.length), 2000); // Wait 2 seconds before starting to erase
}

// Initialize by typing the first role
typeText(roles[index]);
// Repeat the cycle
setInterval(showText, 5000); // Adjust timing as needed
