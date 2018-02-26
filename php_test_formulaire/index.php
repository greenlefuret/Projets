
<body style="text-align:center; background-color:black; color:white">
  <header>

  </header>
   <form class="" action="pages/cible.php" method="post">
     <p>E-mail</p>
     <input type="email" name="mail" value="" method="post"></br>
     <p>Telephone</p>
     <input type="input" name="telephone" value="" method="post"></br>
     <p>Nom</p>
     <input type="input" name="nom" value="" method="post"></br>
     <p>Age</p>
     <input type="input" name="age" value="" method="post"></br>
     <p>Prenom</p>
     <input type="input" name="prenom" value="" method="post"></br>

     <input type="submit" value="Valider" />
     <p>Appuyer pour envoyer le mail.</p>
   </form>

   <div>
     <?php
        if(isset($_GET['toto'])){
      ?>
       <p >
    <?php echo $_GET['toto']; ?>
       </p>
    <?php
           }
    ?>
   </div>

 </body>
