var guessBlocknum = 6;
var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msgDisplay");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("button");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
colorDisplay.textContent = pickedColor;




easy.addEventListener("click", function () {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    guessBlocknum = 3;
    colors = generateRandomColor(guessBlocknum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "black";
    msgDisplay.textContent = "";
    resetbtn.textContent = "New Game";
});


hard.addEventListener("click", function () {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    guessBlocknum = 6;
    colors = generateRandomColor(guessBlocknum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.background = "black";
    msgDisplay.textContent = "";
    resetbtn.textContent = "New Game";
});



resetbtn.addEventListener("click", function () {
    colors = generateRandomColor(guessBlocknum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        // display colors
        squares[i].style.background = colors[i];
    }
    h1.style.background = "black";
    msgDisplay.textContent = "";
    resetbtn.textContent = "New Game";
});



for (let i = 0; i < squares.length; i++) {
    // display colors
    squares[i].style.background = colors[i];
    // event
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        console.log(pickedColor, clickedColor);

        if (clickedColor === pickedColor) {
            msgDisplay.textContent = "correct";
            changeColor(clickedColor);
            h1.style.background = pickedColor;
            h1.style.padding = "5px";
            resetbtn.textContent = "Play Again";
        } else {
            this.style.background = "black";
            msgDisplay.textContent = "try again";
        }
    });
}
function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        // display colors
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(num) {
    let arr = []
    for (let i = 0; i < num; i++) {

        arr.push(generateColor());
    }
    return arr;
}

function generateColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}