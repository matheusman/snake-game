const gameOver = () => {
    snake.arr.forEach( (item, index) => {
        if (index !== 0) {
            if (snake.arr[0].x === item.x && snake.arr[0].y === item.y) {
                console.log(lose)
                snake.lose = true
            }
        }

    })
}

const draw = () => {
    background.draw()
    snake.drawSnake()
    fruit.draw()
}

const update = () => {
    snake.updateSnake()
    fruit.update()
}

const loop = () => {
    draw()
    update()
    gameOver()
    requestAnimationFrame(loop)
}

snake.keyPressSnakeMove()
loop()