<?php include 'fonctions.php' ?>
        <?php
            $id_article = $_GET['id'];
            $bdd = connect();
            $art = article($bdd,$id_article);
            $cat = categorie($bdd, $id_article);
            $aut = auteur($bdd, $id_article);

            $donneesaut = mysqli_fetch_assoc($aut);
            $donneescat = mysqli_fetch_assoc($cat);
            $donnees = mysqli_fetch_assoc($art);
        ?>
            <h1 class="center titre_index"><?php echo $donnees['titre']; ?></h1>
                <div class="center">
                    <img class="img-fluid" src="<?php echo $donnees['image'];?>"/>
                </div>
                <p class="test center"><?php echo $donnees['contenu']; ?></p>
                <div class="categorie center" id="categorie_<?php echo $donneescat['id']; ?>"><?php echo 'Catégorie : '.$donneescat['nom'];?></div>
                <div class="auteur center" id="auteur_<?php echo $donneesaut['id']; ?>"><?php echo 'Auteur : '.$donneesaut['nom'];?></div>

                    <!-- BOUTON RETOUR ACCEUIL -->
            <div class="center">
                <div class="btn boutton_index">
                    <a href="index.php" style ="text-decoration:none">Retour</a>
                </div>
            </div>
        </div>
