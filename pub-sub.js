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

    // const subscriber = client.duplicate() //create a new cliet ->shares the same connection
    // await subscriber.connect()

    // await subscriber.subscribe('dummy-channel', (message, channel)=>{
    //   console.log(`Recieved the message from ${channel}: ${message} `);
      
    // })
    // await client.publish("dummy-channel", "Test data 1")
    // await client.publish("dummy-channel", "Test data 2")

    // await new Promise((resolve)=>setTimeout(resolve, 1000))

    // await subscriber.unsubscribe('dummy-channel')
    // await subscriber.quit() //close the subscriber connection


    //pipelining and transactions

const multi = client.multi();
multi.set("key-transaction1", "value1");
multi.set("key-transaction2", "value2");
multi.get("key-transaction1");
multi.get("key-transaction2");
const results = await multi.exec();
console.log(results); // [ 'OK', 'OK', 'value1', 'value2' ]

const pipeline = client.multi();
pipeline.set("key-pipeline1", "value1");
pipeline.set("key-pipeline2", "value2");
pipeline.get("key-pipeline1");
pipeline.get("key-pipeline2");
const pipelineResults = await pipeline.exec();
console.log(pipelineResults); // [ 'OK', 'OK', 'value1', 'value2' ]

    

    
  } catch (err) {
    console.error(err);
    
    }finally{
      client.quit()
    }
}
tryAddtionalFeatures()