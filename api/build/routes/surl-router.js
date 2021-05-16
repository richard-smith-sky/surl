"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const surl_controller_1 = require("../controllers/surl-controller");
const router = express_1.default.Router();
router.post('/surl', surl_controller_1.createSurl);
router.get('/surls', surl_controller_1.listSurls);
exports.default = router;
