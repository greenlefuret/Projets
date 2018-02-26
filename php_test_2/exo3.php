<!DOCTYPE html>
<html>
<body style="text-align:center; background-color:black; color:white">

<div id="demo">
<h1>Ici l'heure et la date</h1>
<button type="button" onclick="loadDoc()" style="background-color:blue; color:white">Afficher L'Heure et la Date
</button>
</div>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "pages/exo3_2.php", true);
  xhttp.send();
}
</script>

</body>
</html>
