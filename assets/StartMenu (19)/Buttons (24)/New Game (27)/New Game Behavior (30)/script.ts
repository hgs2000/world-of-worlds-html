class NewGameBehavior extends Sup.Behavior {
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
    Sup.loadScene("Tests/Test Zone")
  }
  
  update() {
    
  }
}
Sup.registerBehavior(NewGameBehavior);
