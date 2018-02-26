<html>
<head>
  <script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/pongflo.css">
  <meta charset="utf-8">
</head>
<body ><!-- onload="checkCookie()" -->
  <div>
    <h2 class="joueur1">Joueur 1 (Z/S)<input id="inputj1" value="Joueur 1"></h2>       
  </div>

  <div>
    <h2 class="joueur2">Joueur 2 (<i class="fas fa-sort-up "></i><i class="fas fa-sort-down"></i>) <input id="inputj2" value="Joueur 2"></h2>       
  </div>

  <div>
    <button type="button" class="Play" id="myBtn" onclick="play(), modal1(), score()">PLAY<i class="fas fa-play espace"></i></button>
  </div>

  <div>
    <a href="../index.php"><button type="button" class="return">Retour <i class="fas fa-undo"></i></button></a>
  </div>

  <!-- <div id="divj1">
  </div>

  <div id="divj2">
  </div>

  <div id="supsup"> -->
    
  </div>
  
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>

      <div class="container">
        <div class="col-12 row text-center grandeBordure">
          <span id="playerName1" class="col-4 bordure"><!-- Entrez nom du joueur 1 --></span>
          <span id="playerScore1" class="col-2 bordure"><!-- Entrez nom du score 1 --></span>
          <span id="playerScore2" class="col-2 bordure"><!-- Entrez nom du score 2 --></span>
          <span id="playerName2" class="col-4 bordure"><!-- Entrez nom du joueur 2 --></span>
        </div>
      </div>

        <div class="container">
          <svg width="1000" height="500" id="field">
              <rect x="20" y="200" width="25" height="100" id="player1"/>
              <rect x="480" y="230" width="20" height="20" rx="25" ry="25" id="ball"/>
              <rect x="955" y="200" width="25" height="100" id="player2"/>
          </svg>
        </div>
    </div>
  </div>
 <script src="../js/pong.js"></script>
  
</body>
</html>