
// // ALl this function belongs to the object window
// console.log();

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// window.console.log();

// But in node we do have the windows object we have global

// var message = '';
// console.log(global.message);

// ---------------------------------------------------

// var sayHello = function() {

// }

// window.sayHello();

// ---------------------------------------------------

// console.log(module);

// ------------------------------------------------

// Create a module
// created a file called logger.js

// var log = require('./logger');

// log('Message');

// -----------------------------------------------

// Module wrapper function

// var log = require('./logger');

// log('Message');

// -----------------------------------------------

// const path = require('path')

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// ------------------------------------------------

// // OS Module

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// console.log('Total Memory: ' + totalMemory);

// // Other of concatination
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// --------------------------------------------------

// // File System Module

// const fs = require('fs');

// const files = fs.readdirSync('./')

// console.log(files)

// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result ', files)
// })

// --------------------------------------------------

// // Event Module

// const EventEmitter = require('events')  // Class
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on('messageLogged', function () {
//     console.log('Listner called');
// });

// // Raise an event
// emitter.emit('messageLogged')

// // Emit means making a noise

// --------------------------------------------------

// Event Argument

// const EventEmitter = require('events')  // Class
// const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', function (arg) { // or e, or eventArg
//     console.log('Listener called');
// });

// Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://' });

// Raise: logging (data: message)
// emitter.on('logging', function (arg) {
//     console.log('message');
// })

// emitter.emit('logging', {id: 2, url: 'http://'});

// --------------------------------------------------

// // Extending Emmitter

  
// const EventEmitter = require('events')  // Class


// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener

// logger.on("messageLogged", (arg) => { // or e, or eventArg
//   console.log("Listener called", arg);
// });

// logger.log('message');

// --------------------------------------------------

// HTTP Module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
        
    }
});

// server.on('connection', (socket) => {
//    console.log('New connection...'); 
// });

server.listen(3000);

console.log('Listening on port 3000...');