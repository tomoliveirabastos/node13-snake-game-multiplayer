class OnlinePlayer{
    constructor(){
        this.players = {};
    }

    draw(ctx, id){
        
        for(let item in this.players){
            try{
                if(item === id) continue;

                this.players[item].tam.map( idx =>{

                    ctx.fillStyle = "rgba(0,0,0,0.2)";
                    
                    ctx.fillRect(
                        idx.x, 
                        idx.y, 
                        this.players[item].width -1, 
                        this.players[item].height -1
                    );
                });

            }catch(err){
                
            }
        }
    }
}