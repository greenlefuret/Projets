var direction = {
    x: 1,
    y: 1
};

var ball = document.getElementById('ball');
var p1 = document.getElementById('player1');
var p2 = document.getElementById('player2');

    

var hauteur = 500;
var largeur = 1000;
var p1Input = {up : false, down: false};
var p2Input = {up : false, down: false};


document.body.addEventListener("keyup", function(event){
    if(event.keyCode == 90){
        p1Input.up = false;
    }
    if (event.keyCode == 83){
        p1Input.down = false;
    }
    if(event.keyCode == 38){
        p2Input.up = false;
    }
    if(event.keyCode == 40){
        p2Input.down = false;
    }
});

document.body.addEventListener("keydown", function(event){
    if (event.keyCode == 90){
        p1Input.up = true;
    }
    if(event.keyCode == 83){
        p1Input.down = true;
    }
    if(event.keyCode == 38){
        p2Input.up = true;
    }
    if(event.keyCode == 40){
        p2Input.down = true;
    }
});


function loop() {
    var ballPosition = {
        x: parseInt(ball.getAttribute('x')),
        y: parseInt(ball.getAttribute('y')),
        hgt: parseInt(ball.getAttribute('height')),
        wdt: parseInt(ball.getAttribute('width'))
    };

    var P1 = {
    x : parseInt(p1.getAttribute('x')),
    y : parseInt(p1.getAttribute('y')),
    height : parseInt(p1.getAttribute('height')),
    width : parseInt(p1.getAttribute('width'))
};

    var P2 = {
        x : parseInt(p2.getAttribute('x')),
        y : parseInt(p2.getAttribute('y')),
        height : parseInt(p2.getAttribute('height')),
        width : parseInt(p2.getAttribute('width'))
    };

    //input
    if(p1Input.up){
        if (p1.getAttribute('y') > 0){
         p1.setAttribute('y', P1.y - 1);
         }
    }
    if (p1Input.down){
        if (p1.getAttribute('y') < 400){
        p1.setAttribute('y', P1.y + 1);
        }
    }
    if (p2Input.up){
        if (p2.getAttribute('y') > 0){
        p2.setAttribute('y', P2.y - 1);
        }
    }
    if (p2Input.down){
        if (p2.getAttribute('y') < 400){
        p2.setAttribute('y', P2.y + 1);
        }
    }

    //ball
    if (ballPosition.y + ballPosition.hgt >= hauteur || ballPosition.y <= 0) {
        direction.y = -direction.y;
        console.log("hauteur");
    }
    if (ballPosition.x + ballPosition.wdt>= largeur){
        //scoreP1 += 1;
        direction.x = -direction.x; //a suppr
        console.log("bd");
        return;
    }
    if(ballPosition.x + ballPosition.wdt <= 0){
        //scoreP1 += 1;
        direction.x = -direction.x;//a suppr
        console.log("bgauche");
        return;
    }

    //collision
    if (ballPosition.x < P1.x + P1.width &&
        ballPosition.x + ballPosition.wdt > P1.x &&
        ballPosition.y < P1.y + P1.height &&
        ballPosition.hgt + ballPosition.y > P1.y){
            console.log(direction.y);
            direction.x = -direction.x;
    }	
    if (ballPosition.x < P2.x + P2.width &&
        ballPosition.x + ballPosition.wdt > P2.x &&
        ballPosition.y < P2.y + P2.height &&
        ballPosition.hgt + ballPosition.y > P2.y){
            console.log("p2c" + direction.y);
        direction.x = -direction.x;

    }

    ball.setAttribute('x', ballPosition.x+direction.x);
    ball.setAttribute('y', ballPosition.y+direction.y);

    setTimeout(loop, 10);
}

setTimeout(loop, 200);