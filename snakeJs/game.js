const gameOver = () => { // sistema de derrota
    snake.arr.forEach( (item, index) => {
        if (index !== 0) {
            if (snake.arr[0].x === item.x && snake.arr[0].y === item.y) {
                snake.lose = true
            }
        }

    })
}

const draw = () => { // desenhando todos os elementos
    background.draw()
    snake.drawSnake()
    fruit.draw()
}

const update = () => { // dando atualizada em todos os objetos
        snake.updateSnake()
        fruit.update()
}

const loop = () => { // iniciando um loop dentro do canvas
    draw()
    update()
    gameOver()
    requestAnimationFrame(loop)
}

snake.keyPressSnakeMove() // iniciando o sistema de clicks

loop()