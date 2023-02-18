
// const chalk = require('chalk');
// const validator = require('validator')
// console.log(chalk.green.underline.inverse('successful'));
// const res = validator.isEmail('sonika@varma.com');
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));



// creating own web server

// const http =require("http");
// const server = http.createServer((req,res)=>{
//     res.end('Hello Varmaji ');
// });
// server.listen(8000,"127.0.0.1",() => {
// console.log("listening to the port no 8000");
// });

//url request
// const http =require("http");
//  const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end('Hello Varmaji ');
//  });
//  server.listen(8000,"127.0.0.1",() => {
//  console.log("listening to the port no 8000");
//  });


//up+api 
// const http =require("http");
// const fs=require("fs");
// const server = http.createServer((req,res)=>{
//    if(req.url=="/"){
//     res.end('Hello Varmaji ');
//    }else if(req.url=="/about"){
//     res.end("kese ho aap? ");
//    }else if(req.url=="/userapi"){
//     fs.readFile('${_dirname}/userApi/userapi.json',"utf-8",(err,data)=>{
//      console.log(data);
//     });
//     res.end("hello from userapi side");
//    }
// });
// server.listen(8000,"127.0.0.1",() => {
//  console.log("listening to the port no 8000");
//  });



//json 
// const fs=require("fs");
// const biodata={
//     name:"sonika",
//     age:"21",
// };

// const jsonData =JSON.stringify(biodata);
// console.log(jsonData);

//prblm
//1.convert to json
//2.2nd file mai addd krna 
//3.readfile
//4.again convert back 
//5.console.log()

// const jsonData=JSON.stringify(biodata);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("done");
// });

// fs.readFile("json1.json","utf-8",(err,data)=>{
//     // console.log(data);
//     const orgData=JSON.parse(data);
//     console.log(data);
//     console.log(orgData);
// });





//events modules
//registering for the event to be fired only one time using once

//  const EventEmitter =require("events");
//  const event=new EventEmitter(); //event emitter instance
//  event.on("sayMyName",()=>{
//     console.log("your name is Sonika");
//  });
//  event.emit("sayMyName");


 //create an event emitter instance and register a couple of callbacks
//  const EventEmitter =require("events");

//  const event=new EventEmitter();//event emitter instance
//  event.on("sayMyName",()=>{
//     console.log("your name is Sonika");
//  });
//  event.on("sayMyName",()=>{
//     console.log("your name is Sonika");
//  });
//  event.on("sayMyName",()=>{
//     console.log("your name is Sonika");
//  });
//  event.emit("sayMyName");


 //registering for the event with callback parameteres
//  const EventEmitter =require("events");

//  const event =new EventEmitter();//event emitter instance
//  event.on("checkPage",(sc,msg)=>{
//     console.log('status code is ${sc} and the page is ${msg}');
//  });//function define
//  event.emit("checkPage",200,"ok");// function call




//Streams

//que
//reading from stream
//create readable stream
//handle stream events-> data,end,error

//1st way
// const fs= require('fs');
// const http=require('http');

// const server=http.createServer();
// server.on('request',(req,res)=>{
//    var fs=require('fs');
//    fs.readFile('input.txt',(err,data)=>{
//     if(err) return console.error(err);
//     res.end(data.toString());
//    });
// })


//2nd way
// const fs= require('fs');
// const http=require('http');

// const server=http.createServer();
// server.on('request',(req,res)=>{
//     const rstream =fs.createReadStream("inputs.txt");
//     rstream.on('data',(chunkdata)=>{
//        res.write(chunkdata);

//     });
//     rstream.on('end',()=>{
//       res.end();  
//     });
//     rstream.on('error',(err)=>{
//         console.log(err);
//         res.end("file not found");
//     })
// });
// server.listen(8000,"127.0.0.1");

//3rd way shortcut
const fs= require('fs');
const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
const rstream =fs.createReadStream("input.txt");
rstream.pipe(res);
});
server.listen(8000,"127.0.0.1");