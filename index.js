const SMTPServer = require("smtp-server").SMTPServer;


const server = new SMTPServer({
    allowInsecureAuth:true,
    authOptional:true,
    onConnect(session , cb){
        console.log("onConnect" , session.id);
        cb();
    },
    onMailFrom(address , session , cb){
        console.log('onMailFrom' , address.address , session.id);
        cb();
    },
    onRcptTo(){
        console.log('onRcptTo' , address.address , session.id);
    },
    onData(stream , session , cb){
       stream.on('data',(data) => console.log(`data ${data.toString()} `));
       stream.end('end' , cb());
    }
});
server.listen(25 , ()=> console.log("server is running on the port 25"));


