const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const height = ctx.canvas.height
const width = ctx.canvas.width

const background = {
    x : 0,
    y : 0,
    width : width,
    height : height,
    draw () {
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}