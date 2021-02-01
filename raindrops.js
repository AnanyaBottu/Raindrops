class Raindrop{
  constructor(x,y,width,height){
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
      
  }
  fall(speed){
    this.y=this.y+speed;
  }
  display(){
      fill("white");
      rect(this.x, this.y, this.width,this.height);
  }
}