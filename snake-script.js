const gameBoard = document.querySelector('#game-board')

let boxes = []
let snakeLength = 1
let snakeBoxes = []
let index = 0
let direction = ''
let seed = 0
let snakeIndex = []
let score = 0

for (i = 0; i < 900; i++) {
    createBoard()
}

snakeBoxes.push(boxes[0])
snakeBoxes[0].style.backgroundColor = 'white'

createSeed()
moveBox()

function createSeed () {
    seed = Math.ceil(Math.random() * 899)
    for (let i = 0; i < snakeLength; i++) {
        if (seed == snakeIndex[i]) {
            i = snakeLength
            createSeed()
        }
    }
    boxes[seed].style.backgroundColor = 'orange'
}

function checkSeed () {
    if (index == seed) {
        snakeLength++
        snakeBoxes.push(boxes[index])
        snakeIndex.push(index)
        score++
        console.log(score)
        changeDefault(boxes[seed])
        createSeed()
    }
}

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
            checkSeed()
            snakeFunction()
        }
    } if (direction == 'KeyA') {
        if (index % 30 == 0) {
            console.log('can"t go left')
        } else {
            index--
            checkSeed()
            snakeFunction()
        }
    } if (direction == 'KeyW') {
        if (index - 30 < 0) {
            console.log("can't go up")
        } else {
            index -= 30
            checkSeed()
            snakeFunction()
        }
    } if (direction == 'KeyS') {
        if (index + 30 > 899) {
            console.log("can't go down")
        } else {
            index += 30
            checkSeed()
            snakeFunction()
        }
    }
    snakeBoxes[snakeLength - 1].style.backgroundColor = 'white'
    setTimeout(moveBox, 70)
}

function snakeFunction () {
    snakeBoxes.push(boxes[index])
    snakeIndex.push(index)
    changeDefault(snakeBoxes[0])
    snakeBoxes.shift()
    snakeIndex.shift()
}

function changeDefault (blackBox) {
    blackBox.style.backgroundColor = 'black'
}

document.addEventListener('keydown', evt => {
    direction = evt.code
})