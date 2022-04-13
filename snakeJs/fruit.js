const sprites = new Image()
sprites.src = '../img/Apple.png'

const randomX = () => {
    const math = () => Math.floor(Math.random() * background.width)
    let number = math()
    while (number % snake.width !== 0) {
        number = math()
    }
    return number
}

const randomY = () => {
    const math = () => Math.floor(Math.random() * background.height)
    let number = math()
    while (number % snake.height !== 0) {
        number = math()
    }
    return number
}

const fruit = {
    x : randomX(),
    y : randomY(),
    width : snake.width,
    heigth : snake.height,
    draw () {
        ctx.beginPath()
        ctx.drawImage(sprites, 0, 0, 32, 32, this.x, this.y, this.width, this.heigth)
    }, update () {

        if (this.x === snake.arr[0].x && this.y === snake.arr[0].y) {
            snake.arr.push( { x : -100, y : -100})
            snake.arr.forEach( item => {

                let x = randomX()
                let y = randomY()

                if (x === item.x || y === item.y) {
                    x = randomX()
                    y = randomY()
                } else {
                    this.x = x
                    this.y = y
                }
            })
        }
        
    }
}