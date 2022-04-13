let keyPress = null;
window.addEventListener('keydown', key => keyPress = key.key)

const snake = {
    width : 25,
    height : 25,
    lose : false,
    color : '#17a2b8',
    arr : [{ x : 0, y : 0 }],
    drawSnake  () {
        for (let index = 0; index < this.arr.length; index++) {
            ctx.beginPath()
            ctx.fillStyle = this.color
            ctx.fillRect(this.arr[index].x, this.arr[index].y, this.width, this.height)
        }
    },
    updateSnake () {
        if (this.arr[0].x >= background.width) {
            this.arr[0].x = 0
        }
        if (this.arr[0].x < background.x) {
            this.arr[0].x = background.width - this.width
        }
        if (this.arr[0].y >= background.height) {
            this.arr[0].y = 0
        }
        if (this.arr[0].y < background.y) {
            this.arr[0].y = background.height - this.height
        }
    },
    keyPressSnakeMove () {
        if (!this.lose) {
            setInterval ( () => {
                switch (keyPress) {
                    case null:
                        snake.arr.unshift({ x : snake.arr[0].x + this.width, y : snake.arr[0].y })
                        snake.arr.pop()
                        break
                    case 'ArrowDown':
                        snake.arr.unshift({ x : snake.arr[0].x, y : snake.arr[0].y + this.height})
                        snake.arr.pop()
                        break;
                    case 'ArrowUp':
                        snake.arr.unshift({ x : snake.arr[0].x , y : snake.arr[0].y - this.height })
                        snake.arr.pop()
                        break;
                    case 'ArrowRight':
                        snake.arr.unshift({ x : snake.arr[0].x + this.width, y : snake.arr[0].y })
                        snake.arr.pop()
                        break;
                    case 'ArrowLeft':
                        snake.arr.unshift({ x : snake.arr[0].x - this.width, y : snake.arr[0].y })
                        snake.arr.pop()
                        break;
                }
            }, 100)
        } else {
            console.log(keyPress)
            keyPress = undefined
        }
        
    }
}