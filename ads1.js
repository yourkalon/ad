// তিনটি URL
const redirectLinks = [
  "https://pairturnnumerous.com/pwve65dx?key=ab9a2afbbceda029474e0e9f5ca91142",
  "https://faithlesscourtroom.com/k65rtjdc?key=a3268d115d83b9e47f262ac146277d4e",
  "https://www.effectivegatecpm.com/ee55cvxx?key=3a2a48730ebcee12d2abf34d3627d65d"
];

let currentIndex = 0; // কোন URL-এ যাবে ট্র্যাকের জন্য

// Create the popup overlay dynamically
const popup = document.createElement("div");
popup.id = "popupOverlay";
popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.background = "rgba(0,0,0,0.0)";
popup.style.display = "none";
popup.style.zIndex = "9999";
popup.style.cursor = "pointer";
document.body.appendChild(popup);

function showPopup() {
  setTimeout(() => {
    popup.style.display = "block";
  }, 15000);
}

showPopup(); // পেজ লোডে প্রথমবার popup দেখাবে

popup.addEventListener("click", function() {
  const nextLink = redirectLinks[currentIndex];
  currentIndex = (currentIndex + 1) % redirectLinks.length; // serially loop
  popup.style.display = "none";
  window.location.href = nextLink;
});

// Back button এ popup আবার দেখানোর জন্য
window.addEventListener("pageshow", function(event) {
  if(event.persisted) {
    showPopup();
  }
});
