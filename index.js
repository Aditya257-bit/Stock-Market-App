const mongoose = require('mongoose');
const express = require("express");
const app = express();
require("./db/db");

app.use(express.json())
const port = process.env.PORT || 5000;

//Model
const Schema = new mongoose.Schema({
    name: {
        type: String
    },
    symbol: {
        type: String
    },
    current_price: {
        type: String
    },
    market_cap: {
        type: String
    },
    unqid: {
        type: String
    },
    isStatus: {
        type: Boolean
    }
}, { versionKey: false })

const StockMarketData = mongoose.model('Stockdata', Schema);

module.export = StockMarketData;

app.post("/savestockData", (req, res) => {
    const addStockData = new StockMarketData({
        name: req.body.name,
        symbol: req.body.symbol,
        current_price: req.body.current_price,
        market_cap: req.body.market_cap
    })

    addStockData.save().then((stock) => {
        console.log(stock);
    })
        .catch((error) => {
            console.log(error);
        })
});

app.get('/getStockData', (req, res) => {
    StockMarketData.find().then((stock) => {
        res.json(stock);
    })
})

app.delete('/deleteStockData', (req, res) => {
    StockMarketData.deleteOne({ _id: req.body._id }).then((result) => {
        console.log(result);
        res.json(result);
    })
})


// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("tracker-app/build"))
// }


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});