class FPSBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    //Sup.setInterval(1, function (){this.actor.textRenderer.setText(Sup.Game.getFPS())});
    Sup.setInterval(1, function (){Sup.log(Sup.Game.getFPS())});
    
  }
}
Sup.registerBehavior(FPSBehavior);
