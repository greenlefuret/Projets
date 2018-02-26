  function play(){
    var para = document.createElement("p");
    var para2 = document.createElement("p");
    
    var j1 = document.getElementById("inputj1").value; 
    var texte1 = document.createTextNode(j1);
    para.appendChild(texte1);
    textej1.appendChild(para);
    
    var j2 = document.getElementById("inputj2").value;
    var texte2 = document.createTextNode(j2);
    para2.appendChild(texte2);
    textej2.appendChild(para2);
  }

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
   function modal1() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }


  function score(){
    var div1 = document.createElement("p");
    var div2 = document.createElement("p");
    
    var score1 = document.getElementById("inputj1").value; //scoreP1 a modifier
    var j1score = document.createTextNode(score1);
    div1.appendChild(j1score);
    divj1.appendChild(div1);
    
    var score2 = document.getElementById("inputj2").value; //scoreP2 a modifier
    var j2score = document.createTextNode(score2);
    div2.appendChild(j2score);
    divj2.appendChild(div2);
  }



  function suprimmer() { //fonction qui supprime la div

    var element = document.getElementById("supsup");
    element.parentNode.removeChild(element);


  }

  var scoreP1 = document.getElementById("scoreP1").value;

  if (scoreP1 == 3) {
    score();
    suprimmer();
  }

  var scoreP2 = document.getElementById("scoreP2").value;

  if (scoreP2 == 3) {
    score();
    suprimmer();
  }



/*  function setCookie(nom_cookie, valeur_cookie, duree) {

    var d = new Date();
    var nom_cookie = document.getElementById('inputj1').value;
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    console.log("expire = " + expires);
    document.cookie = nom_cookie + "=" + valeur_cookie + ";" + expires + ";path=/";
    console.log("document.cookie = " + nom_cookie + "=" + valeur_cookie + ";" + expires + ";path=/");
  }



  function getCookie(nom_cookie) {

    var name = nom_cookie + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
  }



  function checkCookie() {

    var score = getCookie("score");
    var player1 = getCookie("player1");
    var player2 = getCookie("player2");
    console.log(score, player1, player2);

    if (score != ""){
        setCookie("score", "999", 365);
    } 

    if (player1 != ""){
        setCookie("player1", player1, 365);
    } 

    if (player2 != ""){
        setCookie("player2", player2, 365);
    } 

  }
*/


var direction = {
      x: 5,
      y: 5
    };

    var ball = document.getElementById('ball');
    var p1 = document.getElementById('player1');
    var p2 = document.getElementById('player2');

      

    var hauteur = 500;
    var largeur = 1000;
    var p1Input = {up : false, down: false};
    var p2Input = {up : false, down: false};

    
    document.body.addEventListener("keyup", function(event){
      if(event.keyCode == 90){
        p1Input.up = false;
      }
      if (event.keyCode == 83){
        p1Input.down = false;
      }
      if(event.keyCode == 38){
        p2Input.up = false;
      }
      if(event.keyCode == 40){
        p2Input.down = false;
      }
      });

      document.body.addEventListener("keydown", function(event){
        if (event.keyCode == 90){
          p1Input.up = true;
        }
        if(event.keyCode == 83){
          p1Input.down = true;
        }
        if(event.keyCode == 38){
          p2Input.up = true;
        }
        if(event.keyCode == 40){
          p2Input.down = true;
        }
      });


    function loop() {
      var ballPosition = {
        x: parseInt(ball.getAttribute('x')),
        y: parseInt(ball.getAttribute('y')),
        hgt: parseInt(ball.getAttribute('height')),
        wdt: parseInt(ball.getAttribute('width'))
      };

      var P1 = {
      x : parseInt(p1.getAttribute('x')),
      y : parseInt(p1.getAttribute('y')),
      height : parseInt(p1.getAttribute('height')),
      width : parseInt(p1.getAttribute('width'))
    };

      var P2 = {
        x : parseInt(p2.getAttribute('x')),
        y : parseInt(p2.getAttribute('y')),
        height : parseInt(p2.getAttribute('height')),
        width : parseInt(p2.getAttribute('width'))
      };

      //input
      if(p1Input.up){
        if (p1.getAttribute('y') > 0){
         p1.setAttribute('y', P1.y - 5);
        }
      }
      if (p1Input.down){
        if (p1.getAttribute('y') < 400){
        p1.setAttribute('y', P1.y + 5);
        }
      }
      if (p2Input.up){
        if (p2.getAttribute('y') > 0){
        p2.setAttribute('y', P2.y - 5);
        }
      }
      if (p2Input.down){
        if (p2.getAttribute('y') < 400){
        p2.setAttribute('y', P2.y + 5);
        }
      }

      //ball
      if (ballPosition.y + ballPosition.hgt >= hauteur || ballPosition.y <= 0) {
        direction.y = -direction.y;
        console.log("hauteur");
      }
      if (ballPosition.x + ballPosition.wdt>= largeur){
        //scoreP1 += 1;
        direction.x = -direction.x; //a suppr
        console.log("bd");
        return;
      }
      if(ballPosition.x + ballPosition.wdt <= 0){
        //scoreP1 += 1;
        direction.x = -direction.x;//a suppr
        console.log("bgauche");
        return;
      }

      //collision
      if (ballPosition.x < P1.x + P1.width &&
        ballPosition.x + ballPosition.wdt > P1.x &&
        ballPosition.y < P1.y + P1.height &&
        ballPosition.hgt + ballPosition.y > P1.y){
          console.log(direction.y);
          direction.x = -direction.x;
      } 
      if (ballPosition.x < P2.x + P2.width &&
        ballPosition.x + ballPosition.wdt > P2.x &&
        ballPosition.y < P2.y + P2.height &&
        ballPosition.hgt + ballPosition.y > P2.y){
          console.log("p2c" + direction.y);
        direction.x = -direction.x;

      }

      ball.setAttribute('x', ballPosition.x+direction.x);
      ball.setAttribute('y', ballPosition.y+direction.y);

      setTimeout(loop, 10);
    }

    setTimeout(loop, 200);