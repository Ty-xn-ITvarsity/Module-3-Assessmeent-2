// filepath: c:\Users\mtino\Documents\websites\restaurant menu\wishlist.js
function addToWishlist(itemName) {
    alert(itemName + ' added to your wishlist!');
    // Optionally, add logic to save to wishlist.html or localStorage
}

document.querySelector('.add-to-wishlist-btn').onclick = function() {
    alert('Added to wishlist!');
};
document.querySelector('.reorder-btn').onclick = function() {
    window.location.href = 'orders.html';
};