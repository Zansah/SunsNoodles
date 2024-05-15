// This is not my code
function toggleMenu() {
    var slidingMenu = document.getElementById("slidingMenu");
    var overlay = document.getElementById("overlay");
    if (slidingMenu.style.left === "-350px") {
        slidingMenu.style.left = "0";
        overlay.style.display = "block";
    } else {
        slidingMenu.style.left = "-350px";
        overlay.style.display = "none";
    }
}
