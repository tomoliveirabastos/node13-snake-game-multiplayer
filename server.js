const express = require('express');
const socket = require('socket.io');
const process = require('process');
const path = require('path');

const app = express();

const server = require('http').createServer(app);

const io = socket(server);

const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public'));

app.engine('html', require('ejs').renderFile);

app.use('/', (req, res) =>{ res.render('index.html'); });

const clients = {};

const food = ()=>{
    return {
        x : parseInt(Math.random() * 700),
        y: parseInt(Math.random() * 700)
    }
}
let Food = food();

io.on('connection', con =>{

    clients[con.id] = { score: 1 }
    
    con.broadcast.emit('atualiza_score', clients);        

    con.on('food_ate', data =>{
        Food = food();
    });

    con.on('recebe_score', data =>{
        
        clients[con.id] = data;

        con.emit('food', Food);

        con.broadcast.emit('atualiza_score', clients);        
    });
    
    con.on('disconnect', data => {
        delete clients[con.id];
    })
})

server.listen(PORT);
