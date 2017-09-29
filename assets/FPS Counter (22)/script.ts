class FPSBehavior extends Sup.Behavior {
  update() {
    
    this.actor.textRenderer.setText("FPS: "+ Sup.Game.getFPS());
  }
  
}
Sup.registerBehavior(FPSBehavior);
