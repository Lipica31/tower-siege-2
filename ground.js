
class Ground{

  constructor(){
      var options={
          isStatic : true
        }
      
        this.body = Bodies.rectangle(450,390,900,20,options)
        World.add(world,this.body);
  }
  display(){
      noStroke();
      fill(188,67,67);
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,900,20);
  }
}
