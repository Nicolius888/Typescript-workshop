import {Response, Request, Router, NextFunction} from 'express';
import { User } from '../models/User';
const router = Router(); 

router.get('/', (req: Request, res: Response) => {
	res.send('soy la ruta get!');
});

router.post('/', (req: Request, res: Response) => {
	res.send('soy la ruta post!');
});

router.get('/user', (req: Request, res: Response, next: NextFunction) => {
	// console.log("estoy en el get de user");
	User.findAll()
	.then((users) => {
		res.send(users);
	})
	.catch((error) => next(error));
});

router.post('/user', (req: Request, res: Response, next: NextFunction) => {
	// console.log("estoy en el post de user");
	const user = req.body;
	User.create(user)
		.then((createdUser) => {
			res.send("created " + createdUser);
		})
		.catch((error) => next(error));
});

router.delete('/user/:id', (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	User.destroy({
		where: {
			id: id
		}
	})
		.then((deletedUser) => {
			res.send("user " + deletedUser + " deleted");
		}
		)
		.catch((error) => next(error));
});

export default router;