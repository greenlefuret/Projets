$(document).ready(function(){

  setInterval(function(){ console.log("activvvon");
    $.ajax({ url:'pages/esp_mem_requete.php',
           data: {action: 'test'},
           type: 'post',
           success: function(output) {
             $("#demo").html(output);console.log("action");
            }
         });
  }, 1000);

});
