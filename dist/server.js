"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express_1.default();
        app.get('/', function (req, res) {
            res.send('Hello gays');
        });
        app.listen(this.port, function () {
            console.log("Server Start");
        });
    }
}
exports.default = Server;
