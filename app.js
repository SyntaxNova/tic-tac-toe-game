let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('.reset-btn');

let turn = true;

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

        box.disabled = true ;

        checkwinner();
    })

    reset_btn.addEventListener('click', () => {
        box.innerText = "";
    })

});

const checkwinner= () => {
    for(let pattern of winPatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if(p1 != '' && p2 != '' && p3 != '' ){
            if(p1 == p2 && p2 == p3){
                console.log('winner' , p1);
            }
        }
    }
}