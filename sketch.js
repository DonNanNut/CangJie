let pixelSkip = 10; //Edit this to make the image more detailed, but will take longer to render
let alphabetArray = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('');

var playerTurn = 1;
let img ;

function preload() {
  img = loadImage('art/art1.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    console.log(img);
    frameRate(2);
}

function draw() {

    background(0);
  //Text format
    for (let i = 0; i < width; i++) {
    let r = random(5,20);
    textSize(r);
    }
      
    for (var y = 0; y < img.height; y += pixelSkip) {
        for (var x = 0; x < img.width; x += pixelSkip) {
            let c = img.get(x, y);
            fill(c);

						let randomNumber = Math.round(random(51));
            let randomLetter = alphabetArray[randomNumber];
            text(String(randomLetter), x, y);
        }
    }
		image(img, windowWidth, 0)
}

function mousePressed() {
	
	if(playerTurn == 1){
		image(img);
		
		playerTurn = 2
		img=loadImage('art/art2.png');
	}
	
	else if(playerTurn == 2){
		image(img);
		
		playerTurn = 3
		img=loadImage('art/art3.png');
	}
	
  	else if(playerTurn == 3){
		image(img);
		
		playerTurn = 4
		img=loadImage('art/art4.png');
	}
	
		else if(playerTurn == 4){
		image(img);
		
		playerTurn = 5
		img=loadImage('art/art5.png');
	}
	
  	else if(playerTurn == 5){
		image(img);
		
		playerTurn = 6
		img=loadImage('art/art6.png');
	}
	
    	else if(playerTurn == 6){
		image(img);
		
		playerTurn = 7
		img=loadImage('art/art7.png');
	}
	
    	else if(playerTurn == 7){
		image(img);
		
		playerTurn = 8
		img=loadImage('art/art8.png');
	}
		
    	else if(playerTurn == 8){
		image(img);
		
		playerTurn = 9
		img=loadImage('art/art9.png');
	}
		
    	else if(playerTurn == 9){
		image(img);
		
		playerTurn = 10
		img=loadImage('art/art10.png');
	}
		
    	else if(playerTurn == 10){
		image(img);
		
		playerTurn = 11
		img=loadImage('art/art11.png');
	}
	
  	
    	else if(playerTurn == 11){
		image(img);
		
		playerTurn = 12
		img=loadImage('art/art12.png');
	}
	
  	
    	else if(playerTurn == 12){
		image(img);
		
		playerTurn = 13
		img=loadImage('art/art13.png');
	}
	
  	
    	else if(playerTurn == 13){
		image(img);
		
		playerTurn = 14
		img=loadImage('art/art14.png');
	}
		
    	else if(playerTurn == 14){
		image(img);
		
		playerTurn = 15
		img=loadImage('art/art15.png');
	}
	
  	
    	else if(playerTurn == 15){
		image(img);
		
		playerTurn = 26
		img=loadImage('art/art26.png');
	}
	
  	
    	else if(playerTurn == 16){
		image(img);
		
		playerTurn = 17
		img=loadImage('art/art17.png');
	}
		
    	else if(playerTurn == 17){
		image(img);
		
		playerTurn = 18
		img=loadImage('art/art18.png');
	}
		
    	else if(playerTurn == 18){
		image(img);
		
		playerTurn = 19
		img=loadImage('art/art19.png');
	}
		
    	else if(playerTurn == 19){
		image(img);
		
		playerTurn = 20
		img=loadImage('art/art20.png');
	}
		
    	else if(playerTurn == 20){
		image(img);
		
		playerTurn = 21
		img=loadImage('art/art21.png');
	}
		
    	else if(playerTurn == 21){
		image(img);
		
		playerTurn = 22
		img=loadImage('art/art22.png');
	}
		
    	else if(playerTurn == 22){
		image(img);
		
		playerTurn = 1
		img=loadImage('art/art1.png');
	}
	
}