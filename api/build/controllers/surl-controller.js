"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSurl = exports.listSurls = void 0;
const surl_model_1 = __importDefault(require("../models/surl-model"));
const listSurls = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield surl_model_1.default.find({}, (err, surls) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!surls.length) {
            return res.status(404).json({ success: false, error: `Surls not found` });
        }
        return res.status(200).json({ success: true, data: surls });
    }).catch((err) => console.log(err));
});
exports.listSurls = listSurls;
const createSurl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a surl object'
        });
    }
    const surl = new surl_model_1.default(body);
    if (!surl) {
        return res.status(400).json({ success: false, error: 'Surl object not read successfully' });
    }
    const findExisting = yield surl_model_1.default.find({
        $or: [{ fullUrl: surl.fullUrl }, { shortUrl: surl.shortUrl }]
    });
    if (findExisting.length > 0) {
        return res.status(400).json({ success: false, error: 'Full or short url duplicated. Please try again.' });
    }
    surl
        .save()
        .then(() => {
        return res.status(201).json({
            success: true,
            id: surl._id,
            message: 'Surl created'
        });
    })
        .catch((error) => {
        return res.status(400).json({
            error,
            message: 'Surl not created'
        });
    });
});
exports.createSurl = createSurl;
