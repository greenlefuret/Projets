<html>
<head>
<script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>
<link rel="stylesheet" href="../css/pongflo.css">
<link rel="stylesheet" href="../css/pong.css">
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css">

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

  <div id="divj1">
  </div>

  <div id="divj2">
  </div>

  <div id="supsup">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
  
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <div id="textej1"></div>
      <div id="textej2"></div>

      <h1>My first SVG</h1>

      <svg width="1000" height="500" id="field">
        <rect x="20" y="200" width="25" height="100" id="player1"/>
        <rect x="480" y="230" width="20" height="20" rx="25" ry="25" id="ball"/>
        <rect x="955" y="200" width="25" height="100" id="player2"/>
      </svg>

    </div>
  </div>

  <script src="../js/pongflo.js"></script>
  <script src="../js/pong.js"></script>
</body>
</html>