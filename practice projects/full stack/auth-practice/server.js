import app from "./app.js";
import config from "./config/config.js";
import connectDB from "./config/db.config.js";

const port = config.PORT

console.log('port ->', config.PORT)
console.log('env port', process.env.PORT)

await connectDB()

app.listen(port , () => {
    console.log(`server is running on port ${port}`);
})
