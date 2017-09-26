class EnemyBehavior extends Sup.Behavior {
  
  private health = 3;
  private hitTimer = 0;
  
  
  awake() {
    
  }

  update() {
    if (Sup.Input.wasKeyJustPressed("NONE")){
      this.actor.move(0,-0.1)}
       
  }
}



Sup.registerBehavior(EnemyBehavior);
