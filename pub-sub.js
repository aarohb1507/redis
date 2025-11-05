const redis = require('redis')

const client = redis.createClient({
  host: "localhost",
  port: 6379
})

//event listener
 
client.on('error', (error)=>{
  console.log("Redis client error occured", error)
  l
})

async function tryAddtionalFeatures(){
  try {
    await client.connect()
    console.log("Connection established.");

    const subscriber = client.duplicate() //create a new cliet ->shares the same connection
    await subscriber.connect()

    await subscriber.subscribe('dummy-channel', (message, channel)=>{
      console.log(`Recieved the message from ${channel}: ${message} `);
      
    })
    await client.publish("dummy-channel", "Test data 1")
    await client.publish("dummy-channel", "Test data 2")

    await new Promise((resolve)=>setTimeout(resolve, 1000))

    await subscriber.unsubscribe('dummy-channel')
    await subscriber.quit() //close the subscriber connection


    
  } catch (err) {
    console.error(err);
    
    }finally{
      client.quit()
    }
}