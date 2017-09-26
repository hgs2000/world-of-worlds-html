class PlayerWalkBehavior extends Sup.Behavior {
  
  Facing = "down";
  
  awake() {
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
    
  }
  
  velocidade = 0.05;
  

  update() {
    
    
    
    if(Sup.Input.isKeyDown("W")){
      if (Sup.Input.isKeyDown("S")){
        this.actor.move(0,0,0);
        if (this.Facing === "down"){
          this.actor.spriteRenderer.setAnimation("Stop_Down");
        } else {
          this.actor.spriteRenderer.setAnimation("Stop_Up");
        }
      } else {
        if (Sup.Input.isKeyDown("A") && Sup.Input.isKeyDown("D")) {
          this.actor.move(0,0.1,0);
          this.Facing = "up";
          this.actor.spriteRenderer.setAnimation("Move_Up");
        }else if (Sup.Input.isKeyDown("A")) {
          this.actor.move(-0.1,0.1,0);
          this.Facing = "left";
          this.actor.spriteRenderer.setAnimation("Move_Left");
        } else if (Sup.Input.isKeyDown("D")) {
          this.actor.move(0.1,0.1,0);
          this.Facing = "right";
          this.actor.spriteRenderer.setAnimation("Move_Right");
        } else {
          this.actor.move(0,0.1,0);
          if (this.actor.spriteRenderer.getAnimation() !== "Move_Up"){
            this.actor.spriteRenderer.setAnimation("Move_Up");
            Sup.log("Animation set to move up")
          }
        }
        this.Facing = "up";
      }
    } else if(Sup.Input.isKeyDown("S")){
      if (Sup.Input.isKeyDown("A")){
        this.actor.move(-0.1,-0.1,0);
        this.Facing = "left";
        this.actor.spriteRenderer.setAnimation("Move_Left");
      } else if (Sup.Input.isKeyDown("D")){
        this.actor.move(0.1,-0.1,0);
        this.Facing = "right";
        this.actor.spriteRenderer.setAnimation("Move_Right");
      } else {
        this.actor.move(0,-0.1,0);
        this.actor.spriteRenderer.setAnimation("Move_Down");
        Sup.log("Animation set to move down")
      }
      this.Facing = "down";
    } else if(Sup.Input.isKeyDown("A")) {
        this.actor.move(-0.1,0,0);
        if (this.actor.spriteRenderer.getAnimation() !== "Move_Left"){
          this.actor.spriteRenderer.setAnimation("Move_Left");
          Sup.log("Animation set to move left")
          this.Facing = "left";
        }
    } else if(Sup.Input.isKeyDown("D")) {
      this.actor.move(0.1,0,0);
      if (this.actor.spriteRenderer.getAnimation() !== "Move_Right"){
        this.actor.spriteRenderer.setAnimation("Move_Right");
        Sup.log("Animation set to move Right")
        this.Facing = "right";
      }
    } else {
    switch (this.Facing){
      case "down":
        this.actor.spriteRenderer.setAnimation("Stop_Down");
        break;
      case "up":
        this.actor.spriteRenderer.setAnimation("Stop_Up");
        break;
      case "left":
        this.actor.spriteRenderer.setAnimation("Stop_Left");
        break;
      case "right":
        this.actor.spriteRenderer.setAnimation("Stop_Right")
        break;
      }
    }
  }
}
Sup.registerBehavior(PlayerWalkBehavior);
