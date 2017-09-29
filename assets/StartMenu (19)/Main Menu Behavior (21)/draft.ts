class MainMenuBehavior extends Sup.Behavior {

  g : Game;
  
  runonce: number = 0;
  cam: Sup.Camera = this.actor.camera;
  
  update() {
    let ray = new Sup.Math.Ray();
    ray.setOrigin(0,0,0);
    ray.setDirection(0,0,0);
    
    let hit = ray.intersectActors(this.actor.getChildren());
    let {x, y} = Sup.Input.getMousePosition();
    x = (x + 1) / 2 * Sup.Input.getScreenSize().x;
    y = (1 - (y + 1) / 2) * Sup.Input.getScreenSize().y;
    //Sup.log(x);
    //Sup.log(y);
    
    /*for (let ht of hit){
      Sup.log('Ator ${ht.actor.getName()} foi atingido pelo ray à distancia ${ht.distance}');
    }*/
    
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
