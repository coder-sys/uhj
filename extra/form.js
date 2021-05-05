class Form {

    constructor() {
      this.input = createInput('Enter you name');
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset')
      this.reset.position(displayWidth-90,displayHeight/7)
      this.name = this.input.value()
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  }
  