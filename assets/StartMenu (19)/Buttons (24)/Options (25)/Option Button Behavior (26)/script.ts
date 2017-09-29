class OptionBtnBehavior extends Sup.Behavior {
  awake() {
    
    this.actor.fMouseInput.emitter.on("mouseEnter", () => {
      Sup.log("Entrou no botão OPT");
    });
    this.actor.fMouseInput.emitter.on("mouseExit", () => {
      Sup.log("Saiu do botão OPT");
    });
    this.actor.fMouseInput.emitter.on("leftClickPressed", () => {
      this.onClick();
    });
    
    
  }

  onClick(){
    //Game.cam.actor.move(10,0,0);
    //Sup.log(Game.cam.getFOV);
    this.actor.getParent().getChildren().forEach(function (a){
      a.setVisible(false);
    });
    this.actor.getChild("Fullscreen").setVisible(true);
    
  }
  
}
Sup.registerBehavior(OptionBtnBehavior);
