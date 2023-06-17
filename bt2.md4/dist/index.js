"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const book_router_1 = __importDefault(require("./src/router/book.router"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use('/book', book_router_1.default);
app.use(body_parser_1.default.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
const DB_URL = 'mongodb://localhost:27017/MongoDB';
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch((error) => console.log('DB connection error:', error.message));
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});
//# sourceMappingURL=index.js.map