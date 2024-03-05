let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('.reset-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let newgame = document.querySelector('.new-game-btn');

let turn = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (turn == true) {
            box.innerText = 'O';
            turn = false;
        }
        else {
            box.innerText = 'X';
            turn = true;
        }
        
        count++;

        box.disabled = true;

        let iswinner = checkwinner();

        if (count === 9 && !iswinner) {
            msg.innerText = `it's a Draw`;
            msgcontainer.classList.remove('hide');
        }
    })
});

const resetgame = () => {
    turn = true;
    count = 0 ;
    enableboxes();
    msgcontainer.classList.add('hide');
}

const diableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    diableboxes();
};

// const showDraw = () => {
//     msgdraw.classList.remove('hide');
//     diableboxes();
// }

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 != '' && p2 != '' && p3 != '') {
            if (p1 == p2 && p2 == p3) {
                showWinner(p1);
                return true;
            }
        }

    }
}

newgame.addEventListener("click", resetgame);
reset_btn.addEventListener("click", resetgame);