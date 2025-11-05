const redis = require('redis')

const client = redis.createClient({
  host: "localhost",
  port: 6379
})

//event listener
 
client.on('error', (error)=>{
  console.log("Redis client error occured", error);
})

async function redisDataStructures(){
  try {
    // ✅ ADD THIS LINE - Connect before using Redis commands
    await client.connect();
    
    await client.mSet(["user:name", "Aaroh", "user:age", "20"])
    const [name, age] = await client.mGet(["user:name",  "user:age"])
    console.log(name, age);

    //if you want practice some redis methods like lpush, rpush, lpop, rpop and lrange 
    
  } catch (err) {
      console.error(err);
      
  } finally {
    // ✅ ADD AWAIT here too
    await client.quit()
  }
}

redisDataStructures()