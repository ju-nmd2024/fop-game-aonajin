//control
var mode;

// speed and velocity etc
let boost = 100;
let playerVelX = 5;
let beefSpeed = 3;
let gravity = 4;

//setup variables
let height = 640;
let width = 740;

//player or the beef
let beefPosX = 200;
let beefPosY = 100;

//title art
let xFullTitle = 240;
let yFullTitle = 140;
let xCookedTitle = - 90;
let yCookedTitle = - 50;

//grill
var gX = 200;
var gY = 730;
var gWidth = 100;
var gHeight = 80;

//clouds
let leftCloudX = 200;
let rightCloudX = 500;

//text
let textSizeAnimation = 15;
let minTextSize = 15;
let maxTextSize = 18;
let sizeSpeedTextSize = 0.03;

//try again button
let tryAgainX = 300;
let tryAgainY = 400;
let tryAgainWidth = 150;
let tryAgainHeight = 50;


function setup() {
  mode = 0; //game hasn't started
  createCanvas(width, height);  
  textAlign(CENTER);
  noStroke();

} //close setup

function game(){
  gameBackground();
  cloudAnimation();
  drawRawBeef();
  playerMechanics();
  fallingMechanics();
  gameOver();

} //close game

function gameOver(){
  if (boost <= 0) {
    gravity = 0;
    beefSpeed = 0;
    boost = 0;
    textStyle(NORMAL);
    fill(255, 255, 255);
    text("YOU'RE COOKED.", width / 2, height / 2);
    textSize(15);
    text("TRY AGAIN?", width / 2, 350);
    fill(173, 40, 49);
    rect(tryAgainX, tryAgainY, tryAgainWidth, tryAgainHeight, 30);
    fill(203, 238, 243);
    textStyle(BOLD);
    textSize(18);
    text("YES", tryAgainX + 75, tryAgainY + 33);
  }
}

function mouseInsideTryAgainButton(){
  return mouseX > tryAgainX && mouseX < tryAgainX +
  tryAgainWidth && mouseY > tryAgainY && mouseY < tryAgainY + tryAgainHeight;
}

function mousePressed(){
  if (mouseInsideTryAgainButton()) {
    mode=1;
  }
}

function draw() {
  startState();
} //close draw

function startState(){
  clear();
  
  if (mode==0) //only need to check value, not type
    startScreen();
    startScreenTextAnimation();
  if (mode==1){
    instructionScreen();
  }
  if (mode==2){
    game ();
  }
} //close startState

function keyPressed() {
  if (keyCode===ENTER) 
    mode=1;
  if (keyCode===39)   //right arrow
    mode=2;
}

function gameBackground(){
  background(114, 186, 213);

  fill(203, 238, 243);

  //right cloud
  circle(rightCloudX+50, 145, 70);
  circle(rightCloudX-15, 158, 35);
  circle(rightCloudX+20, 148, 60);
  circle(rightCloudX+80, 158, 30);

  //leftcloud
  circle(leftCloudX-30, 445, 90);
  circle(leftCloudX-65, 458, 55);
  circle(leftCloudX+20, 448, 80);
  circle(leftCloudX+60, 460, 50);

  textSize(20);
  text('BOOST  ' + boost, 670, 30);
  
} //close game background 

function cloudAnimation(){
  //move clouds
  leftCloudX += 0.5;  //left cloud to right
  rightCloudX -= 0.5; //right cloud to left
  /*
  code 76 to 77 from Open AI. (2024). 
  Part of code for cloud animation. ChatGPT. 
  Retrieved November 13, 2024, 
  from https://chat.openai.com/
*/

  if ( leftCloudX  > 800) {
    leftCloudX = -50;
  }
 
 if ( rightCloudX  < -50) {
    rightCloudX = 800;
  }
} //close cloud animation

function startScreen(){
  background(114, 186, 213);
  fill(203, 238, 243);
  textSize(textSizeAnimation);
  text("PRESS ENTER TO START", 370, 450);
  drawTitleScreen();

} //end start screen

function startScreenTextAnimation(){
  textSizeAnimation = map(sin(frameCount * sizeSpeedTextSize), -1.0, 1.0, minTextSize, maxTextSize);
  /*
line 109 to 111 taken from mo.h, George Profenza, 
& Kevin Workman. (2016, February 2). How to make the size of 
ellipse to get smaller and bigger in processing automatically. 
Stack Overflow. https://stackoverflow.com/questions/35156661/how-to-make-the-size-of-ellipse-to-get-smaller-and-bigger-in-processing-automati 
*/
} //end start screen animation

