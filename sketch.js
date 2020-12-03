var jbullett,bullet,bg,astro,aimg;
var jedi,jedin,jedis,jedie,jediw,jedine,jedinw,jedise,jedisw;
var lowstd1,lowstd2,lowstd3,sss1,sss2,sss3,hdv1,hdv2,hdv3;
var lowstdd1,lowstdd2,lowstdd3,astrod1,astrod2,astrod3,ssss1,ssss2,ssss3,hdvs1,hdvs2,hdvs3,bulle;
var lowstd,lowstdn,lowstds,lowstde,lowstdw,lowstdne,lowstdnw,lowstdse,lowstdsw;
var supersonicshipn,supersonicshipe,supersonicshipw,supersonicships,supersonicshipne,supersonicshipnw,supersonicshipse,supersonicshipsw;
var hdvn,hdve,hdvw,hdvs,hdvne,hdvnw,hdvse,hdvsw;
//var lr;
var edge;
var score = 300;
function preload(){
  jedin = loadImage("jedi ship n.png");
  jedis = loadImage("jedi ship s.png");
  jedie = loadImage("jedi ship e.png");
  jediw = loadImage("jedi ship w.png");
  jedine = loadImage("jedi ship ne.png");
  jedinw = loadImage("jedi ship nw.png");
  jedise = loadImage("jedi ship se.png");
  jedisw = loadImage("jedi ship sw.png");
  lowstdn = loadImage("lowstdship n.png");
  lowstds = loadImage("lowstdship s.png");
  lowstde = loadImage("lowstdship e.png");
  lowstdw = loadImage("lowstdship w.png");
  lowstdne = loadImage("lowstdship ne.png");
  lowstdnw = loadImage("lowstdship nw.png");
  lowstdse = loadImage("lowstdship se.png");
  lowstdsw = loadImage("lowstdship sw.png");
  supersonicshipn = loadImage("supersonic ship n.png");
  supersonicships = loadImage("supersonic ship s.png");
  supersonicshipe = loadImage("supersonic ship e.png");
  supersonicshipw = loadImage("supersonic ship w.png");
  supersonicshipne = loadImage("supersonic ship ne.png");
  supersonicshipnw = loadImage("supersonic ship nw.png");
  supersonicshipse = loadImage("supersonic ship se.png");
  supersonicshipsw = loadImage("supersonic ship sw.png");
  hdvn = loadImage("hdv n.png");
  hdvs = loadImage("hdv s.png");
  hdve = loadImage("hdv e.png");
  hdvw = loadImage("hdv w.png");
  hdvne = loadImage("hdv ne.png");
  hdvnw = loadImage("hdv nw.png");
  hdvse = loadImage("hdv se.png");
  hdvsw = loadImage("hdv sw.png");


  bg = loadImage("space bg.jpg");
  aimg = loadImage("astro.png");
  jbullett = loadImage("jbullet.png")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-105);
 // lr = createSprite((displayWidth-20)/2,(displayHeight-20)/2,20,800)
  jedi = createSprite(displayWidth/2,displayHeight/2,30,30)
  jedi.debug = true
  jedi.addImage(jedie);
  jedi.scale = 0.05
  jedi.setCollider("circle",0,0,1000)
  lowstdd1 = new Group();
  lowstdd2 = new Group();
  lowstdd3 = new Group();
  astrod1 = new Group();
  astrod2 = new Group();
  astrod3 = new Group();
  astrod4 = new Group();
  ssss2 = new Group();
  ssss3 = new Group();
  ssss1 = new Group();
  hdvs2 = new Group();
  hdvs3 = new Group();
  hdvs1 = new Group();
  bulle = new Group();
}

