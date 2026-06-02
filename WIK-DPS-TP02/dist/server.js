"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
const PORT = process.env.PING_LISTEN_PORT || 3000;
const startTime = Date.now();
app.get("/ping", (req, res) => {
    res.json({ headers: req.headers });
});
app.get("/stats", (req, res) => {
    res.json({
        //NbrRequetes: ,
        Uptime: process.uptime()
    });
});
app.use("/", (req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//FAeZmrXD9Y
