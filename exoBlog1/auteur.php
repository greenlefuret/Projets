<?php include 'fonctions.php' ?>

    <?php
    $id_auteur = $_GET['id'];
    $bdd = connect();
    $artaut = articles_auteur($bdd, $id_auteur);
    while ($donnees = mysqli_fetch_assoc($artaut))
    { ?>
     <h2 data-id="article_<?php echo $donnees['id_article']?>" class="titre_index center"><?php echo $donnees['titre'];?></h2>
    <div class="center">
      <span>
         <img class="img-fluid" src="<?php echo $donnees['image'];?>"/>
      </span>
    </div>
      </br>

      <div class="extrait test center">
      <?php echo substr($donnees['contenu'], 0, 255)."..."?>
      </div>



      <div class="date center">
          <?php echo $donnees['date'];?>
      </div>

   <?php
         }
    ?>


    <!-- BOUTON RETOUR ACCEUIL -->
    <div class="center">
    <div class="btn boutton_index">
        <a href="index.php" style ="text-decoration:none">Retour</a>
    </div>
  </div>

<?php include 'footer.php' ?>
