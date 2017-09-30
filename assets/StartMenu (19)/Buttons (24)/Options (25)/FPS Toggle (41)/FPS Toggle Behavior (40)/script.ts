class FPSToggleBehavior extends Sup.Behavior {
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
    if (this.actor.getName() === "Checkbox"){
      this.switcher(this.actor);
    } else {
      this.switcher(this.actor.getParent().getChild("Checkbox"))
    }
  }
  
  switcher(a: Sup.Actor){
    if (a.spriteRenderer.getAnimation() === "Checked"){
        a.spriteRenderer.setAnimation("Unchecked");
        this.actor.fMouseInput.getCameraComponent().actor.getChild("FPS").setVisible(false);
      } else {
        a.spriteRenderer.setAnimation("Checked");
        this.actor.fMouseInput.getCameraComponent().actor.getChild("FPS").setVisible(true);
      }
  }
  
  /*
  update() {
    if (this.actor.getName() === "Checkbox"){
      if (this.actor.spriteRenderer.getAnimation() === "Checked"){
        this.actor.spriteRenderer.setAnimation("Unchecked");
      } else {
        this.actor.spriteRenderer.setAnimation("Checked");
      }
    }
  }*/
}
Sup.registerBehavior(FPSToggleBehavior);
