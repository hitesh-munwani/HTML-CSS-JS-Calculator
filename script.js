// Select all buttons with class 'n'
let answerButtons = document.querySelectorAll('.n');

// Add a click event listener to each button
answerButtons.forEach(button => {
    button.addEventListener('click', checkAnswer);
});

// Define the click event handler
function checkAnswer(event) {
    // Check if the clicked button has the class 'correct'
    if (event.target.classList.contains('correct')) {
        event.target.style.backgroundColor = 'green';
    } else {
        // Reset the background color of all buttons
       
            event.target.style.backgroundColor = 'blue';
       
    }
}