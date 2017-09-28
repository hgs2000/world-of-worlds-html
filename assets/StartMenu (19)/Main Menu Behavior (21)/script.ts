class MainMenuBehavior extends Sup.Behavior {
  
  awake() {
    
  }

  update() {
    let {x, y} = Sup.Input.getMousePosition();
    x = (x + 1) / 2 * Sup.Input.getScreenSize().x;
    y = (1 - (y + 1) / 2) * Sup.Input.getScreenSize().y;
    
  }
}
Sup.registerBehavior(MainMenuBehavior);
