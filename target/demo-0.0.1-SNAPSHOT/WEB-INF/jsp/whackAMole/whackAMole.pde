
var a = 195;
var b = 120;
var x = 200;
var y = 150;
var hit=false;
var HPX = 100;
var HPY = 100;
var score = 0;
var m2x = 100;
var m2y = 100;
var hit2 = false;
var framesPerSecond = 30;
var clock = framesPerSecond*10000;
var SPx = 100;
var SPy = 300;
var monsterTimer = 10;
var monsterTimer2 = 11;
var timerPosition = 362;
var hit3=false;
var smallMonX=300;
var smallMonY=300;
var speed=2;
var speedY=4;
var houseX =20;
var houseY=320;
var HC1;
var HC2;
var HC3;
var planeX=100;
var planeY=100;
var planeHit=false;

void draw() {

  background(207, 189, 242);

  //plane
  fill(255, 255, 255);
  noStroke();
  strokeWeight(2);
  bezier(planeX+10, planeY, planeX+40, planeY+10, planeX+40, planeY+30, planeX+10, planeY+40);
  rect(planeX-80, planeY, 100, 40, 15);
  stroke(0, 0, 0);
  bezier(planeX-40, planeY+20, planeX-20, planeY+70, planeX-10, planeY+70, planeX-10, planeY+20);
  noStroke();
  bezier(planeX-80, planeY+15, planeX-80, planeY-60, planeX-75, planeY-4, planeX-60, planeY);
  planeX+=1;
  planeY+=1/2;
  if (planeX>1000) {
    planeX=0;
    planeY=100;
  }

  if (mouseIsPressed&&mouseX>planeX-60&&mouseX<planeX+40&&mouseY>planeY&&mouseY<planeY+40) {
    score=score-3;
  }
   var drawHouse= function(houseX, HC1, HC2, HC3) {
    strokeWeight(2);
    stroke(168, 3, 3);

    //walls
    fill(HC1, HC2, HC3);
    rect(houseX, houseY, 70, 80);

    //roof
    stroke(0, 0, 0);
    fill(0, 0, 0);
    triangle(houseX, houseY, houseX+70, houseY, houseX+35, houseY-20);
    //door
    stroke(156, 92, 156);
    fill(138, 95, 121);
    rect(houseX+35, houseY+35, 25, 45);

    //windows
    stroke(47, 41, 20);
    fill(250, 249, 247);
    rect(houseX+5, houseY+5, 22, 22);
    fill(138, 235, 191);
    rect(houseX+9, houseY+9, 5, 5);
    rect(houseX+18, houseY+9, 5, 5);
    rect(houseX+9, houseY+18, 5, 5);
    rect(houseX+18, houseY+18, 5, 5);
  };
  var XX=10;
  while (XX<394) {
    drawHouse(XX, 320, 47, 41, 20);
    XX+=77;
  }


  var drawGrass=function(grassX) {
    strokeWeight(3);
    stroke(60, 173, 16);
    fill(27, 143, 21);
    triangle(grassX, 380, grassX-10, 400, grassX+10, 400);
  };

  var X=10;
  while (X<400) {
    drawGrass(X, 380);
    X+=20;
  }
  if (frameCount>speed*30&&frameCount<speedY*30) {

    //small monster
    strokeWeight(2);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    ellipse(smallMonX+50, smallMonY-50, 30, 30);
    if (mouseIsPressed&&mouseX>smallMonX+35&&mouseX<smallMonX+65&&mouseY>smallMonY-65&&mouseY<smallMonY-35) {
      score += 100;
      hit3=true;
      speed+=0.05;
      speedY+=0.05;
    }
  }

  if (hit3) {
    smallMonX=random(50, 350);
    smallMonY=random(50, 350);
    hit3= false;
  }

  /*if (smallMonX>345){
   speed=speed-36;
   }
   if(smallMonX<-30){
   speed+=36;
   }
   if(smallMonY>385){
   speedY=speedY-4;
   
   }
   smallMonX+=speed;
   smallMonY+=speed;//Y*/


  if (mouseIsPressed) {
    a = random(185, 205);
    b = random(110, 130);
  }
  if (hit) {
    x = random(100, 350);
    y = random(100, 350);
    hit= false;
  }

  if (hit2) {
    m2x = random(80, 350);
    m2y = random(80, 350);
    hit2 = false;
  }

  strokeWeight(5);
  stroke(176, 30, 30);


  if (clock>0) {
    clock = clock - (framesPerSecond);
  }

  //cheeks
  noStroke();
  fill(124, 143, 50);
  ellipse(x-40, y-5, 50, 50);
  ellipse(x + 30, y-5, 50, 50);

  //chin
  ellipse(x-5, y, 75, 75);

  //forehead
  rect(x-40, y-60, 70, 70);
  stroke(0, 0, 0);
  noFill();

  //teeth
  noStroke();
  fill(240, 250, 120);
  triangle(x-40, y, x-10, y, x-25, y+20);
  triangle(x +30, y, x, y, x +15, y +20);

  //mouth
  strokeWeight(4);
  stroke(8, 92, 14);
  line(x-50, y, x +40, y);

  //eye
  strokeWeight(3);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  ellipse(x-5, y-30, 35, 35);
  fill(0, 0, 0);
  ellipse(a=x-5, b=y-30, 10, 10);

  //horns
  noStroke();
  fill(179, 175, 145);
  triangle(x-40, y-60, x-15, y-60, x-30, y-95);
  triangle(x+5, y-60, x+30, y-60, x+20, y-95);

  //new monster body
  fill(237, 142, 196);
  ellipse(m2x, m2y, 60, 60);
  rect(m2x-30, m2y, 60, 25);

  //new monster legs
  ellipse(m2x-20, m2y+28, 20, 20);
  ellipse(m2x, m2y+28, 20, 20);
  ellipse(m2x+20, m2y+28, 20, 20);

  //new monster eyes
  fill(255, 255, 255);
  ellipse(m2x-10, m2y-10, 17, 17);
  ellipse(m2x+10, m2y-10, 17, 17);
  fill(0, 0, 0);
  ellipse(m2x-10, m2y-10, 10, 10);
  ellipse(m2x+10, m2y-10, 10, 10);

  if (mouseIsPressed) { 
    if (mouseX>(x-65)) {
      if (mouseX<(x+55)) {
        if (mouseY>(y-60)) {
          if (mouseY<(y+37)) {
            if (clock>0) {
              hit=true; 
              score =score + 5;
            }
          }
        }
      }
    }
  }       

  if (mouseIsPressed) {
    if (mouseX>(m2x-25)) {
      if (mouseX<(m2x+25)) {
        if (mouseY>(m2y-25)) {
          if (mouseY<(m2y+38)) {
            if (clock>0) {
              hit2=true;
              score = score +10;
            }
          }
        }
      }
    }
  }

  //score
  fill(25, 150, 255);
  textSize(55);
  text(score, 10, 65);

  text(clock, 270, 65);

  HPX = mouseX;
  HPY = mouseY;


  noStroke();
  fill(207, 189, 242);
  rect(362, -23, 100, 100);

  //hammer body(front)
  fill(194, 130, 81);
  strokeWeight(7);
  stroke(112, 52, 6);
  line(HPX, HPY-25, HPX-15, HPY-25);
  line(HPX, HPY+25, HPX-15, HPY+25);
  ellipse(HPX-15, HPY, 50, 50);

  //wooden hammer(handle)
  strokeWeight(20);            
  stroke(112, 52, 6);
  line(HPX, HPY, HPX, HPY+55);

  //wooden hammer(handle inside)
  strokeWeight(7);
  stroke(194, 130, 81);
  line(HPX, HPY, HPX, HPY+55);

  //wooden hammer(body)
  stroke(112, 52, 6);
  ellipse(HPX, HPY, 50, 50); 

  if (clock === 0) {
    fill(255, 0, 0);
    background(0, 0, 0);
    textSize(40);
    text("Time's up", 100, 150);
    text("Well done you got", 50, 200);
    text(score, 100, 250);
    text("points", 201, 250);
  }
};