const mongoose = require("mongoose");

const connectDatabse = () =>{
    mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useCreateIndex: true,
  })
  .then((data) => {
    console.log(`Mongodb Connected with server: ${data.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports = connectDatabse
