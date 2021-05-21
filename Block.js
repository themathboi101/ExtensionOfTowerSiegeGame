class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
    else{
      World.remove(world,this.body);
      push();
      this.visiblility= this.visiblility-5;
      tint(250,this.visiblility);

      var pos2=this.body.position
      image(this.image,pos2.x,pos2.y,this.width,this.height);
     pop();
    }
}
}