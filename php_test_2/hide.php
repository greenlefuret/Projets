<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#button1").hide();
    });
});

$(document).ready(function(){
    $("#button2").click(function(){
        $("#button1").show();
    });
});
</script>
</head>
<body style="text-align:center; background-color:black; color:white">
<p>Le roi du cache cache</p>

<button id="button1" style="background-color:red">CACHER</button>
<button id="button2" style="background-color:green">TROUVER</button>


</body>
</html>
