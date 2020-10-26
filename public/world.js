class World{

    constructor(size){

        this.size = size;

    }

    observer(ctx){
        
        ctx.fillStyle = "lightblue";

        ctx.fillRect(0, 0, this.size, this.size);
    }

    isCollide(snake, food){
        
        const distX = (snake.x + snake.width / 2) - (food.x + food.size / 2);
        
        const distY = (snake.y + snake.height / 2) - (food.y + food.size / 2);

        const size = (Math.sqrt( snake.width * snake.height ) + (Math.sqrt( food.size * 2 )))/2;

        if(Math.abs(distX) < size && Math.abs(distY) < size){
    
            food.collide();
    
            snake.max += 1;
    
        }
    
    }

}