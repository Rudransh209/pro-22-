var starImg,bgImg,fairy;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyAni = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	fairy= createSprite(130,520);
	fairy.addAnimation("faire",fairyAni);
	fairy.scale=0.25;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;



    fairy.debug=true;
	fairy.setCollider("rectangle",500,10,250,250);

	

	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.isTouching(fairy)){

	Matter.Body.setStatic(starBody,true); 

}


  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){

     fairy.x=fairy.x+100;

	}


	if(keyCode === LEFT_ARROW){

		fairy.x=fairy.x-100;
   
	   }
	
	
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

   


	//writw code to move fairy left and right
	
}
