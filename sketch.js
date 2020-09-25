var bullet,wall,thickness;
var weight,speed;
function setup (){
createCanvas(1600,400)
thickness=random(22,83)
speed = random(223,321)
weight = random(30,52)
wall= createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(0,0,250)
bullet = createSprite (50,200,50,50)
bullet.velocityX = speed ;


}
function draw (){
background(0)
if(hascollided(bullet,wall)){



if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
if(damage>10)
{
wall.shapeColor=color(255,0,0);
}

if (damage<10)
{
   wall.shapeColor=color(0,255,0)
}
}
}
drawSprites();
}
function hascollided (lbullet,lwall){
bulletRightEdge=lbullet.x+bullet.width
wallLeftEdge=lwall.x
if(bulletRightEdge>= wallLeftEdge){
return true ;



}
return false ;
}