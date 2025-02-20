let items = document.querySelectorAll(".item");
let remainingItems = Array.from(items).filter(item => item.id !== "welcome"); // Exclude the welcome screen
let score = 0;

function changeScore(value) {
    score += value;
    document.getElementById('score').textContent = score;
}

function resetScore() {
    score = 0;
    document.getElementById('score').textContent = score;
}

function showRandomItem() {
    let activeItem = document.querySelector(".item.active");
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    if (remainingItems.length === 0) {
        alert("All items have been displayed! The gallery will reset.");
        location.reload();
        return;
    }

    let randomIndex = Math.floor(Math.random() * remainingItems.length);
    let nextItem = remainingItems[randomIndex];

    nextItem.classList.add("active");
    remainingItems.splice(randomIndex, 1);

    // Reset buttons visibility
    document.getElementById("checkBtn").style.display = "block";
    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer() {
    let image = document.getElementById("logoImage");
    let logoNameElement = document.getElementById("logoName");

    if (image.src.includes("/preview/")) {
        // Change image source to the answer folder
        image.src = image.src.replace("/preview/", "/answers/");

        // Show the hardcoded logo name
        logoNameElement.style.display = "block";

        // Hide Check button, show Next button
        document.getElementById("checkBtn").style.display = "none";
        document.getElementById("nextBtn").style.display = "block";
    }
}

