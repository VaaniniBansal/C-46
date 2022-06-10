const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var a1, ground;
var m1;

function preload(){
  spaceshipDark=loadImage("images/spaceship dark.png");

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    a1= new Astro(100,20,50,100);
    ground= new Ground(800,height,1600,29);
   // m1= new Maze(width/2,600,width,100);
    m1= new Ground(100,100,1000,10);
}                  

function draw(){
    background(spaceshipDark);
    Engine.update(engine);
    a1.display();
    ground.display();
    m1.display();
}