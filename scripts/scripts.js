/*function showItem (itemId){
   // Hide all items
   document.querySelectorAll('.item').forEach(item => item.classList.remove('active'));
            
   // Show the selected item
   document.getElementById(itemId).classList.add('active');  
}*/

let items = document.querySelectorAll(".item");
let remainingItems = Array.from(items).filter(item => item.id !== "welcome"); // Exclude the welcome screen

function showRandomItem() {
   // Hide the currently active item
   let activeItem = document.querySelector(".item.active");
   if (activeItem) {
       activeItem.classList.remove("active");
   }

   // If all items have been displayed, show alert and reset
   if (remainingItems.length === 0) {
       alert("All items have been displayed! The gallery will reset.");
       location.reload(); // Refresh the page
       return;
   }

   // Pick a random item from remainingItems
   let randomIndex = Math.floor(Math.random() * remainingItems.length);
   let nextItem = remainingItems[randomIndex];

   // Show the chosen item
   nextItem.classList.add("active");

   // Remove it from remainingItems array to avoid repetition
   remainingItems.splice(randomIndex, 1);
}



function resetItems() {
   // Reset remainingItems array (excluding the welcome screen)
   remainingItems = Array.from(items).filter(item => item.id !== "welcome");

   // Hide the currently active item
   let activeItem = document.querySelector(".item.active");
   if (activeItem) {
       activeItem.classList.remove("active");
   }

   // Show the welcome screen
   document.getElementById("welcome").classList.add("active");
}

