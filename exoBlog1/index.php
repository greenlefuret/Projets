<?php include 'header.php' ?>

    <div class="container">
    <?php
    $bdd = connect();
    //$page = $_GET['page'];
    ?>

    <?php include 'menu.php' ?>

        <div id="main"> <!-- Permet l'affichage des articles sur la page d'acceuil. -->
           <?php $result = all($bdd);
           ?> <div class="row"> <?php
           while($donnees = mysqli_fetch_assoc($result)) {
           ?>
                   <div class="col-12 col-md-4 col-lg-2">
                       <img class="img-fluid img" src="<?php echo $donnees['image']?>"/>
                   </div>
                   <div class="col-12 col-md-8 col-lg-4 test">
                        <h2 data-id="article_<?php echo $donnees['id_article']?>" class="titre_index"><?php echo $donnees['titre'];?></h2>
                        <h4 data-id="categorie_<?php echo $donnees['id_categorie']?>" class="categorie"><?php echo $donnees['nom'];?></h4>
                        <div class="extrait">
                        <?php echo substr($donnees['contenu'], 0, 255)."..."?>
                        </div>
                   </div>
           <?php } ?>
            </div>
        </div>

        <div id="pagination">
            <?php /*
              if ($page != 1 && !empty($page)) { ?>
                <div class="center">
                <span id="precedent" class="test centre"><a href="index.php?page=<?php echo $page - 1; ?>">Page précédente</a></span>
                <span id="suivant" class="test centre"><a href="index.php?page=<?php echo $page + 1; ?>">Page suivante</a></span>
                </div>
              <?php } else { ?>
                <div class="center">
                  <span id="suivant" class="test centre"><a href="index.php?page=<?php echo $page + 1; ?>">Page suivante</a></span>
                </div>
              <?php } ?>
        </div>


<?php */include 'footer.php' ?>
