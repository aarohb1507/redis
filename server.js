
const redis = require('redis')

const client = redis.createClient({
  host: "localhost",
  port: 6379
})

//event listener
 
client.on('error', (error)=>{
  console.log("Redis client error occured", error);
})

async function testRedisConnection(){
  try {
      client.connect()
      console.log("connected to redis"); //confirm whether connected or not
      await client.set("count", "100")
      const incrementGet = await client.incr("count")
      console.log(incrementGet);
      
      
  } catch (error) {
    console.error(error)
  }finally{
    await client.quit()
  }
}
testRedisConnection()