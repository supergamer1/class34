const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var boll, slingshot;

var gameState = "onSling";
var score = 0



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    boll = new Boll(200,200)
  

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,320,70,70);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(boll.body,{x:550, y:100});
}

function draw(){
 
        background("blue");      
        
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    boll.display();
    box5.display();
  
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    
        Matter.Body.setPosition(boll.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
   // slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
      slingshot.attach(bird.body);
    }
}


/*
Inst 1
Inst 2 - await API 
Inst 3
Inst 4
Inst 5
Inst 6
Inst 7
Inst 8





*/