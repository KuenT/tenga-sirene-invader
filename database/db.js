"use strict";

const mongoose = require("mongoose");
const stock = require("../model/stockModel");

let db;

const createConnection = async (truncate = false) => {
    //Set up default mongoose connection
    //var mongoDB = "mongodb+srv://quentin:test123494@cluster0.p8x2c.mongodb.net/sirene?retryWrites=true&w=majority"
    var mongoDB = "mongodb://localhost:27017/sirene";
    db = await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, minPoolSize: 5, maxPoolSize: 100 });
    console.log("Connected successfully");

    //deleting all records from the db before loading CSV
    if (truncate) {
        console.log("Truncating DB");
        await stock.StockEtablissementModel.deleteMany({});
        console.log("DB Truncate complete");
    }

};

const closeConnection = async () => {
    console.log("Close Db Connection");
    await db.disconnect();
    console.log("Connection closed");
};

module.exports = {
    createConnection,
    closeConnection
};