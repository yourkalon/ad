(function(){
  document.addEventListener("DOMContentLoaded", function(){

    let links = [
      "https://link1.com",
      "https://link2.com",
      "https://link3.com"
    ];

    // get click count
    let clickCount = localStorage.getItem("popupClicks");
    if(clickCount === null){
      clickCount = 0;
    }else{
      clickCount = parseInt(clickCount);
    }

    // get last popup timestamp
    let lastShown = localStorage.getItem("popupLastShown");
    let now = Date.now();
    let popupDelay = 5000; // 5 sec

    if(lastShown !== null){
      lastShown = parseInt(lastShown);
    }else{
      lastShown = 0;
    }

    function showPopup(){
      let popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = "0";
      popup.style.left = "0";
      popup.style.width = "100%";
      popup.style.height = "100%";
      popup.style.background = "rgba(0,0,0,0.4)";
      popup.style.zIndex = "9999";
      popup.style.cursor = "pointer";

      document.body.appendChild(popup);

      popup.onclick = function(){
        if(clickCount >= links.length){
          clickCount = links.length - 1;
        }

        window.location.href = links[clickCount];
        clickCount++;
        localStorage.setItem("popupClicks", clickCount);
      };

      localStorage.setItem("popupLastShown", Date.now());
    }

    // show popup only if 5 sec passed since last
    if(now - lastShown >= popupDelay){
      setTimeout(showPopup, popupDelay);
    }

  });
})();
