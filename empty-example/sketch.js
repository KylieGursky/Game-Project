function setup() {
  createCanvas(1100, 1000);
}

function draw(){
	background(220,100,3);
  face(100,100)

}

function face(x,y){
  //x=250 y=200
  fill("blue")
  rect(x,y,x-50,y-50)
  fill("yellow");
  ellipse(x+80,y+100,x-150,y-100);
  fill("black")
  ellipse(x+250,y+90,50,50)
  ellipse(x+110,y+90,50,50)
  line(x+70,y+125,x+105,y+125)
}
