let symbol = "X";
let gameEnd = false;
let moveCount = 0;
for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", function () {
        moveCount++;
        if (this.innerHTML === "" && !gameEnd) {
            this.innerHTML = symbol;
            this.classList.add(symbol.toLowerCase());

            checkWin();

            if (symbol === "X") {
                symbol = "O";
            }
            else {
                symbol = "X";
            }
            
            checkTie();
        }
    });
}
let winBoard = [
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];
function checkWin() {
    for (let i = 0; i < winBoard.length; i++) {
        if (
            document.getElementById(winBoard[i][0]).innerHTML === symbol &&
            document.getElementById(winBoard[i][1]).innerHTML === symbol &&
            document.getElementById(winBoard[i][2]).innerHTML === symbol
        ) {
            document.getElementById(winBoard[i][0]).classList.add("win");
            document.getElementById(winBoard[i][1]).classList.add("win");
            document.getElementById(winBoard[i][2]).classList.add("win");

            gameEnd = true;

            setTimeout(function () {
                alert(symbol + " wins!");
            }, 250);
        }
    }
}
function checkTie() {
    if (moveCount === 9) {
        gameEnd = true;
        setTimeout(function () {
            alert("It's a tie, nobody wins!");
        }, 250);
    }
}
document.getElementById("reset").addEventListener(
    "click",
    function () {
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i.toString()).innerHTML = "";
            document.getElementById(i.toString()).classList.remove("x");
            document.getElementById(i.toString()).classList.remove("o");
            document.getElementById(i.toString()).classList.remove("win");
            symbol = "X";
            gameEnd = false;
        }
    }
);