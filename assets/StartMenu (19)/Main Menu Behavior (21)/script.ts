class MainMenuBehavior extends Sup.Behavior {

  runonce: number = 0;
    
  update() {
    let ray = new Sup.Math.Ray();
    ray.setOrigin(0,0,0);
    ray.setDirection(0,0,0);
    
    let hit = ray.intersectActors(this.actor.getChildren());
    let {x, y} = Sup.Input.getMousePosition();
    x = (x + 1) / 2 * Sup.Input.getScreenSize().x;
    y = (1 - (y + 1) / 2) * Sup.Input.getScreenSize().y;
    
    if (this.runonce !== 1){
      Sup.log("Log:");
      Sup.log(ray.getOrigin());
      this.runonce = 1;
    }
    
    
    if (Sup.Input.wasMouseButtonJustPressed(0)){
      Sup.log("Clique");
    }
    
    
  }
}
Sup.registerBehavior(MainMenuBehavior);