function draw() {
  background(bg);  
 edge = createEdgeSprites();
 jedi.velocityX = 0
 jedi.velocityY = 0
  if(keyDown("w")){
    jedi.velocityY = -3
    jedi.addImage(jedin);
  }
    if(keyDown("s")){
    jedi.velocityY = 3
    jedi.addImage(jedis);
  }
    if(keyDown("a")){
    jedi.velocityX = -3
    jedi.addImage(jediw);
  }
    if(keyDown("d")){
    jedi.velocityX = 3
    jedi.addImage(jedie);
  }
   if(keyDown("w")&&(keyDown("a"))){
    jedi.addImage(jedinw);
  }
    if(keyDown("w")&&(keyDown("d"))){
    jedi.addImage(jedine);
  }
    if(keyDown("s")&&(keyDown("a"))){
    jedi.addImage(jedisw);
  }
    if(keyDown("s")&&(keyDown("d"))){
    jedi.addImage(jedise);
  }
    if(keyDown("s")&&(keyDown("d"))&&(keyDown("space"))){
    jedi.velocityX = 5
    jedi.velocityY = 5
  }
    if(keyDown("s")&&(keyDown("a"))&&(keyDown("space"))){
    jedi.velocityX = -5
    jedi.velocityY = 5
  }
    if(keyDown("w")&&(keyDown("d"))&&(keyDown("space"))){
    jedi.velocityX = 5
    jedi.velocityY = -5
  }
    if(keyDown("w")&&(keyDown("a"))&&(keyDown("space"))){
    jedi.velocityX = -5
    jedi.velocityY = -5
  }
    if(keyDown("s")&&(keyDown("space"))){
    //jedi.velocityX = 5
    jedi.velocityY = 5
  }
    if(keyDown("w")&&(keyDown("space"))){
    //jedi.velocityX = 5
    jedi.velocityY = -5
  }
    if(keyDown("d")&&(keyDown("space"))){
    jedi.velocityX = 5
    //jedi.velocityY = 5
  }
    if(keyDown("a")&&(keyDown("space"))){
    jedi.velocityX = -5
    //jedi.velocityY = 5
  }
    if (keyDown("a")&&keyDown("LEFT_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityX = -6
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bullet.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bullet.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bullet.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bullet.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bullet.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bullet.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bullet.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bullet.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bullet.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("s")&&keyDown("DOWN_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,5,20)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityY = 6
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
          if (bullet.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("w")&&keyDown("UP_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,5,20)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityY = -6
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("d")&&keyDown("RIGHT_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityX = 6
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("a")&&keyDown("w")&&keyDown("LEFT_ARROW")&&keyDown("UP_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityX = -6
    bullet.velocityY = -6
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("a")&&keyDown("s")&&keyDown("LEFT_ARROW")&&keyDown("DOWN_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityX = -6
    bullet.velocityY = 6
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bullet.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("d")&&keyDown("s")&&keyDown("RIGHT_ARROW")&&keyDown("DOWN_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityX = 6
    bullet.velocityY = 6
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("d")&&keyDown("w")&&keyDown("RIGHT_ARROW")&&keyDown("UP_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityX = 6
    bullet.velocityY = -6
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("LEFT_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityX = -6
    jedi.addImage(jediw)
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("DOWN_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityY = 6
    jedi.addImage(jedis)
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("UP_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityY = -6
    jedi.addImage(jedin)
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if (keyDown("RIGHT_ARROW")){
    if (frameCount% 10 === 0){
    bullet = createSprite(jedi.x,jedi.y,20,5)
    bullet.addImage(jbullett)
    bullet.scale = 0.04
    bullet.velocityX = 6
    jedi.addImage(jedie)
    bullet.debug = true
    bullet.lifetime = 500
    bullet.setCollider("circle",0,0,250)
    bulle.add(bullet);
      if (bulle.isTouching(lowstdd1)){
    lowstdd1.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd2)){
    lowstdd2.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(lowstdd3)){
    lowstdd3.destroyEach()
    score = score+20
  }
  if (bulle.isTouching(ssss1)){
    ssss1.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss2)){
    ssss2.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(ssss3)){
    ssss3.destroyEach()
    score = score+80
  }
  if (bulle.isTouching(hdvs1)){
    hdvs1.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs2)){
    hdvs2.destroyEach()
    score = score+180
  }
  if (bulle.isTouching(hdvs3)){
    hdvs3.destroyEach()
    score = score+180
  }
    }
  }
    if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(lowstdd1)){
    lowstdd1.destroyEach();
    score = score+50
  }

    if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(lowstdd2)){
    lowstdd2.destroyEach();
    score = score+50
  }
    if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(lowstdd3)){
    lowstdd3.destroyEach();
    score = score+50
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(ssss1)){
    ssss1.destroyEach();
    score = score+80
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(ssss2)){
    ssss2.destroyEach();
    score = score+80
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(ssss3)){
    ssss3.destroyEach();
    score = score+80
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(hdvs1)){
    hdvs1.destroyEach();
    score = score+120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(hdvs2)){
    hdvs2.destroyEach();
    score = score+120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(hdvs3)){
    hdvs3.destroyEach();
    score = score+120
  }
    if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))){
    score = score-1
  }
   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(lowstdd3)){
   // lowstdd3.destroyEach();
    score = score-20
  }
   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(lowstdd2)){
  //  lowstdd2.destroyEach();
    score = score-20
  }
   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(lowstdd1)){
   // lowstdd1.destroyEach();
    score = score-20
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(ssss1)){
   // lowstdd1.destroyEach();
    score = score-30
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(ssss2)){
   // lowstdd1.destroyEach();
    score = score-30
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(ssss3)){
   // lowstdd1.destroyEach();
    score = score-30
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(hdvs1)){
   // lowstdd1.destroyEach();
    score = score-60
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(hdvs2)){
   // lowstdd1.destroyEach();
    score = score-60
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(hdvs3)){
   // lowstdd1.destroyEach();
    score = score-60
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(astrod1)){
   // lowstdd1.destroyEach();
    score = score-120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(astrod2)){
   // lowstdd1.destroyEach();
    score = score-120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(astrod3)){
   // lowstdd1.destroyEach();
    score = score-120
  }

   if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&jedi.isTouching(astrod4)){
   // lowstdd1.destroyEach();
    score = score-120
  }

  if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(astrod1)){
    astrod1.destroyEach();
    score = score+180
  }

  if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(astrod2)){
    astrod2.destroyEach();
    score = score+180
  }

  if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(astrod3)){
    astrod3.destroyEach();
    score = score+180
  }

  if((keyDown("a")||keyDown("w")||keyDown("s")||keyDown("d"))&&(keyDown("space"))&&jedi.isTouching(astrod4)){
    astrod4.destroyEach();
    score = score+180
  }
  if(jedi.isTouching(lowstdd1)){
    score = score-1
  }
    if(jedi.isTouching(lowstdd2)){
    score = score-1
  }
    if(jedi.isTouching(lowstdd3)){
    score = score-1
  }
    if(jedi.isTouching(ssss1)){
    score = score-5
  }
    if(jedi.isTouching(ssss2)){
    score = score-5
  }
    if(jedi.isTouching(ssss3)){
    score = score-5
  }
    if(jedi.isTouching(hdvs1)){
    score = score-10
  }
    if(jedi.isTouching(hdvs2)){
    score = score-10
  }
    if(jedi.isTouching(hdvs3)){
    score = score-10
  }
    if(jedi.isTouching(astrod1)){
    score = score-50
  }
    if(jedi.isTouching(astrod2)){
    score = score-50
  }
    if(jedi.isTouching(astrod3)){
    score = score-50
  }
    if(jedi.isTouching(astrod4)){
    score = score-50
  }

  
     /* if (lowstdd1.velocityX > 0){
        lowstdd1.addImage(lowstde)
      }
      else if(lowstdd1.velocityX < 0){
        lowstdd1.addImage(lowstdw)
      }*/


  

    jedi.collide(edge)
    lowstdd1.bounceOff(edge)
    lowstdd2.bounceOff(edge)
    lowstdd3.bounceOff(edge)
    ssss1.bounceOff(edge)
    ssss2.bounceOff(edge)
    ssss3.bounceOff(edge)
    hdvs1.bounceOff(edge)
    hdvs2.bounceOff(edge)
    hdvs3.bounceOff(edge)
  lowstd();
  sss();
  hdv();
  troieed();
  drawSprites();
  textSize(80);
  fill("white")
  text(score,displayWidth-500,100) 

  
}

  function lowstd(){
    if(frameCount %150===0){
      var x1 = 1
      var x2 = displayWidth-20
      var y1 = 1
      var y2 = displayHeight-105
      var vy = 0;
      var vx = 0;
      var ewx = (displayWidth-20)/2;
      var nsy = (displayHeight-105)/2;
      if(jedi.x>ewx &&jedi.y>nsy){
        x2 = ewx
        y2 = nsy
        //lowstd x n y
        vy = 3
        vx = 3
      }
      else if (jedi.x>ewx&&jedi.y<nsy){
        y1 = nsy
        x2 = ewx
        vy = -3
        vx = 3
      }
      else if(jedi.x<ewx&&jedi.y<nsy){
        x1 = ewx
        y1 = nsy
        vy = -3
        vx = -3
      }
      else if (jedi.x<ewx&&jedi.y>nsy){
        x1 = ewx
        y2 = nsy
        vy = 3
        vx = -3
      }

    
      lowstd1 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      lowstd1.addImage(lowstdn)
      lowstd1.scale = 0.1
     lowstdd1.add(lowstd1);
      lowstd2 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      lowstd2.addImage(lowstdn)
      lowstd2.scale = 0.1
     lowstdd2.add(lowstd2);
      lowstd3 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      lowstd3.addImage(lowstdn)
      lowstd3.scale = 0.1
     lowstdd3.add(lowstd3);
      lowstd1.debug = true
      lowstd2.debug = true
      lowstd3.debug = true
      lowstd1.velocityY = vy
      lowstd2.velocityY = vy
      lowstd3.velocityY = vy
      lowstd1.velocityX = vx
      lowstd2.velocityX = vx
      lowstd3.velocityX = vx


  /*   if(jedi.y>lowstd1.y){
      lowstd1.y +=10
    }
   if(jedi.y>lowstd2.y){
      lowstd2.y +=10
    }
   if(jedi.y>lowstd3.y){
      lowstd3.y +=10
    }*/

    }
 
  }
    function sss(){
    if(frameCount %350===0&&score>200){
      var x1 = 1
      var x2 = displayWidth-20
      var y1 = 1
      var y2 = displayHeight-105
      var vy = 0;
      var vx = 0;
      var ewx = (displayWidth-20)/2;
      var nsy = (displayHeight-105)/2;
      if(jedi.x>ewx &&jedi.y>nsy){
        x2 = ewx
        y2 = nsy
        //lowstd x n y
        vy = 6
        vx = 6
      }
      else if (jedi.x>ewx&&jedi.y<nsy){
        y1 = nsy
        x2 = ewx
        vy = -6
        vx = 6
      }
      else if(jedi.x<ewx&&jedi.y<nsy){
        x1 = ewx
        y1 = nsy
        vy = -6
        vx = -6
      }
      else if (jedi.x<ewx&&jedi.y>nsy){
        x1 = ewx
        y2 = nsy
        vy = 6
        vx = -6
      }

      sss1 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      sss1.addImage(supersonicshipn)
      sss1.scale = 0.2
     ssss1.add(sss1);
      sss2 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      sss2.addImage(supersonicshipn)
      sss2.scale = 0.2
     ssss2.add(sss2);
      sss3 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      sss3.addImage(supersonicshipn)
      sss3.scale = 0.2
     ssss3.add(sss3);
      sss1.debug = true
      sss2.debug = true
      sss3.debug = true
      sss1.velocityY = vy
      sss2.velocityY = vy
      sss3.velocityY = vy
      sss1.velocityX = vx
      sss2.velocityX = vx
      sss3.velocityX = vx
  
  /*   if(jedi.y>sss1.y){
      sss1.y +=10
    }
   if(jedi.y>sss2.y){
      sss2.y +=10
    }
   if(jedi.y>sss3.y){
      sss3.y +=10
    }

    }*/
 
    }
  }
     
    function hdv(){
    if(frameCount %350===0&&score>500){
      var x1 = 1
      var x2 = displayWidth-20
      var y1 = 1
      var y2 = displayHeight-105
      var vy = 0;
      var vx = 0;
      var ewx = (displayWidth-20)/2;
      var nsy = (displayHeight-105)/2;
      if(jedi.x>ewx &&jedi.y>nsy){
        x2 = ewx
        y2 = nsy
        //lowstd x n y
        vy = 2
        vx = 2
      }
      else if (jedi.x>ewx&&jedi.y<nsy){
        y1 = nsy
        x2 = ewx
        vy = -2
        vx = 2
      }
      else if(jedi.x<ewx&&jedi.y<nsy){
        x1 = ewx
        y1 = nsy
        vy = -2
        vx = -2
      }
      else if (jedi.x<ewx&&jedi.y>nsy){
        x1 = ewx
        y2 = nsy
        vy = 2
        vx = -2
      }

      hdv1 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      hdv1.addImage(hdvn)
      hdv1.scale = 0.2
     hdvs1.add(hdv1);
      hdv2 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      hdv2.addImage(hdvn)
      hdv2.scale = 0.2
     hdvs2.add(hdv2);
      hdv3 = createSprite(Math.round(random(x1,x2)),Math.round(random(y1,y2)),30,30)
      hdv3.addImage(hdvn)
      hdv3.scale = 0.2
     hdvs3.add(hdv3);
      hdv1.debug = true
      hdv2.debug = true
      hdv3.debug = true  
      hdv1.velocityY = vy
      hdv2.velocityY = vy
      hdv3.velocityY = vy
      hdv1.velocityX = vx
      hdv2.velocityX = vx
      hdv3.velocityX = vx
  
  /* if(jedi.y>hdv1.y){
      hdv1.y +=10
    }
   if(jedi.y>hdv2.y){
      hdv2.y +=10
    }
   if(jedi.y>hdv3.y){
      hdv3.y +=10
    }

    }*/
 
    }
  }
  function troieed(){
   
    if(frameCount %800===0){
      astroo1 = createSprite(-20,Math.round(random(1,800)),30,30)
      astroo1.addImage(aimg)
      astroo1.scale = 0.1
     astrod1.add(astroo1);
     astroo1.velocityY = Math.round(random(-2,2))
     astroo1.velocityX = 5
      astroo2 = createSprite(displayWidth+30,Math.round(random(1,800)),30,30)
      astroo2.addImage(aimg)
      astroo2.scale = 0.1
     astrod2.add(astroo2);
     astroo2.velocityY = Math.round(random(-2,2))
     astroo2.velocityX = -5
      astroo3 = createSprite(Math.round(random(1,1000)),-20,30,30)
      astroo3.addImage(aimg)
      astroo3.scale = 0.1
     astrod3.add(astroo3);
     astroo3.velocityX = Math.round(random(-2,2))
     astroo3.velocityY = 5
     astroo4 = createSprite(Math.round(random(1,1000)),displayHeight+30,30,30)
      astroo4.addImage(aimg)
      astroo4.scale = 0.1
     astrod4.add(astroo4);
     astroo4.velocityX = Math.round(random(-2,2))
     astroo4.velocityY = -5

    astroo1.lifetime = 250
    astroo2.lifetime = 250
    astroo3.lifetime = 250
    astroo4.lifetime = 250
  }
  }