const gameBoard = document.querySelector('#game-board')

let boxes = []
let snakeLength = 1
let snakeBoxes = []
let index = 0
let direction = ''

for (i = 0; i < 900; i++) {
    createBoard()
}

snakeBoxes.push(boxes[0])
snakeBoxes[0].style.backgroundColor = 'white'

moveBox()

function createBoard () {
    let newBox = document.createElement('div')
    newBox.classList.add('box')
    gameBoard.appendChild(newBox)
    boxes.push(newBox)
}

function moveBox () {
    if (direction == 'KeyD') {
        if ((index + 1) % 30 == 0) {
            console.log('can"t go right')
        } else {
            index++
            snakeFunction()
        }
    } if (direction == 'KeyA') {
        if (index % 30 == 0) {
            console.log('can"t go left')
        } else {
            index--
            snakeFunction()
        }
    } if (direction == 'KeyW') {
        if (index - 30 < 0) {
            console.log("can't go up")
        } else {
            index -= 30
            snakeFunction()
        }
    } if (direction == 'KeyS') {
        if (index + 30 > 899) {
            console.log("can't go down")
        } else {
            index += 30
            snakeLength++
            snakeBoxes.push(boxes[index])
            snakeFunction()
        }
    }
    snakeBoxes[snakeLength - 1].style.backgroundColor = 'white'
    setTimeout(moveBox, 70)
}

function snakeFunction () {
    snakeBoxes.push(boxes[index])
    changeDefault(snakeBoxes[0])
    console.log(snakeBoxes)
    snakeBoxes.shift()
    console.log(snakeBoxes)
}

function changeDefault (blackBox) {
    blackBox.style.backgroundColor = 'black'
}

document.addEventListener('keydown', evt => {
    direction = evt.code
})