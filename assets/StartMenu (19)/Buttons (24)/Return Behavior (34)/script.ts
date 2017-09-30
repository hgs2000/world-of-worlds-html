class ReturnBehavior extends Sup.Behavior {
  awake() {
    
    this.actor.fMouseInput.emitter.on("mouseEnter", () => {
      Sup.log("Entrou no botão "+ this.actor.getName());
    });
    this.actor.fMouseInput.emitter.on("mouseExit", () => {
      Sup.log("Saiu do botão "+ this.actor.getName());
    });
    this.actor.fMouseInput.emitter.on("leftClickPressed", () => {
      this.onClick();
    });
    
  }

  onClick(){
    this.actor.fMouseInput.getCameraComponent().actor.setPosition(0,0,0);
  }
  
}
Sup.registerBehavior(ReturnBehavior);
