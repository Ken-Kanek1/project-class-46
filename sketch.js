


var edges;
var ground, groundImg;
var canvas;
var bg, bgImg;
var coin, coinImg;
var gem, gemImg;
var player, playerImg;
var npc, npcImg, npc2Img;
var sword, swordImg;
var npcGroup;

function preload(){

    bgImg = loadImage("./assets/background.jpg");
    coinImg = loadImage("./assets/coin.png");
    gemImg = loadImage("./assets/gem.png");
    playerImg = loadImage("./assets/knight2.png");
    npcImg = loadImage("./assets/npc.png");
    swordImg = loadImage("./assets/sword.png");
    groundImg = loadImage("./assets/ground.png");
    npc2Img = loadImage("./assets/npc2.png");

}

function setup(){

createCanvas(windowWidth, windowHeight);

npcGroup = new Group
  

bg = createSprite(displayWidth/2-220,displayHeight/2-140,20,20);
bg.addImage(bgImg);
bg.scale = 2.5;

player = createSprite(displayWidth-1150, 700, 50, 50);
 player.addImage(playerImg);
   player.scale = 0.1;
  // player.debug = true;
   //player.setCollider("rectangle",0,0,300,300);
   edges = createEdgeSprites();
   

   sword = createSprite(player.position.x,player.position.y + 30,50,50);
   sword.addImage(swordImg);
   sword.scale = 0.5;
   sword.debug = true;
   sword.setCollider("rectangle",0,0,100,100);

 

   ground = createSprite(200,880,400,20);
ground.addImage (groundImg);
ground.x = ground.width/2;
ground.visible = false;

}

function draw(){
    background(0);

    
   

    if (ground.x < 0){
      ground.x = ground.width/2;
      }
      if(keyDown("RIGHT_ARROW")){
        player.x = player.x+30
        sword.x = player.x
      }

      if(keyDown("LEFT_ARROW")){
        player.x = player.x-30
        sword.x = player.x
      }

      if(keyDown("SPACE")){
        player.y = player.y -30
        sword.y = player.y
      }

      if(keyDown("Q")&& sword.x > player.x - 80){
        sword.x -= 20
        sword.y -= 20

      }

      player.velocityY = player.velocityY + 0.5;

      sword.y = player.y;

      player.collide(ground);

     
        

     spawnNpc();

     if(npcGroup.collide(sword)){
        killNpc();

     }

    drawSprites();
}

function spawnNpc(){

  if (frameCount % 60 === 0){
   npc = createSprite(0,800,10,40);
   npc.velocityX = random(3, 7)

   rand = Math.round(random(1,2));
switch(rand){

  case 1: npc.addImage(npcImg); 
          break;
  case 2: npc.addImage(npc2Img);
          break;

  default: break;
}
npc.scale = random(0.3, 0.5);

npcGroup.add(npc);

npc.liftime = 1000;
}

}

function killNpc(){

  npc.remove();

}