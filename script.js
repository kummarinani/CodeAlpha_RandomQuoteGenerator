const quotes = [
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        text: "Small progress is still progress.",
        author: "Unknown"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("newQuoteBtn");

let previousIndex = -1;

function generateQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes.length > 1 && randomIndex === previousIndex);

    previousIndex = randomIndex;

    quoteElement.textContent = quotes[randomIndex].text;
    authorElement.textContent = "— " + quotes[randomIndex].author;
}

button.addEventListener("click", generateQuote);

// Display a random quote when the app opens.
generateQuote();