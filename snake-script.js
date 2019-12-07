const gameBoard = document.querySelector('#game-board')

let justScored = false
let gameover = false
let boxes = []
let snakeLength = 1
let snakeBoxes = []
let index = 0
let direction = ''
let seed = 0
let snakeIndex = [0]
let score = 0

for (i = 0; i < 625; i++) {
    createBoard()
}

snakeBoxes.push(boxes[0])
snakeBoxes[0].style.backgroundColor = 'white'

createSeed()
moveBox()

function playerOut () {
    alert('Oops!')
}

function createSeed () {
    seed = Math.ceil(Math.random() * 624)
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
        snakeBoxes.push(boxes[snakeIndex[snakeLength-1]])
        snakeIndex.push(index)
        snakeLength++
        score++
        justScored = true
        console.log(score)
        console.log(snakeIndex)
        console.log(snakeBoxes)
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
        if ((index + 1) % 25 == 0) {
            gameover = true
        } else {
            index++
            checkSeed()
            snakeFunction()
        }
    } if (direction == 'KeyA') {
        if (index % 25 == 0) {
            gameover = true
        } else {
            index--
            checkSeed()
            snakeFunction()
        }
    } if (direction == 'KeyW') {
        if (index - 25 < 0) {
            gameover = true
        } else {
            index -= 25
            checkSeed()
            snakeFunction()
        }
    } if (direction == 'KeyS') {
        if (index + 25 > 624) {
            gameover = true
        } else {
            index += 25
            checkSeed()
            snakeFunction()
        }
    }
    if (!justScored) {
        for (let j = snakeLength; j > 0; j--) {
            if (snakeIndex[j - 2] == index) {
                j = 0
                gameover = true
            }
        }
    } else {
        justScored = false
    }
    if (gameover) {
        playerOut()
    } else {
        snakeBoxes[snakeLength - 1].style.backgroundColor = 'white'
        setTimeout(moveBox, 70)
    }
}

function snakeFunction () {
    snakeBoxes.push(boxes[index])
    changeDefault(snakeBoxes[0])
    snakeBoxes.shift()
    if (!justScored) {
        snakeIndex.push(index)
        snakeIndex.shift()
    }
    console.log(snakeIndex)
    console.log(snakeBoxes)
}

function changeDefault (blackBox) {
    blackBox.style.backgroundColor = 'black'
}

document.addEventListener('keydown', evt => {
    direction = evt.code
})