"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const surl_router_1 = __importDefault(require("./routes/surl-router"));
const app = express_1.default();
const apiPort = 5000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(express_1.default.json());
db_1.default.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/api', surl_router_1.default);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
