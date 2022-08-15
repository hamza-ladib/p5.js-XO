///// main fonction////////





//////////////////////// variables //
let canvas;
let board=[];
let w=450;
let h=450;
let player=true;
player2=[];
let player1=[];
function setup(){
    /** set canvas **/
 canvas=createCanvas(w,h);
 canvas.id("cnv");
 /** set board **/
 for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
 board.push(new Board(i*h/3,j*w/3,w/3,h/3));
 }}
}
function draw(){
    background("#546E7A");
   for(let i=0;i<board.length;i++){
    board[i].show();
    board[i].move();
   }
   /******  check the winner ****** */
   if(player1.length>=3){
    for(let i=0;i<player1.length;i++){
        if(player1[i].x==player(0))
    }
   }

   ///**************************** */
}
function mousePressed() {
    console.log("presseed",mouseX,mouseY);
    console.log(player1.length,player2.length);
    for(let i=0;i<board.length;i++){
        if(
            mouseX>board[i].x &&mouseX<board[i].x+w/3 &&
            mouseY>board[i].y &&mouseY<board[i].y+h/3  &&
             board[i].holding==0
            ){    

                board[i].player=(player)?1:2;
                if(player) player1.push(board[i]);
                else player2.push(board[i]);
                 player=!player;
                 
            }
    }
  }