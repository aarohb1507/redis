
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
      
  } catch (error) {
    console.error(error)
  }finally{
    await client.quit()
  }
}
testRedisConnection()