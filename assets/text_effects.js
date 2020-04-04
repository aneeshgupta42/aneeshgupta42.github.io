var x = document.getElementById("myAudio");
        function playAudio() {
          x.play();
        }
        var cursor = true;
        var speed1 = 500;
        var speed2 = 3250;
        setInterval(() => {
          var name = document.getElementById("english");
          if (name.textContent == "Aneesh Gupta.") {
            name.textContent = "अनीश गुप्ता.   ";
            name.style.fontFamily = 'Hind', sans - serif;
          }
          else {
            name.textContent = "Aneesh Gupta.";
            name.style.fontFamily = 'Inconsolata', monospace;
          }
        }, speed2);

        setInterval(() => {
          if (cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
          } else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed1);