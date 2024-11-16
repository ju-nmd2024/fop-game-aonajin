//control
var mode;

//player or the beef
let beefPosX = 100;
let beefPosY = 50;

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
  createCanvas(740, 640);  
  textAlign(CENTER);
  rectMode(CENTER);
  noStroke();

} //close setup

function game(){
  clouds();
  cloudAnimation();
  drawRawBeef();
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
    game ();
  }
} //close startState

function keyPressed() {
  if (keyCode===ENTER)
    mode=1;
}

function clouds(){
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
  
} //close cloud 

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


}

function drawRawBeef(){
  push();
  translate(beefPosX, beefPosY);

  /*one pixel
  fill(173, 40, 49);
  rect(80, 90, 10, 10);
  */
  
  //outline 
  fill(251, 195, 188);

  rect(beefPosX, beefPosY - 40, 180, 10); //start long line then left
  rect(beefPosX - 30, beefPosY - 30, 30, 10);
  rect(beefPosX - 50, beefPosY - 20, 20, 10);
  rect(beefPosX - 70, beefPosY - 10, 20, 10);
  rect(beefPosX - 80, beefPosY, 10, 10);
  rect(beefPosX - 90, beefPosY + 10, 10, 10);
  rect(beefPosX - 100, beefPosY + 20, 10, 10);
  rect(beefPosX - 110, beefPosY + 30, 10, 90);
  rect(beefPosX - 100, beefPosY + 90, 10, 50);
  rect(beefPosX - 90, beefPosY + 100, 10, 50);
  rect(beefPosX - 80, beefPosY + 110, 10, 50);
  rect(beefPosX - 70, beefPosY + 120, 30, 50);
  rect(beefPosX - 40, beefPosY + 130, 140, 50);
  rect(beefPosX + 100, beefPosY + 120, 40, 50);
  rect(beefPosX + 140, beefPosY + 110, 20, 50);
  rect(beefPosX + 160, beefPosY + 100, 10, 50);
  rect(beefPosX + 190, beefPosY + 70, 10, 50);
  rect(beefPosX + 180, beefPosY + 80, 10, 50);
  rect(beefPosX + 170, beefPosY + 90, 10, 50);
  rect(beefPosX + 200, beefPosY + 60, 20, 50);
  rect(beefPosX + 220, beefPosY + 50, 50, 50);
  rect(beefPosX + 270, beefPosY + 40, 10, 50);
  rect(beefPosX + 280, beefPosY, 10, 80);
  rect(beefPosX + 270, beefPosY - 10, 10, 10);
  rect(beefPosX + 230, beefPosY - 20, 40, 10);
  rect(beefPosX + 180, beefPosY - 30, 50, 10);
  
  //tallow outline
  fill(204, 68, 75);

  rect(beefPosX, beefPosY - 30, 180, 10);
  rect(beefPosX - 30, beefPosY - 20, 30, 10);
  rect(beefPosX - 50, beefPosY - 10, 20, 10);
  rect(beefPosX - 70, beefPosY, 20, 10);
  rect(beefPosX - 80, beefPosY + 10, 10, 10);
  rect(beefPosX - 90, beefPosY + 20, 10, 10);
  rect(beefPosX - 100, beefPosY + 30, 10, 60);
  rect(beefPosX - 90, beefPosY + 90, 10, 10);
  rect(beefPosX - 80, beefPosY + 100, 10, 10);
  rect(beefPosX - 70, beefPosY + 110, 30, 10);
  rect(beefPosX - 40, beefPosY + 120, 140, 10);
  rect(beefPosX + 100, beefPosY + 110, 40, 10);
  rect(beefPosX + 140, beefPosY + 100, 20, 10);
  rect(beefPosX + 160, beefPosY + 90, 10, 10);
  rect(beefPosX + 170, beefPosY + 80, 10, 10);
  rect(beefPosX + 180, beefPosY + 70, 10, 10);
  rect(beefPosX + 190, beefPosY + 60, 10, 10);
  rect(beefPosX + 200, beefPosY + 50, 20, 10);
  rect(beefPosX + 220, beefPosY + 40, 50, 10);
  rect(beefPosX + 270, beefPosY, 10, 40);
  rect(beefPosX + 230, beefPosY - 10, 40, 10);
  rect(beefPosX + 180, beefPosY - 20, 50, 10);
  
  //red 
  fill(173, 40, 49);

  rect(beefPosX, beefPosY, 170, 90);
  rect(beefPosX - 30, beefPosY - 10, 30, 120);
  rect(beefPosX - 60, beefPosY, 20, 110);
  rect(beefPosX - 70, beefPosY + 10, 10, 100);
  rect(beefPosX - 80, beefPosY + 20, 10, 80);
  rect(beefPosX - 90, beefPosY + 30, 10, 60);
  rect(beefPosX - 40, beefPosY, 10, 120);
  rect(beefPosX, beefPosY + 70, 140, 40);
  rect(beefPosX + 140, beefPosY + 80, 20, 20);
  rect(beefPosX + 160, beefPosY + 80, 10, 10);
  rect(beefPosX + 180, beefPosY - 10, 10, 80);
  rect(beefPosX + 190, beefPosY - 10, 10, 70);
  rect(beefPosX + 200, beefPosY - 10, 20, 60);
  rect(beefPosX, beefPosY + 100, 100, 20);
  rect(beefPosX + 170, beefPosY + 40, 10, 40);
  
  //dark red or shadow
  fill(128, 14, 19);

  rect(beefPosX + 30, beefPosY, 240, 40);
  rect(beefPosX - 30, beefPosY - 10, 260, 10);
  rect(beefPosX, beefPosY - 20, 180, 10);
  rect(beefPosX - 40, beefPosY, 60, 10);
  rect(beefPosX, beefPosY + 10, 40, 10);
  
  //highlights
  fill(223, 115, 115);
  
  rect(beefPosX - 30, beefPosY + 110, 90, 10);
  rect(beefPosX - 50, beefPosY + 100, 10, 10);
  rect(beefPosX + 110, beefPosY + 100, 20, 10);
  rect(beefPosX + 80, beefPosY + 110, 10, 10);

  pop();

}

