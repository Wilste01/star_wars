// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Lightsaber Game Elements
    const lightsaberButton = document.getElementById("lightsaber-button");
    const lightsaber = document.getElementById("lightsaber");

    let isActivated = false;

    // Lightsaber Activation
    lightsaberButton.addEventListener("click", () => {
        if (!isActivated) {
            lightsaber.style.height = "300px";
            lightsaberButton.textContent = "Deactivate Lightsaber";
            lightsaber.style.boxShadow = "0 0 20px #00ff00";
            playSound("sounds/lightsaber-on.mp3");
        } else {
            lightsaber.style.height = "0";
            lightsaberButton.textContent = "Activate Lightsaber";
            playSound("sounds/lightsaber-off.mp3");
        }
        isActivated = !isActivated;
    });

    // Sound Effect Helper
    function playSound(src) {
        const audio = new Audio(src);
        audio.play();
    }

    // Add Floating Text Effect
    const floatingText = document.createElement("div");
    floatingText.textContent = "May the Force be with you!";
    floatingText.style.position = "fixed";
    floatingText.style.top = "50%";
    floatingText.style.left = "50%";
    floatingText.style.transform = "translate(-50%, -50%)";
    floatingText.style.fontSize = "2rem";
    floatingText.style.color = "#ff00ff";
    floatingText.style.animation = "float 5s infinite alternate";
    document.body.appendChild(floatingText);

    // Random Floating Objects
    const createFloatingObject = () => {
        const object = document.createElement("div");
        object.classList.add("floating-object");
        object.textContent = "★";
        object.style.position = "absolute";
        object.style.left = Math.random() * 100 + "%";
        object.style.top = Math.random() * 100 + "%";
        object.style.fontSize = "2rem";
        object.style.color = ["#ff0000", "#00ff00", "#0000ff"][Math.floor(Math.random() * 3)];
        object.style.animation = `move ${Math.random() * 5 + 3}s infinite alternate`;
        document.body.appendChild(object);
    };

    for (let i = 0; i < 50; i++) {
        createFloatingObject();
    }

    // Lightsaber Duel Minigame (Simple Click Battle)
    const duelButton = document.createElement("button");
    duelButton.textContent = "Start Duel!";
    duelButton.style.position = "fixed";
    duelButton.style.bottom = "20px";
    duelButton.style.right = "20px";
    duelButton.style.padding = "10px 20px";
    duelButton.style.fontSize = "1.2rem";
    duelButton.style.cursor = "pointer";
    duelButton.style.backgroundColor = "#ff0000";
    duelButton.style.color = "#ffffff";
    duelButton.style.border = "2px solid #ffff00";
    document.body.appendChild(duelButton);

    duelButton.addEventListener("click", () => {
        let playerScore = 0;
        let opponentScore = 0;

        const duelInterval = setInterval(() => {
            const playerHit = Math.random() > 0.5;
            const opponentHit = Math.random() > 0.5;

            if (playerHit) playerScore++;
            if (opponentHit) opponentScore++;

            if (playerScore >= 10 || opponentScore >= 10) {
                clearInterval(duelInterval);
                alert(playerScore >= 10 ? "You Win!" : "You Lose!");
            }
        }, 500);
    });

    // Additional Random Interactions for Star Wars Elements
    const createStarWarsQuote = () => {
        const quotes = [
            "Do or do not. There is no try.",
            "I am your father!",
            "The Force will be with you. Always.",
            "I find your lack of faith disturbing.",
            "Never tell me the odds!"
        ];
        const quoteElement = document.createElement("div");
        quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.style.position = "absolute";
        quoteElement.style.left = Math.random() * 100 + "%";
        quoteElement.style.top = Math.random() * 100 + "%";
        quoteElement.style.fontSize = "1.5rem";
        quoteElement.style.color = "#ffffff";
        quoteElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        quoteElement.style.padding = "10px";
        quoteElement.style.border = "2px solid #00ff00";
        quoteElement.style.borderRadius = "10px";
        quoteElement.style.animation = `fadeOut ${Math.random() * 5 + 3}s forwards`;
        document.body.appendChild(quoteElement);

        setTimeout(() => {
            document.body.removeChild(quoteElement);
        }, 5000);
    };

    setInterval(createStarWarsQuote, 2000);

    // Random Starship Animations
    const createStarship = () => {
        const starship = document.createElement("div");
        starship.textContent = "🚀";
        starship.style.position = "absolute";
        starship.style.left = "-50px";
        starship.style.top = Math.random() * 100 + "%";
        starship.style.fontSize = "2rem";
        starship.style.animation = `flyAcross ${Math.random() * 10 + 5}s linear`;
        document.body.appendChild(starship);

        starship.addEventListener("animationend", () => {
            document.body.removeChild(starship);
        });
    };

    setInterval(createStarship, 1000);

    // Easter Egg: Hidden Button
    const secretButton = document.createElement("button");
    secretButton.textContent = "Find the Hidden Force!";
    secretButton.style.position = "fixed";
    secretButton.style.right = Math.random() * 80 + 10 + "%";
    secretButton.style.top = Math.random() * 80 + 10 + "%";
    secretButton.style.backgroundColor = "#0000ff";
    secretButton.style.color = "#ffffff";
    secretButton.style.border = "2px solid #ff00ff";
    document.body.appendChild(secretButton);

    secretButton.addEventListener("click", () => {
        alert("You have unlocked the Hidden Force!");
        secretButton.style.display = "none";
    });

    // Add Animations
    const style = document.createElement("style");
    style.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }

        @keyframes flyAcross {
            0% { transform: translateX(0); }
            100% { transform: translateX(120vw); }
        }
    `;
    document.head.appendChild(style);
});
