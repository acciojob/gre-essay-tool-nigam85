//your code here
const evaluatedText = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

evaluatedText.addEventListener("input", countWords);

function countWords() {
    // Get the text from the textarea
    const text = evaluatedText.value.trim();

    // Split the text into words (by spaces) and filter out empty strings
    const words = text.split(/\s+/).filter(word => word !== '');

    // Update the word count in real-time
    wordCount.textContent = words.length;
}

// Initialize word count to 0
wordCount.textContent = "0";

