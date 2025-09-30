// Function to fire a burst of confetti
function fireConfetti() {
    confetti({
        particleCount: 100, // Number of pieces
        spread: 70,         // How wide the confetti spreads
        origin: { y: 0.6 } // Starts slightly above the center
    });
}

// Fire a single burst immediately on load
fireConfetti();

// Fire a burst repeatedly (every 3 seconds) for a continuous celebration
setInterval(fireConfetti, 3000);
