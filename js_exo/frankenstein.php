<!DOCTYPE htlm>
<html>
    <head>
        <meta charset="utf-8">
    	<link rel="stylesheet" href="css/frankenstein.css">
    	<title> Frankenstein </title>
    </head>
    <body>
      <div>
      <p>Cliquer 1 fois sur Feed Me pour le voir grandir, cliquer sur la fonction stop pour arreter le processus.</p>
        <button type="button" onclick="stop()">STOOOOOOOOOOOP</button>
      </div>
      <div>
          <p id="Frankenstein" onclick="gros(10)"><span>Feed me!</span></p>
      </div>

      <script type="text/javascript">

        var arret = false;

        function gros(taille){

          console.log("coucou");

          document.getElementById("Frankenstein").style.fontSize =  taille+"px";

          console.log(document.getElementById("Frankenstein").style.fontSize);

          taille = taille + 1;

          console.log(taille);
          console.log(document.getElementById("Frankenstein").style.fontSize);
          if (taille >500)
            {
              return;
            }
           if (arret == true)
            {
              return;
            }


          setTimeout(function(){gros(taille)},200);
            }

          function stop(){
            arret=true;
          }

      </script>

    </body>

</htlm>
