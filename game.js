//control
var mode;

// speed and velocity etc
let fuel = 100;
let playerVelX = 5;
let beefSpeed = 3;
let gravity = 4;

//setup variables
let height = 640;
let width = 740;

//player or the beef
let beefPosX = 200;
let beefPosY = 100;

//grills
var gX = 200;
var gY = 730;
var gWidth = 100;
var gHeight = 80;

//clouds
let leftCloudX = 200;
let rightCloudX = 500;

//text
let textSizePrelude = 15;
let minTextSize = 15;
let maxTextSize = 18;
let sizeSpeedTextSize = 0.03;


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

} //close game

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
  if (keyCode===SPACE)   //spacebar IS NOT WORKING ATM
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
  text('BOOST  ' + fuel, 670, 30);
  
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
  background(0);
  fill(255);
  textSize(textSizePrelude);
  text("PRESS ENTER TO START", 370, 400);

} //end start screen

function startScreenTextAnimation(){
  textSizePrelude = map(sin(frameCount * sizeSpeedTextSize), -1.0, 1.0, minTextSize, maxTextSize);
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
    fuel -= 1;
    playerVelX = 1;
    beefPosY -= beefSpeed;
  }
  else {
    playerVelX = 5;
  }
  if (keyIsDown(65)) {   //A key or left
    fuel -= 1;
    playerVelX = 2;
    beefPosX -= beefSpeed;
  }
  if (keyIsDown(68)) {   //D key or right
    fuel -= 1;
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

function instructionScreen(){
  background(0);
  fill(255);
  textSize(textSizePrelude);
  text("PRESS THE SPACEBAR TO ACCEPT CHALLENGE", 370, 400);
}

