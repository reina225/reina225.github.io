let items = document.querySelectorAll(".item");
let remainingItems = Array.from(items).filter(item => item.id !== "welcome"); // Exclude the welcome screen
// Initialize scores for four teams
let scores = [0, 0, 0, 0];

function changeScore(team, amount) {
    let scoreElement = document.getElementById("score" + team);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + amount;
}

function resetAllScores() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("score" + i).textContent = "0";
    }
}


function updateScore(team) {
    document.getElementById(`score${team}`).textContent = scores[team - 1];
}

function showRandomItem() {
    let activeItem = document.querySelector(".item.active");
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    if (remainingItems.length === 0) {
        alert("All items have been displayed! The gallery will reset.");
        remainingItems = Array.from(items).filter(item => item.id !== "welcome"); // Reset the list
    }

    let randomIndex = Math.floor(Math.random() * remainingItems.length);
    let nextItem = remainingItems[randomIndex];

    nextItem.classList.add("active");
    remainingItems.splice(randomIndex, 1);
}


function checkAnswer() {
    let activeItem = document.querySelector(".item.active");
    let image = activeItem.querySelector("img");
    let logoNameElement = activeItem.querySelector("p");
    let checkBtn = activeItem.querySelector(".buttons button:nth-child(1)");
    let nextBtn = activeItem.querySelector(".buttons button:nth-child(2)");

    if (image.src.includes("/preview/")) {
        image.src = image.src.replace("/preview/", "/answers/");
        logoNameElement.style.display = "block";
        checkBtn.style.display = "none";
        nextBtn.style.display = "block";
    }
}
