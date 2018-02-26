<?php
function getheure(){
//afficher date et heure
$date = date('d-m-y');
$heure = date('H:i:s');
echo $date . " ";
echo $heure . "</br>";
}
function getmemoire(){
//afficher memoire
$memoire = round(disk_total_space("/") / 1024 / 1024 / 1024);
print("Espace total: $memoire GB") . "</br>";

//afficher memoire dispo
$memoire2 = round(disk_free_space("/") / 1024 / 1024 / 1024);
print("Espace libre: $memoire2 GB") . "</br>";
}
function getnon(){
//ne pas utiliser
echo "Ne pas utiliser";
}

function cpu(){
$cpu=shell_exec("lscpu | grep 'CPU max MHz'");
  print("Le processeur tourne à $cpu ");
}

if(isset($_POST['action']) && !empty($_POST['action'])) {
   $action = $_POST['action'];
   switch($action) {
       case 'test' :
        getheure();
        getmemoire();
        cpu();
       break;
       // ...etc...
   }
}

?>
