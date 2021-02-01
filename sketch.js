var raindrops = [];

function setup() {
  createCanvas(displayWidth-10,displayHeight-120);
}

function draw() {
  background(0);

  if(frameCount % 1 === 0){
    var raindrop = new Raindrop(random(0, displayWidth), -500, random(3, 5), random(20, 50));
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(10);
    raindrops[i].display();
  }
}
