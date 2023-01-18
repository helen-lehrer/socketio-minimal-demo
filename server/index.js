//built-in http library in Node. COuld also use Express for this, which is a more popular option for creating a http server
//socket.io is an event-based system
const http = require('http').createServer();

//first argument takes the http object
//second argument allows any url to connect
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});
//listening to a connection from a client on the front-end 
io.on('connection', (socket) => {
    console.log('a user connected');

    //listen to any custom event name 
    socket.on('message', (message) =>     {
        console.log(message);

        //this broadcasts out the message to everybody
        io.emit('message', `${socket.id.substr(0,2)} said ${message}` );   
    });
});


//tells our server to listen on port8080
http.listen(8080, () => console.log('listening on http://localhost:8080') );


// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });


 
