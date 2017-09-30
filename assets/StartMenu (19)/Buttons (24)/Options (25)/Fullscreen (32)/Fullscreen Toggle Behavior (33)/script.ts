class FullscreenOptionBehavior extends Sup.Behavior {
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
    
    let ap = this.actor.getChildren();
    for (let a of ap){
      Sup.log(a.getName());
    }
    
    if (this.actor.getChild("Checkbox").spriteRenderer.getAnimation() === "Unchecked"){
      this.actor.getChild("Checkbox").spriteRenderer.setAnimation("Checked");
      Sup.Input.goFullscreen();
    } else {
      this.actor.getChild("Checkbox").spriteRenderer.setAnimation("Unchecked");
      Sup.Input.exitFullscreen();
    }
  }
  update() {
    
  }
}
Sup.registerBehavior(FullscreenOptionBehavior);
