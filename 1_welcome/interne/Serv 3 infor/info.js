function showPopup(id) {
    var popup = document.getElementById(id + 'Popup');
    if (popup) {
        popup.style.display = 'block';
    }
}

function hidePopup(id) {
    var popup = document.getElementById(id + 'Popup');
    if (popup) {
        popup.style.display = 'none';
    }
}