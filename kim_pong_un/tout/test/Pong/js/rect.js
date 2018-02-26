document.body.addEventListener("keydown", function(event){
    var p1x = parseInt(document.styleSheets[0].cssRules[0].style.top); //parseInt sur player 1
    var p1xUp = p1x - parseInt(10, 10);
    var p1xDown = p1x + parseInt(10, 10);

    var p2x = parseInt(document.styleSheets[0].cssRules[1].style.top); //parseInt sur player 2
    var p2xUp = p2x - parseInt(10, 10);
    var p2xDown = p2x + parseInt(10, 10);

    if(event.keyCode == 38){
        if(document.styleSheets[0].cssRules[0].style.top == 4 + 'px'){
            document.styleSheets[0].cssRules[0].style.top = 4 + 'px';
        }
        else{
            document.styleSheets[0].cssRules[0].style.top = p1xUp + 'px'; //arrow up
        }
        //max 4px
    }
    if(event.keyCode == 40){
        if(document.styleSheets[0].cssRules[0].style.top == 434 + 'px'){
            document.styleSheets[0].cssRules[0].style.top = 434 + 'px';
        }
        else{
            document.styleSheets[0].cssRules[0].style.top = p1xDown + 'px'; //arrow down
        }
        //min 434px
    }
        if(event.keyCode == 90){
            if( document.styleSheets[0].cssRules[1].style.top == -495 + 'px'){
                document.styleSheets[0].cssRules[1].style.top = -495 + 'px';
            }
            else{
                document.styleSheets[0].cssRules[1].style.top = p2xUp + 'px';//p2 up - Z
            }
        
        //max  -495px
       }
       if(event.keyCode == 83){
           if(document.styleSheets[0].cssRules[1].style.top == -65 + 'px'){
            document.styleSheets[0].cssRules[1].style.top = -65 + 'px';
           }
           else{
                document.styleSheets[0].cssRules[1].style.top = p2xDown + 'px'; //p2 down - S
           }       
        //min -65px
       }
   

   //console.log(document.styleSheets[0].cssRules[3].style.left);
   //console.log(document.styleSheets[0].cssRules[1].style.left);
   console.log(document.styleSheets[0].cssRules[0].style.top);
   console.log(document.styleSheets[0].cssRules[1].style.top);

   event.preventDefault();

}, false);

var interval = 0;

function ball(){
   var posX = parseInt(document.styleSheets[0].cssRules[3].style.left); //position balle en X
   var posY = parseInt(document.styleSheets[0].cssRules[3].style.top); //position balle en Y
   var p1yT = parseInt(document.styleSheets[0].cssRules[0].style.top); //postion player 1 en Y top
   var p1yB = parseInt(document.styleSheets[0].cssRules[0].style.top) - 64; //postion player 1 en Y bottom
   var p1x = parseInt(document.styleSheets[0].cssRules[0].style.left); //position player 1 en X
   var p2yT = parseInt(document.styleSheets[0].cssRules[1].style.top); //position player 2 en Y top
   var p2yB = parseInt(document.styleSheets[0].cssRules[1].style.top) - 64; //position player 2 en Y bottom
   var p2x = parseInt(document.styleSheets[0].cssRules[1].style.left); //position player 2 en X


   if(posX == p1x || posX <= p1x - 16){
       console.log("o/");
        if(posY >= p1yB || posY <= p1yT ){
            var posXMov = posX + parseInt(10, 10);
            document.styleSheets[0].cssRules[3].style.left = posXMov + 'px';
            console.log("yolo");
            //clearInterval(interval);
            //ballMouvement();
        }
    }
    if(posX >= p2x || posX >= p2x - 5){
        if(posY >= p2yB || posY <= p2yT ){
            var posXMov = posX - parseInt(10, 10);
            document.styleSheets[0].cssRules[3].style.left = posXMov + 'px';
            console.log("kldjfnbokmdrgln");
           // clearInterval(interval);
           // ballMouvement();
        }
   }
   if(posX < 10 || posX > 950){
       console.log("fin balle");
    clearInterval(interval);    
   }
   else{
    var posXMov = posX - parseInt(1, 10); //sens du movement de la balle
    document.styleSheets[0].cssRules[3].style.left = posXMov + 'px';

    console.log("init");
   }

}

function ballMouvement(){
    interval = setInterval(ball, 40);
    console.log("ojdf");
}
