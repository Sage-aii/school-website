function generateText(elementId) {
    const textElement = document.getElementById(elementId);
    const interval = setInterval(() => {
        const newText = generateRandomText();
        textElement.value += newText + "\n";
        textElement.scrollTop = textElement.scrollHeight;
    }, 500); // Adjust the interval as needed

    // Optionally, clear the interval after a certain time
    setTimeout(() => {
        clearInterval(interval);
    }, 30000); // Adjust the timeout as needed
}

function generateRandomText() {
    // Generate random text using your preferred method
    const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
}

// Call the function for each text box
generateText("event-text");
generateText("news-text");
generateText("calendar-text");