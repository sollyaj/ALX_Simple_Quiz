// Define the checkAnswer function
function checkAnswer() {
    const correctAnswer = "4"; // The correct answer

    // Get the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if the user selected an answer
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Get the feedback paragraph
        const feedback = document.getElementById("feedback");

        // Compare answers and display result
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the Submit Answer button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
