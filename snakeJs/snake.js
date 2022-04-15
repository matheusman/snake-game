let keyPress = null;
let lastKey = null
window.addEventListener('keydown', key => {  // iniciando um evento de teclado
    keyPress = key.keyCode  
    snake[0]
})

const snake = { // criando um objeto snake
    width: 25,
    height: 25,
    lose: false,
    color: '#17a2b8',
    arr: [{ // criando um array de posições do snake
        x: 0,
        y: 0
    }],

    drawSnake() { //desenha todas as posições do array
        for (let index = 0; index < this.arr.length; index++) {
            ctx.beginPath()
            ctx.fillStyle = this.color
            ctx.fillRect(this.arr[index].x, this.arr[index].y, this.width, this.height)
        }
    },

    updateSnake() { // colisão com as paredes
        if (this.arr[0].x >= background.width) this.arr[0].x = 0
        if (this.arr[0].x < background.x) this.arr[0].x = background.width - this.width
        if (this.arr[0].y >= background.height) this.arr[0].y = 0
        if (this.arr[0].y < background.y) this.arr[0].y = background.height - this.height
    },
    keyPressSnakeMove() {
            setInterval(() => { //adicionando um evento de teclado
                if (!this.lose) {
                    switch (keyPress) {
                        case null:
                            snake.arr.unshift({ x: snake.arr[0].x + this.width,y: snake.arr[0].y })
                            snake.arr.pop()
                            break;
                        
                        case 39: //right
                            if (keyPress === 39)
                            snake.arr.unshift({ x: snake.arr[0].x + this.width, y: snake.arr[0].y })
                            snake.arr.pop()
                            break;
                        
                        case 40: //down
                            snake.arr.unshift({ x: snake.arr[0].x, y: snake.arr[0].y + this.height })
                            snake.arr.pop()
                            break;
                       
                        case 37: //left
                            snake.arr.unshift({ x: snake.arr[0].x - this.width, y: snake.arr[0].y })
                            snake.arr.pop()
                            break;
                        
                        case 38: //up
                            snake.arr.unshift({ x: snake.arr[0].x, y: snake.arr[0].y - this.height })
                            snake.arr.pop()
                            break;
                    }
                }
            }, 100)
    }
}