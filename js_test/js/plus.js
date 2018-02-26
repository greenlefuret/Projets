

  function vert(){
              console.log("vert");

              document.getElementById("carre").style.backgroundColor = "green";
         }
  function bleu(){
              console.log("blue");

              document.getElementById("carre").style.backgroundColor = "blue";
         }
  function reset(){
              console.log("reset");

              document.getElementById("carre").style.backgroundColor = "blue";
              document.getElementById("carre").style.display = "";
              document.getElementById("carre").style.height = "100px";
              document.getElementById("carre").style.width = "100px";
              document.getElementById("carre").style.position = "absolute";
              document.getElementById("carre").style.left = "100px";
              document.getElementById("carre").style.top = "300px";

         }

  function agrandir(){

             var azer=document.getElementById("carre");
             var raze=azer.style.height;
             var bim=raze.slice(0,-2);
             console.log(raze +" "+ bim);
             if (!raze){
                raze="100px";
                bim=raze.slice(0,-2);
             }

             if(bim>300){
              bim=9;
             }

             for (var i=10;i>1;i--){
              bim++;
             }

             var monter= bim+"px";

             azer.style.height=monter;


        }
  function visibilite(){
              var targetElement;
              targetElement = document.getElementById("carre") ;
              if (targetElement.style.display == "none")
              {
              targetElement.style.display = "" ;
              } else {
              targetElement.style.display = "none" ;
              }
              }



document.onkeydown = function(event){
   var cadre = document.getElementById('carre'),
    s = carre.style, // Un petit raccourci
    i = carre.offsetLeft, // On récupère la position absolue initiale.
    j = carre.offsetTop;
    var event = event || window.event,
        keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
    switch(keyCode){
    case 38:
       j= j-10;
        break;
    case 40:
        j=j+10;
        break;
    case 37:
       i= i-10;
        break;
    case 39:
       i= i+10;
        break;
    }
    // Et enfin on applique les modifications :
    s.left = String(i)+'px';
    s.top = String(j)+'px';
}
