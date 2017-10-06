class PlayerWalkBehavior extends Sup.Behavior {
  
  Facing = "down";
  
  awake() {
  }
  
  velocidade = 0.05;
  isMovingVert = false;
  isMovingHor = false;

  update() {
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.getActor("Mapas/Nivel 1/Mapa Lvl 1").arcadeBody2D);
    this.actor.arcadeBody2D.setVelocityMax(0.1, 0.1);
    this.actor.arcadeBody2D.setVelocityMin(-0.1, -0.1);
    let velocity = this.actor.arcadeBody2D.getVelocity();
    velocity.x = 0;
    velocity.y = 0;
    let direcao;
    
    if (!Sup.Input.isKeyDown("NONE")){
      if(Sup.Input.isKeyDown("W")){
        velocity.y += this.velocidade;
        this.Facing = "up";
        this.isMovingVert = true;
      } 
      if(Sup.Input.isKeyDown("S")){
        velocity.y += -this.velocidade;
        this.Facing = "down";
        this.isMovingVert = true;
        if (this.actor.arcadeBody2D.getTouches().bottom){
          Sup.log("Toque");
          velocity.y = 0;
        }
      }
      if(Sup.Input.isKeyDown("A")){
        velocity.x += -this.velocidade;
        this.Facing = "left";
        this.actor.spriteRenderer.setAnimation("Move_Left");
        this.isMovingHor = true;
      } 
      if(Sup.Input.isKeyDown("D")){
        velocity.x += this.velocidade;
        this.Facing = "right";
        this.actor.spriteRenderer.setAnimation("Move_Right");
        this.isMovingHor = true;
      }
    } else {
      velocity.x = 0;
      velocity.y = 0;
    }

    direcao = this.getDirecao(velocity);
    Sup.log(direcao);
    
    /*if(this.isMovingVert){
       velocity.x = 0;
      this.isMovingVert = false;
    }
    if(this.isMovingHor){
       velocity.y = 0;
      this.isMovingHor = false;
    }*/
    switch (direcao){
      case "n":
        this.actor.spriteRenderer.setAnimation("Move_Up");
        break;
      case "ne" || "e" || "se":
        this.actor.spriteRenderer.setAnimation("Move_Right");
        break;
      case "s":
        this.actor.spriteRenderer.setAnimation("Move_Down");
        break;
      case "sw" || "w" || "nw":
        this.actor.spriteRenderer.setAnimation("Move_Left");
        break;
      default:
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
          default:
            this.actor.spriteRenderer.setAnimation("Stop_Down");
      }
    }
    
    this.actor.arcadeBody2D.setVelocity(velocity);
  }
  
  getDirecao(velocity){
    let val;
    if (velocity.y > 0){
      val += "n";
    } else if (velocity.y < 0){
      val += "s";
    } else {
      val += "";
    }
    if (velocity.x > 0){
      val += "e";
    } else if (velocity.x < 0){
      val += "w";
    } else {
      val += "";
    }
    return val;
  }
  
  
}
Sup.registerBehavior(PlayerWalkBehavior);
