const gameBoard = document.querySelector('#game-board')

let boxes = []
let snakeLength = 1
let snakeBoxes = []
let index = 0
let direction = ''

for (i = 0; i < 900; i++) {
    createBoard()
}

moveBox()

function createBoard () {
    let newBox = document.createElement('div')
    newBox.classList.add('box')
    gameBoard.appendChild(newBox)
    boxes.push(newBox)
}

boxes[0].style.backgroundColor = 'white'

function moveBox () {
    if (direction == 'KeyD') {
        if ((index + 1) % 30 == 0) {
            console.log('can"t go right')
        } else index++
    } if (direction == 'KeyA') {
        if (index % 30 == 0) {
            console.log('can"t go left')
        } else index--
    } if (direction == 'KeyW') {
        if (index - 30 < 0) {
            console.log("can't go up")
        } else {
            index -= 30
        }
    } if (direction == 'KeyS') {
        if (index + 30 > 899) {
            console.log("can't go down")
        } else {
            index += 30
        }
    }
    boxes[index].style.backgroundColor = 'white'
    setTimeout(moveBox, 70)
}

document.addEventListener('keydown', evt => {
    direction = evt.code
})