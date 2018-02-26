<?php include 'fonctions.php' ?>

    <?php
    $id_categories = $_GET['id'];
    $bdd = connect();
    $artcat = articles_categorie($bdd, $id_categories) ?>
    <?php while ($donnees = mysqli_fetch_assoc($artcat))
    { ?>
      <h2 data-id="article_<?php echo $donnees['id_article']?>"><h2 class="center titre_index"><?php echo $donnees['titre'];?></h2>
  </br>

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
