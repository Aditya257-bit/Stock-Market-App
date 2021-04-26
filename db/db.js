const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/StockData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log(error);
});