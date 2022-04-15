const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const height = ctx.canvas.height // altura total do canvas
const width = ctx.canvas.width // largura total do canvas

const background = { // criando uma tela de fundo
    x : 0,
    y : 0,
    width : width,
    height : height,
    draw () { // desenhando e atualizando a tela de fundo
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}