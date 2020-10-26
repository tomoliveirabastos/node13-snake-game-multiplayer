class Food{
    constructor(size, socket){
        
        this.socket = socket;

        this.x = 0;
    
        this.y = 0;
    
        this.size = size;
    
    }

    draw(ctx){
    
        ctx.fillStyle = "red";
    
        ctx.fillRect(this.x, this.y, this.size -1, this.size-1);
    
    }

    collide(){
        this.socket.emit('food_ate', {});
    }
}