function fallingMechanics(){
  drawRawBeef(beefPosX, beefPosY += 2);

  if (beefPosY > height){
    beefPosY = 0;
    beefPosX = random(width);
  }
}

function playerMechanics(){
  if (keyIsDown(87)) {   //W key or up
    boost -= 1;
    playerVelX = 1;
    beefPosY -= beefSpeed;
  }
  else {
    playerVelX = 5;
  }
  if (keyIsDown(65)) {   //A key or left
    boost -= 1;
    playerVelX = 2;
    beefPosX -= beefSpeed;
  }
  if (keyIsDown(68)) {   //D key or right
    boost -= 1;
    playerVelX = 2;
    beefPosX += beefSpeed;
  }
}

function drawRawBeef(){
  
  push();
  translate(beefPosX, beefPosY);
  scale(0.4, 0.4, 1);

  /*one pixel
  fill(173, 40, 49);
  rect(80, 90, 10, 10);
  */
  
  //outline 
  fill(251, 195, 188);

  rect( 0, - 40, 180, 10); //start long line then left
  rect( - 30,  - 30, 30, 10);
  rect( - 50,  - 20, 20, 10);
  rect( - 70,  - 10, 20, 10);
  rect( - 80, 0, 10, 10);
  rect( - 90,  + 10, 10, 10);
  rect( - 100,  + 20, 10, 10);
  rect( - 110,  + 30, 10, 90);
  rect( - 100,  + 90, 10, 50);
  rect( - 90,  + 100, 10, 50);
  rect( - 80,  + 110, 10, 50);
  rect( - 70,  + 120, 30, 50);
  rect( - 40,  + 130, 140, 50);
  rect( + 100,  + 120, 40, 50);
  rect( + 140,  + 110, 20, 50);
  rect( + 160,  + 100, 10, 50);
  rect( + 190,  + 70, 10, 50);
  rect( + 180,  + 80, 10, 50);
  rect( + 170,  + 90, 10, 50);
  rect( + 200,  + 60, 20, 50);
  rect( + 220,  + 50, 50, 50);
  rect( + 270,  + 40, 10, 50);
  rect( + 280, 0, 10, 80);
  rect( + 270,  - 10, 10, 10);
  rect( + 230,  - 20, 40, 10);
  rect( + 180,  - 30, 50, 10);
  
  //tallow outline
  fill(204, 68, 75);

  rect(0,  - 30, 180, 10);
  rect( - 30,  - 20, 30, 10);
  rect( - 50,  - 10, 20, 10);
  rect( - 70, 0, 20, 10);
  rect( - 80,  + 10, 10, 10);
  rect( - 90,  + 20, 10, 10);
  rect( - 100,  + 30, 10, 60);
  rect( - 90,  + 90, 10, 10);
  rect( - 80,  + 100, 10, 10);
  rect( - 70,  + 110, 30, 10);
  rect( - 40,  + 120, 140, 10);
  rect( + 100,  + 110, 40, 10);
  rect( + 140,  + 100, 20, 10);
  rect( + 160,  + 90, 10, 10);
  rect( + 170,  + 80, 10, 10);
  rect( + 180,  + 70, 10, 10);
  rect( + 190,  + 60, 10, 10);
  rect( + 200,  + 50, 20, 10);
  rect( + 220,  + 40, 50, 10);
  rect( + 270, 0, 10, 40);
  rect( + 230,  - 10, 40, 10);
  rect( + 180,  - 20, 50, 10);
  
  //red 
  fill(173, 40, 49);


  rect(0,  + 40, 170, 40);
  rect( - 30,  + 40, 30, 80);
  rect( - 60, 0, 90, 110);
  rect( - 70,  + 10, 10, 100);
  rect( - 80,  + 20, 10, 80);
  rect( - 90,  + 30, 10, 60);
  rect( - 40, 0, 10, 120);
  rect(0,  + 70, 140, 40);
  rect( + 140,  + 80, 20, 20);
  rect( + 160,  + 80, 10, 10);
  rect( + 180,  - 10, 10, 80);
  rect( + 190,  - 10, 10, 70);
  rect( + 200,  - 10, 20, 60);
  rect(0,  + 100, 100, 20);
  rect( + 170,  + 40, 10, 40);
  
  //dark red or shadow
  fill(128, 14, 19);

  rect( + 30, 0, 240, 40);
  rect( - 30,  - 10, 260, 10);
  rect(0,  - 20, 180, 10);
  rect( - 40, 0, 60, 10);
  rect(0,  + 10, 40, 10);
  
  //highlights
  fill(223, 115, 115);
  
  rect( - 30,  + 110, 90, 10);
  rect( - 50,  + 100, 10, 10);
  rect( + 110,  + 100, 20, 10);
  rect( + 80,  + 110, 10, 10);

  pop();

}

