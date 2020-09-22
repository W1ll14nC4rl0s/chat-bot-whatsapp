const venom = require('venom-bot')

venom
    .create()
    .then((cliente)=>start(cliente))

function start(client){
    client.onMessage( async (message)=>{
        if(message.body != 'ta aond?'){
            client
                .sendText(message.from, 'ta aond?')
                .then((result)=>{
                    console.log('Result', result)
                })
                .catch((error)=>{
                    console.log('ERROR', error)
                })
        }else{
            await client.sendLocation(message.from,"-23.7487", "-46.0476", "House", "Brazil").then((result)=>{
                console.log("Result: ", result); //return object success
            }).catch((erro)=>{
                console.error("Error when sending: ", erro); //return object error
          });
        }
    })
}
