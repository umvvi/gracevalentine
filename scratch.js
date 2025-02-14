const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
const hiddenImage = document.getElementById("hiddenImage");

canvas.width = hiddenImage.width;
canvas.height = hiddenImage.height;

// Cover the image with a gray scratch layer
ctx.fillStyle = "#ccc";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("mousedown", startErasing);
canvas.addEventListener("mousemove", erase);
canvas.addEventListener("mouseup", stopErasing);

let erasing = false;

function startErasing() {
    erasing = true;
}

function erase(e) {
    if (!erasing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.clearRect(x, y, 30, 30); // Scratch area
}

function stopErasing() {
    erasing = false;
}


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".floating");

    images.forEach(img => {
        // Assign random positions
        img.style.top = Math.random() * 90 + "vh";
        img.style.left = Math.random() * 90 + "vw";
    });
});
