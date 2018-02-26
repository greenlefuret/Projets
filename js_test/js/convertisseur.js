
function convertir(form, type)
{ 
    if (type=="dollar") {
        
            form.res.value = form.eur.value*1.199;
    }
     if (type=="livre") {
            form.res.value = form.eur.value*0.886;
       
    }
     if (type=="yen") {
        
            form.res.value = form.eur.value*135.764;
    }
}

   function convmed(argent2, medieval){
        if(argent2 == "" || isNaN(argent2) == true){

            alert("Veuillez rentrer une valeur.")

        }else if(argent2 > 0){

            var mithril = Math.trunc(argent2 / 100000);
            console.log(mithril + " mithril");
            var reste = parseFloat(argent2 % 100000);
           
            var platine = Math.trunc(reste / 5000);
            console.log(platine + " platine");
            var reste2 = parseFloat(reste % 5000);
            
            var or = Math.trunc(reste2 / 100);
            console.log(or + " or");
            var reste3 = parseFloat(reste2 % 100);
           
            var argent = Math.trunc(reste3 / 10);
            console.log(argent + " argent");
            var reste4 =parseFloat(reste3 % 10);
            
            var cuivre = Math.trunc(reste4 / 0.1);
            console.log(cuivre +" cuivre");
            
            
           document.getElementById("resultat").value = mithril + " mithril " + platine + " platine " + or + " or " + argent + " argent " + cuivre + " cuivre ";
             
        }
    }
     function convmedtab(argent3, medieval){
        if(argent3 == "" || isNaN(argent3) == true){

            alert("Veuillez rentrer une valeur.")

        }else if(argent3 > 0){
             
            
            var mithril = Math.trunc(argent3 / 100000);
            console.log(mithril + " mithril");
            var reste = parseFloat(argent3 % 100000);
            
            var platine = Math.trunc(reste / 5000);
            console.log(platine + " platine");
            var reste2 = parseFloat(reste % 5000);
           
            var or = Math.trunc(reste2 / 100);
            console.log(or + " or");
            var reste3 = parseFloat(reste2 % 100);
           
            var argent = Math.trunc(reste3 / 10);
            console.log(argent + " argent");
            var reste4 =parseFloat(reste3 % 10);
           
            var cuivre = Math.trunc(reste4 / 0.1);
            console.log(cuivre +" cuivre");
            var tab = [mithril, platine, or, argent, cuivre]
            tab["mithril"] = mithril + " mithril";
            tab["platine"] = platine + " platine";
            tab["or"] = or + " or";
            tab["argent"] = argent + " argent";
            tab["cuivre"] = cuivre + " cuivre";
            var longueur=tab.length;   
             console.table(tab["cuivre"]);
             console.table(tab);
            document.getElementById("mithril").innerHTML=tab['mithril'];
            document.getElementById("platine").innerHTML=tab['platine'];
            document.getElementById("or").innerHTML=tab['or'];
            document.getElementById("argent").innerHTML=tab['argent'];
            document.getElementById("cuivre").innerHTML=tab['cuivre'];
           
        }
    }

