"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./lib/config"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// app its an application, we bring this type from express.
//Henry says:
// Lo que estamos haciendo ahi,
// es decirle nuestra variable app que es
//una Application de express.
//Ahora, seguro estas pensando
//¿Como hago yo para saber eso?
//Simple! Esta en la documentacion.
//Casi todos los paquetes de npm 
//ienen soporte para typescript,
//algunos hasta estan escritos en TS!
app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' })); //middleware
app.use(express_1.default.json({ limit: '50mb' }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: config_1.default.cors,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
}));
app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
//just for initial test
// app.get('/', (req: Request, res: Response) => {
// 	res.send('hola typescript!');
// });
app.use('/', index_1.default);
exports.default = app;
