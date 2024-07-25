const dodgeButton = document.getElementById('dodgeButton');
const yesButton = document.getElementById('yesButton');
const messageDiv = document.getElementById('message');

function dodgeButtonHandler() {
    const container = dodgeButton.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = dodgeButton.getBoundingClientRect();

    // Calculate new position for the button
    let newLeft = Math.random() * (containerRect.width - buttonRect.width);
    let newTop = Math.random() * (containerRect.height - buttonRect.height);

    // Ensure the button stays within the container boundaries
    if (newLeft + buttonRect.width > containerRect.width) {
        newLeft = containerRect.width - buttonRect.width;
    }
    if (newTop + buttonRect.height > containerRect.height) {
        newTop = containerRect.height - buttonRect.height;
    }

    dodgeButton.style.left = `${newLeft}px`;
    dodgeButton.style.top = `${newTop}px`;
}

function yesButtonHandler() {
    messageDiv.textContent = "I love you too";
}

dodgeButton.addEventListener('mouseover', dodgeButtonHandler);
dodgeButton.addEventListener('touchstart', dodgeButtonHandler);
yesButton.addEventListener('click', yesButtonHandler);
