function Board(x,y,w,h){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.o=15;
    /*************
     * if player =1 means x
     * if player =0 means empty
     * if plater = 2 means o
     * ************/
    this.player=0;
    /** holding value
     * if 0 means empty
     * if 1 means x
     * if 2 means o
     * **/
    this.holding=0;
    this.values='e';
    this.show=()=>{
        fill("#546E7A");
        stroke("#FF9800");
        strokeWeight(2);
        rect(this.x,this.y,this.w,this.h);
    }
    this.move=()=>{
        //console.log(this.x+this.w/2,this.x+this.h/2);
        stroke("#B2FF59");
        strokeWeight(4);
        if(this.player==2){
        circle(this.x+this.w/2,this.y+this.h/2,this.w*0.5);
        this.holding=2;
        }
        else if(this.player==1){
        line(this.x+this.o,this.y+this.o,this.x+this.w-this.o,this.y+this.h-this.o);
        line(this.x+this.w-this.o,this.y+this.o,this.x+this.o,this.y+this.h-this.o)
         this.holding=1;
    }
    else {
        this.holding=0;
    }
    }

}