function drawCookedBeef(){

}

function drawTitleScreen(){
  push();
  translate(xFullTitle, yFullTitle);
  
  fill(255);
  //You're title
  rect(- 20, 0, 10, 40);
  rect(- 10, 40, 10, 10);
  rect(+ 10, 40, 10, 10);
  rect(+ 20, 0, 10, 40);
  rect(0, 50, 10, 50);
  
  rect(+ 40, 50, 20, 10);
  rect(+ 30, 60, 10, 30);
  rect(+ 40, 90, 20, 10);
  rect(+ 60, 60, 10, 30);
  
  rect(+ 90, 60, 10, 30);
  rect(+ 100, 90, 20, 10);
  rect(+ 120, 60, 10, 30);
  
  rect(+ 150, 20, 10, 20);
  
  rect(+ 170, 60, 10, 40);
  rect(+ 180, 60, 10, 10);
  
  rect(+ 220, 50, 20, 10);
  rect(+ 210, 60, 10, 30);
  rect(+ 220, 90, 20, 10);
  rect(+ 220, 70, 20, 10);
  rect(+ 240, 60, 10, 10);
  
  translate(xCookedTitle, yCookedTitle);
  
  //cooked part, in order, title
  rect(- 10, 200, 20, 80);
  rect(0, 190, 20, 20);
  rect(+ 10, 180, 30, 20);
  rect(+ 40, 190, 20, 20);
  rect(0, 280, 20, 20);
  rect(+ 10, 290, 30, 20);
  rect(+ 40, 280, 20, 20);
  
  rect(+ 90, 230, 30, 20);
  rect(+ 70, 250, 20, 40);
  rect(+ 90, 290, 30, 20);
  rect(+ 120, 250, 20, 40);
  rect(+ 110, 280, 20, 20);
  rect(+ 80, 280, 20, 20);
  rect(+ 80, 240, 20, 20);
  rect(+ 110, 240, 20, 20);
  
  
  rect(+ 170, 230, 30, 20);
  rect(+ 150, 250, 20, 40);
  rect(+ 170, 290, 30, 20);
  rect(+ 200, 250, 20, 40);
  rect(+ 190, 280, 20, 20);
  rect(+ 160, 280, 20, 20);
  rect(+ 160, 240, 20, 20);
  rect(+ 190, 240, 20, 20);
  
  rect(+ 240, 200, 20, 100);
  rect(+ 280, 200, 20, 30);
  rect(+ 260, 230, 30, 20);
  rect(+ 260, 250, 20, 10);
  rect(+ 280, 260, 20, 30);
  rect(+ 290, 290, 20, 10);
  
  rect(+ 320, 250, 20, 40);
  rect(+ 330, 290, 40, 20);
  rect(+ 330, 240, 40, 20);
  rect(+ 360, 250, 20, 20);
  rect(+ 330, 270, 40, 10);
  
  rect(+ 430, 200, 20, 90);
  rect(+ 390, 260, 20, 30);
  rect(+ 400, 290, 40, 20);
  rect(+ 400, 250, 30, 20);
  
  pop();

}

function instructionScreen(){
  background(114, 186, 213); 
  fill(203, 238, 243);
  textSize(15);
  textStyle(NORMAL);
  text("YOU SCARED YOUR DAD WHILE HE WAS FLIPPING OVER YOUR DINNER,", 370, 300);
  text("MAKE IT LAND SOFTLY AND UNHARMED ON THE GRILL OR YOU'RE COOKED.", 370, 340);
  fill(203, 238, 243);
  textSize(textSizeAnimation);
  textStyle(BOLD);
  text("PRESS → ON YOUR KEYBOARD TO ACCEPT THE CHALLENGE", 370, 440);
}

