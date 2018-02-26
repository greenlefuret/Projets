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



  /*function suprimmer() { //fonction qui supprime la div

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
  }*/



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