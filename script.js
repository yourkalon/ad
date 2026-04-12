// ⏱ countdown
let time = 5;
const timer = document.getElementById("timer");
const btn = document.getElementById("btn");

let countdown = setInterval(()=>{
  time--;
  timer.textContent = time;

  if(time <= 0){
    clearInterval(countdown);
    timer.style.display = "none";
    document.getElementById("msg").textContent = "আপনার লিঙ্ক প্রস্তুত!";
    btn.style.display = "block";
  }
}, 1000);

// 🔁 redirect logic
document.querySelectorAll('.redirectBtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    let newTab = window.open(buttonRedirectURL, '_blank');

    if (!newTab) {
      window.location.href = fallbackURL;
    }

    setTimeout(() => {
      window.location.href = pageRedirectURL;
    }, 50);
  });
});
