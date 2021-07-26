var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["09645a9b-cad9-4bb2-b2cb-2c73571f1a5a","28eb815f-b3e1-4278-bc9e-67d58fb159ee","b7c63382-d569-4430-8929-fd87236229dd","ab1aafed-cfaf-4f1b-860a-ca6f90fec368","8c475e95-747b-4136-b49f-53123d0ec6ec"],"propsByKey":{"09645a9b-cad9-4bb2-b2cb-2c73571f1a5a":{"name":"blue_hanbok_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Y9W1buVxqSA0MQdQvJOZmb2LYwFcmuZX/category_people/blue_hanbok.png","frameSize":{"x":167,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"Y9W1buVxqSA0MQdQvJOZmb2LYwFcmuZX","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Y9W1buVxqSA0MQdQvJOZmb2LYwFcmuZX/category_people/blue_hanbok.png"},"28eb815f-b3e1-4278-bc9e-67d58fb159ee":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"b7c63382-d569-4430-8929-fd87236229dd":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"ab1aafed-cfaf-4f1b-860a-ca6f90fec368":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"8c475e95-747b-4136-b49f-53123d0ec6ec":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("blue_hanbok_1");
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("car_green_1");

  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("car_blue_1");
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("car_black_1");
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("car_red_1");
 
//add the velocity to make the car move.
car1.velocityY = 3;
car2.velocityY = -3;
car3.velocityY = 3;
car4.velocityY = -3;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);

car2.bounceOff(boundary1);
car2.bounceOff(boundary2);

car3.bounceOff(boundary1);
car3.bounceOff(boundary2);

car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

car2.scale = 0.3;
car1.scale = 0.3;
car3.scale = 0.3;
car4.scale = 0.3;
sam.scale = 0.1;


//Add the condition to make the sam move left and right
if(keyDown("left")){
  sam.x = sam.x-5;
}

if(keyDown("right")){
  sam.x = sam.x+5;
}

//Add the condition to reduce the life of sam if it touches the car.
  if(sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)){
    life = life-1; 
    sam.x = 20;
    sam.y = 190;
  }
  
  
  
 drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
