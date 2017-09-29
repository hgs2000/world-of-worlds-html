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
    this.actor.getChild("Fullscreen").setVisible(true);
    this.actor.getParent().getChildren().forEach(function (a){
      a.setVisible(false);
    });
    this.actor.setVisible(true);
    //this.actor.getParent().getChild("Camera").camera = this.actor.getParent().getParent().getChild("Option Menu").getChild("Camera").camera;
    this.actor.getParent().getParent();
  }
  
}
Sup.registerBehavior(OptionBtnBehavior);
