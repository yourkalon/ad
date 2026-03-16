// তিনটি URL
const redirectLinks = [
  "https://nickeldefiancepriest.com/zcvm0rch?key=93b158ea491b4f11e0adbacd15934c67",
  "https://pairturnnumerous.com/rze4wd8aa?key=74d74ecf1cacbe96436ceb718716741c",
  "https://villagetraitgarret.com/fz3ifw9n?key=255cb9b54aebe1dca0f89408b47e3fcf"
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
