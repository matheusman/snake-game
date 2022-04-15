const apple = new Image() // iniciando uma imagem no canvas
apple.src = '../img/Apple.png' // pegando o caminho da imagem

const randomX = () => { // randomizando numero aleatorio multiplos do snake.width
    const math = () => Math.floor(Math.random() * background.width)
    let number = math()
    snake.arr.forEach( item => {    
        while (number % snake.width !== 0 || item.x === number) {
            number = math()
        }
    })
    return number
}

const randomY = () => { // randomizando numero aleatorio multiplos do snake.height
    const math = () => Math.floor(Math.random() * background.height)
    let number = math()
    snake.arr.forEach( item => {
        while (number % snake.width !== 0 || item.y === number) {
            number = math()
        }
    })
    return number
}

const fruit = { // iniciando um objeto de fruit
    x : randomX(),
    y : randomY(),
    width : snake.width,
    heigth : snake.height,
    draw () { // desenhando a fruit com base na imagem
        ctx.beginPath()
        ctx.drawImage(apple, 0, 0, 32, 32, this.x, this.y, this.width, this.heigth)
    },
    update () {
        if (this.x === snake.arr[0].x && this.y === snake.arr[0].y) { 
            this.x = randomX()
            this.y = randomY()
            snake.arr.push( { x : snake.x, y : snake.y})
        }
    }
           
}
