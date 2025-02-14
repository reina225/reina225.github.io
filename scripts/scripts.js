function showItem (itemId){
   // Hide all items
   document.querySelectorAll('.item').forEach(item => item.classList.remove('active'));
            
   // Show the selected item
   document.getElementById(itemId).classList.add('active');  
}