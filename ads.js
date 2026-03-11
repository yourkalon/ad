(function(){
  document.addEventListener("DOMContentLoaded", function(){

    let links = [
      "https://link1.com",
      "https://link2.com",
      "https://link3.com"
    ];

    let clickCount = localStorage.getItem("popupClicks");
    if(clickCount === null){
      clickCount = 0;
    }else{
      clickCount = parseInt(clickCount);
    }

    // overlay create
    let popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.background = "rgba(0,0,0,0.4)";
    popup.style.display = "none";
    popup.style.zIndex = "9999";
    popup.style.cursor = "pointer";

    document.body.appendChild(popup);

    // show after 5 sec
    setTimeout(function(){
      popup.style.display = "block";
    }, 5000);

    // click redirect
    popup.onclick = function(){
      if(clickCount >= links.length){
        clickCount = links.length - 1;
      }

      window.location.href = links[clickCount];

      clickCount++;
      localStorage.setItem("popupClicks", clickCount);
    };

  });
})();
