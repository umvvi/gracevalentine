const envelope = document.getElementById("envelope");
const card = document.getElementById("card");

let isDragging = false;
let offsetX = 0, offsetY = 0;
let currentX = 0, currentY = 0;

// Envelope click - card appears and flap rotates
envelope.addEventListener("click", () => {
  card.style.transform = `translate(-50%, -50%) scale(1)`;  // Moves card to visible position
  card.style.opacity = "1"; // Makes card visible
  document.getElementById("flap").style.transform = "rotateX(180deg)";  // Flap opens
});

// Pointer down to initiate drag
card.addEventListener("pointerdown", (event) => {
  isDragging = true;
  offsetX = event.clientX - currentX;
  offsetY = event.clientY - currentY;
  card.style.cursor = "grabbing";
  event.preventDefault(); // Prevent any default actions (like text selection)
});

// Pointer move to drag the card
document.addEventListener("pointermove", (event) => {
  if (!isDragging) return;

  // Calculate the current mouse position minus the offsets
  currentX = event.clientX - offsetX;
  currentY = event.clientY - offsetY;

  // Move the card as the mouse moves
  card.style.transform = `translate(${currentX}px, ${currentY}px) scale(1)`;
});

// Pointer up to stop dragging
document.addEventListener("pointerup", () => {
  isDragging = false;
  card.style.cursor = "grab";
});
