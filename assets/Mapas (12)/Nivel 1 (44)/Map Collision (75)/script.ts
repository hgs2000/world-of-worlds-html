class MapCollisionBehavior extends Sup.Behavior {
  
  awake() {
    
  }

  update() {
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
  }
}
Sup.registerBehavior(MapCollisionBehavior);
