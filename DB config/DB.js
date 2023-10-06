const mongoose = require("mongoose")

const Connection = async()=>{
    try {
await mongoose.connect(process.env.MONGO_URL).then(()=> console.log("DB Connected Successfully"))
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = Connection