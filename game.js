//control
var mode;

//player
var pX = 250;
var pY = 500;
var pWidth = 80;
var pHeight = 50;

//grills
var gX = 200;
var gY = 730;
var gWidth = 100;
var gHeight = 80;

//clouds
let leftCloudX = 70;
let rightCloudX = 200;

function setup() {
  mode = 0; //game hasn't started
  createCanvas(360, 800);  //standard phone sizing
  textAlign(CENTER);
  rectMode(CENTER);
  noStroke();

} //close setup

function game(){
  sunAndClouds();
  cloudAnimation();

} //close game

function draw() {
  startState();
} //close draw

function startState(){
  clear();
  
  if (mode==0) //only need to check value, not type
    background(0);
    fill(255);
    textSize(20);
    text("PRESS ENTER TO START", 185, 400);
  if (mode==1){
    game ();
  }
} //close startState

function keyPressed() {
  if (keyCode===ENTER)
    mode=1;
}

function sunAndClouds(){
  background(114, 186, 213);

  //right cloud
  circle(rightCloudX+50, 245, 70);
  circle(rightCloudX-15, 258, 35);
  circle(rightCloudX+20, 248, 60);
  circle(rightCloudX+80, 258, 30);

  //leftcloud
  circle(leftCloudX-15, 545, 70);
  circle(leftCloudX-45, 558, 30);
  circle(leftCloudX+20, 548, 60);
  circle(leftCloudX+50, 558, 35);
 
}

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

  if ( leftCloudX  > 370) {
    leftCloudX = -80;
  }
 
 if ( rightCloudX  < -80) {
    rightCloudX = 540;
  }
}
