<!DOCTYPE htlm>
<html>
    <head>
        <meta charset="utf-8">
    	<link rel="stylesheet" href="css/ninja.css">
    	<title> NINJA </title>
    </head>
    <body>
      <div class="espace">
          <p id="taille" onclick="gros()" style="font-size: 10px"><span>-----> Grand ou petit? <-----</span></p>
      </div>
      <div class="espace">
          <p id="ninja" onclick="disparaitre()">Disparition Ninja !</p>
      </div>



      <script type="text/javascript">
      function gros(){

               console.log("coucou");



                 if (document.getElementById("taille").style.fontSize <20+"px")
                 {
                   document.getElementById("taille").style.fontSize =  50+"px";
                   console.log("salut");
                 }
                 else
                 {
                   document.getElementById("taille").style.fontSize =  10+"px";
                   console.log("btfrgtfbgcbgbgb");
                 }
              }
          function disparaitre(){
          var ninja=document.getElementById("ninja");

          if (ninja.style.display == "none")
            {
                ninja.style.display = "block";
            }
            else
            {
              ninja.style.display = "none";
            }

          setTimeout(function(){afficher()},3000);
        }
         function afficher(){
          var ninja=document.getElementById("ninja");

          if (ninja.style.display == "none")
            {
                ninja.style.display = "block";
            }
            else
            {
              ninja.style.display = "none";
            }
        }






      </script>

    </body>

</htlm>
