import app from "./server.js" 
// import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
// const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8080

// MongoClient.connect(
//   process.env.MESSAGES_DB_URI,
//   {
//     poolSize: 50,
//     wtimeout: 2500,
//     useNewUrlParser: true
//   },
// )
// .catch(err => {
//   console.error(err.stack)
//   process.exit(1)
// })
// .then(async client => {
//   app.listen(port, () => {
//     console.log(`listening on port ${port}`)
//   })
// })

import mongodb from "mongodb"
const MongoClient = mongodb.MongoClient;
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MESSAGES_DB_URI;
const client = new MongoClient(url);
async function run() {
    console.log("port:", process.env.PORT)
    try {
        await client.connect();
        app.listen(port, () => {
          console.log(`listening on on port ${port}`)
        })
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
}
run().catch(console.dir);