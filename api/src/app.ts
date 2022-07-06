import express, {Application, Request, Response, NextFunction} from 'express';
import config from './lib/config';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express(); 
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

app.use(express.urlencoded({extended: true, limit: '50mb'})); //middleware
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
	cors({
		origin: config.cors,
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
	})
);

interface error {
	status: number;
	message: string;
}
app.use((err: error, req: Request, res: Response, next: NextFunction) => {
	// eslint-disable-line no-unused-vars
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

app.get('/', (req: Request, res: Response) => {
	res.send('hola typescript!');
});

export default app;
