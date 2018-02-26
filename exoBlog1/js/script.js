// le javascript //

function view_art(){
    $('.titre_index').click(function(){
        var str_titre = $('h2').attr('data-id');
        console.log(str_titre);
        var id = str_titre.substr(8,9);
        $('#main').load("article.php", "id="+id, function(){
            view_cat();
            view_aut();
        });
    });
}

function view_cat(){
    $('.categorie').click(function(){
        var str_cat = $('.categorie').attr('id');
        console.log(str_cat);
        var id = str_cat.substr(10,11);
        $('#main').load("categories.php", "id="+id, function(){
            view_art();
            view_aut();
        });
    });
}

function view_aut(){
    $('.auteur').click(function(){
        var str_aut = $('.auteur').attr('id');
        console.log(str_aut);
        var id = str_aut.substr(7,8);
        $('#main').load("auteur.php", "id="+id, function(){
            view_art();
            view_cat();
        });
    });
}


function view_search(){
    $('#btnsearch').click(function(){
       var mot_cle = $('#inputsearch').val();
       console.log(mot_cle);
       $('#main').load("search.php", "search="+mot_cle, function(){
           view_art();
           view_cat();
           view_aut();
       })
   });
}



$(document).ready(function() {

    view_search();

    $('.titre_index').click(function(){
        var str_titre = $('h2').attr('data-id');
        console.log(str_titre);
        var id = str_titre.substr(8,9);
        $('#main').load("article.php", "id="+id, function() {
            view_cat();
            view_aut();
        });
    });

    $('.categorie').click(function(){
        var str_cat = $('h4').attr('data-id');
        console.log(str_cat);
        var id = str_cat.substr(10,11);
        $('#main').load("categories.php", "id="+id, function() {
            view_art();
            view_cat();
            view_aut();
        });
    });

    $('.auteur').click(function(){
        var str_aut = $('.auteur').attr('id');
        console.log(str_aut);
        var id = str_aut.substr(7,8);
        $('#main').load("auteur.php", "id="+id, function(){
            view_art();
            view_cat();
            view_aut();
        });
    });

});
