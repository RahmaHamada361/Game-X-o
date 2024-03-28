let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;


boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML ===""){
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeTurn();
        }
    })
})
function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}
function cheakWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ]
    for(let i = 0; i<winConditions.length; i++){
        let V0 = boxes[winConditions[i][0]].innerHTML;
        let V1 = boxes[winConditions[i][1]].innerHTML;
        let V2 = boxes[winConditions[i][2]].innerHTML;


    if(V0 != "" && V0 === V1 && V0 === V2){
      isGameOver = turn;
      document.querySelector("#results").
      innerHTML = turn + "win";
      document.querySelector("#play-again").
      style.display = "inline"


      for(j = 0; j<3; j++){
        boxes[winConditions[i][j]].style.
        backgroundcolor = "#08D9D6"
        boxes[winConditions[i][j]].style.
        color = "#000"
      }
    }
    }
}
function cheakDraw(){
    if(!isGameOver){
        let isDraw = turn;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })
        if(isDraw){
            isGameOver = turn;
      document.querySelector("#results").
      innerHTML = "Draw";
      document.querySelector("#play-again").
      style.display = "inline"
        }
    }
}
document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";


    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
    })
})