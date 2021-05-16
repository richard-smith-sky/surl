"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://mongodb:27017/surl', { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
    console.error('Connection error', e.message);
});
// local: mongodb://127.0.0.1:27017
const db = mongoose_1.default.connection;
exports.default = db;
