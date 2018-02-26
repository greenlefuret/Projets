document.body.addEventListener("keydown", function(event){
    var p1x = parseInt(document.styleSheets[0].cssRules[0].style.top);
    var p1xUp = p1x - parseInt(10, 10);
    var p1xDown = p1x + parseInt(10, 10);

    var p2x = parseInt(document.styleSheets[0].cssRules[1].style.top);
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
   console.log(document.styleSheets[0].cssRules[3].style.top);
   console.log(document.styleSheets[0].cssRules[1].style.top);

   event.preventDefault();

}, false);

function ball(){
   var posX = parseInt(document.styleSheets[0].cssRules[3].style.left);
   var posXRight = posX - parseInt(10, 10);
   //var p2xDown = p2x + parseInt(10, 10);
   document.styleSheets[0].cssRules[3].style.left = posXRight + 'px';

}

function ballMouvement(){
    setInterval(ball, 40);
}
