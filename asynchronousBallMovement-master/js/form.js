class Form{
    constructor(){
        this.button = createButton('START')
        this.input = createInput("Enter your name here")
        this.greeting = createElement('h3')
    }
    hide(){
        this.button.hide()
        this.greeting.hide()
        this.input.hide();
    }
    display(){
        var title = createElement('h2')
        title.html("4Race")
        title.position(300,20)

        
        this.input.position(350,200);
       
        this.button.position(350,250);
       
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount += 1
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hi there "+ player.name + " !")
            this.greeting.position(300,300)
        })    }
}