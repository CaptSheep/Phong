"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var mongoose_1 = require("mongoose");
var PORT = 3000;
var app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
var DB_URL = 'mongodb+srv://ngphong0708:vJdmPagODEqQLGaX@cluster0.ilmi62h.mongodb.net/book_manager';
mongoose_1.default.connect(DB_URL)
    .then(function () { return console.log('DB connect succes'); })
    .catch(function (error) { return console.log('Db connect not foud', error.message); });
app.use(body_parser_1.default.json());
app.listen(PORT, function () {
    console.log("http://localhost:" + PORT);
});
