//status jumlah kotak
var numOfSquares = 6;
//mengacak 6 warna
var colors = [];
//memilih 1 warna dari 6 warna tersebut
var pickedColor;
//dokumentasi
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");


init();

function init() {
    setUpModeButtons();
    setupSquares();
    reset();
}

function setUpModeButtons(){
    //MODEBUTTON EVENT LISTENER
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for (i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                //change reset to play again
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

resetButton.addEventListener("click", function () {
    reset();
    resetButton.textContent = "New Colors";
});

// //javascript tombol easy
// easyBtn.addEventListener("click", function(){
//     //mengatur class selected
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     //pada easy mode hanya 3 kotak
//     numOfSquares = 3
//     //mengacak 3 warna pada mode easy
//     colors = generateRandomColors(numOfSquares);
//     //memilih warna pada mode easy
//     pickedColor = pickedColorFunction();
//     //menulis rgb warna yang terpilih pada h1
//     h1.style.backgroundColor = "steelblue";
//     messageDisplay.textContent = "";
//     colorDisplay.textContent = pickedColor;
//     //memberikan warna pada 3 kotak dan menghilangkan 3 kotak colors=3 squares=6
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// //javascript tombol hard
// hardBtn.addEventListener("click", function(){
//     //mengatur class selected
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numOfSquares = 6;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickedColorFunction();
//     //memberi warna pada kotak colors=6 square=6
//     colorDisplay.textContent = pickedColor;
//     messageDisplay.textContent = "";
//     h1.style.backgroundColor = "steelblue";
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//         }
// });

// resetButton.addEventListener("click", function(){
//     //mengosongkan display
//     messageDisplay.textContent = "";
//     //generate all new colors
//     colors = generateRandomColors(numOfSquares);
//     //pick a new random color from array
//     pickedColor = pickedColorFunction();
//     //match picked color to match display picked color
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "steelblue";
//     //change color of square
//     for(i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//     }
// });

//menulis rgb warna yang terpilih pada h1
colorDisplay.textContent = pickedColor;

function changeColors(color) {
    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color;
}

function pickedColorFunction() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random color to array
    for (var i = 0; i < num; i++) {
        //add random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //"pick" a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //"pick" a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //"pick" a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
};

// hardBtn.addEventListener("pointerover", function () {
//     hardBtn.classList.add("selected");
// });

// easyBtn.addEventListener("pointerover", function () {
//     easyBtn.classList.add("selected");
// });

resetButton.addEventListener("pointerover", function () {
    resetButton.classList.add("selected");
});

// hardBtn.addEventListener("pointerout", function () {
//     if (numOfSquares !== 6) {
//         hardBtn.classList.remove("selected");
//     };
// });

// easyBtn.addEventListener("pointerout", function () {
//     if (numOfSquares !== 3) {
//         easyBtn.classList.remove("selected");
//     };
// });

resetButton.addEventListener("pointerout", function () {
    resetButton.classList.remove("selected");
});

function reset() {
    //mengosongkan display
    messageDisplay.textContent = "";
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickedColorFunction();
    //match picked color to match display picked color
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    //change color of square
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
};