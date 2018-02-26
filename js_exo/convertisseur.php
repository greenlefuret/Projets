<!DOCTYPE htlm>
<html>
    <head>
      <link rel="stylesheet" href="css/convertisseur.css">
      <script type="text/javascript" src="js/convertisseur.js"></script>
      <meta charset="utf-8">
      <link rel="stylesheet" href="js/convertisseur.js">
      <title> CONVERTISSEUR </title>
    </head>
    <body>
     <div>
       <h2>CONVERTISSEUR</h2>
     </div>

      <form>
             <div>
                  <p>Nombre d'Euro</p>
                  <input type ="text" name="eur"  size=20 >

             </div>
             <div class="button">
               <input  type = "button" value="Euro en Dollar" onClick="convertir(this.form, 'dollar')" name="button">
               <input type = "button" value="Euro en Livre" onClick="convertir(this.form, 'livre')" name="button">
               <input type = "button" value="Euro en Yen" onClick="convertir(this.form, 'yen')" name="button">
                <p>Resultat</p>
                <input type="text" disabled="disabled"  name="res" size=20 >
             </div>
      </form>


     <div>
        <h2>CONVERTISSEUR MEDIEVAL</h2>

            <div>
                <p>Valeur à convertir</p> <input onkeyup ="convmed(document.getElementById('argent2').value,'medieval')" type="text" id="argent2">
              <div>
                <p>Resultat </p> <input id="resultat" type="text" disabled="disabled"  name="Medieval">
              </div>
            </div>
    </div>
    <div>
       <h2>CONVERTISSEUR MEDIEVAL STYLISÉ</h2>
       <p>Valeur à convertir
       </p>
       <input onkeyup ="convmedtab(document.getElementById('argent3').value,'medieval')" type="text" id="argent3">
       <p name="Medieval">Resultat:
          <span id="mithril"></span>
          <span id="platine"></span>
          <span id="or"></span>
          <span id="argent"></span>
          <span id="cuivre"></span>
       </p>
     </div>





    </body>

</htlm>
