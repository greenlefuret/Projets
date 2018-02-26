<!DOCTYPE htlm>
<html>
    <head>
        <meta charset="utf-8">
    	<link rel="stylesheet" href="css/nicolas.css">
    	<title> Nicolas </title>
    </head>
    <body>
      <div id="coucou">

      </div>
      <div>----->
        <button type="button" onclick="apparait()">Surprise</button>
           <-----
      </div>



      <script type="text/javascript">

       function apparait(){

          for (var i = 0; i < 51; i++) {

          var images = document.createElement("IMG");
          images.setAttribute("src", "hs.jpg");
          images.setAttribute("width", "100");
          images.setAttribute("height", "100");
          images.setAttribute("alt", "hearthstone")
          document.body.appendChild(images);

       }
       }


       var nVarNom;



       do{
        nVarNom = prompt("Quel est votre nom?");
         }
        while (nVarNom=="" || nVarNom == null)
          alert("Bienvenue");

        window.onload = function() {
          var titre = document.createElement("h1");
          var texte = document.createTextNode("Coucou " + nVarNom + "!!!!!");
          titre.appendChild(texte);
          coucou.appendChild(titre);

        }

      </script>

    </body>

</htlm>
