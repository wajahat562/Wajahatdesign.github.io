/* Styling for a celebratory mood */
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Georgia', serif;
    text-align: center;
    background-color: #1a1a1a; /* Dark background */
    color: #ffffff; /* White text */
    overflow: hidden; /* Important for the confetti */
}

/* Container Styling */
.greeting-container {
    /* Ensures the text is on top of the confetti */
    z-index: 10;
    position: relative; 
    padding: 20px;
}

h1 {
    font-size: 5em;
    color: #ffcc00; /* Gold/Yellow color */
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); /* Subtle shadow */
    margin-bottom: 0.2em;
}

p {
    font-size: 1.5em;
    color: #eeeeee;
}
