class Snake{
    constructor(size){
        this.y = 0;
        this.x = 0;
        this.lastKey = "ArrowDown";
        this.width = size;
        this.height = size;
        this.tam = [];
        this.max = 1;
    }

    run(ctx){

        this.control();

        if(this.tam.length > this.max) this.tam.shift();

        this.snakeCollideOwnSelf();
 
        this.tam.push({x : this.x, y: this.y})

        this.tam.map(item =>{
 
            ctx.fillStyle = "white";
 
            ctx.fillRect(item.x, item.y, this.width -1, this.height -1)
 
        });


    }

    snakeCollideOwnSelf(){
        this.tam.map(item => {
            if(this.x === item.x && this.y === item.y) {
                this.tam = [];
                this.max = 1;
            }
        })
    }

    control(){
        const control = {
            ArrowDown : (snake) =>{
                snake.y += snake.height;
            },
            ArrowUp : (snake) =>{
                snake.y -= snake.height;
            },

            ArrowLeft: (snake)=>{
                snake.x -= snake.width;
            },

            ArrowRight: (snake)=>{
                snake.x += snake.width;
            }
        }
 
        if(!control[this.lastKey])return false;
 
        return control[this.lastKey](this)
    }

}