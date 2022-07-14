"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const db_1 = require("./src/db");
db_1.sequelize
    .sync({ force: true, logging: false })
    .then(() => {
    console.log('base de datos conectada! B) ');
    app_1.default.listen(3001, function () {
        console.log('App is listening on port 3001!');
    });
})
    .catch((err) => console.error(err));
