///// main fonction////////





//////////////////////// variables //
let canvas;
let board=[];
let w=450;
let h=450;
let player=true;
player2="";
let player1="";
winCombinition=["012","345","678","036","258","147","048","246"];
function setup(){
    /** set canvas **/
 canvas=createCanvas(w,h);
 canvas.id("cnv");
 /** set board **/
 for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
 board.push(new Board(j*h/3,i*w/3,w/3,h/3));
 }}
}
function draw(){
    background("#546E7A");
   for(let i=0;i<board.length;i++){
    board[i].show();
    board[i].move();
   }
   /******  check the winner ****** */
   if(player1.length>=3 || player2.length>=3){
  
    for(let i=0;i<winCombinition.length;i++){
        let count1=0;
        let count2=0;
         for(let j=0;j<winCombinition[0].length;j++){
            if(player1.includes(winCombinition[i][j])){
             
            count1++;
            if(count1==3){
              
                
             
                 winner("player 1 win");          
       }
            }
            if(player2.includes(winCombinition[i][j])){
                count2++;
                if(count2==3){ 
                
            
                winner("player 2 win");          
    }

            }

         }
    
   }

   ///**************************** */
}
}
function mousePressed() {
    for(let i=0;i<board.length;i++){
        if(
            mouseX>board[i].x &&mouseX<board[i].x+w/3 &&
            mouseY>board[i].y &&mouseY<board[i].y+h/3  &&
             board[i].holding==0){    
                board[i].player=(player)?1:2;
                if(player) player1+=i;
                else player2+=i;
                 player=!player;
            }
    }
  }
  let winner=(p)=>{
  
   alert(p);
  noLoop();
    

  }