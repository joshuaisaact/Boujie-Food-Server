import express, {Request, Response} from 'express';
import { listFoods } from '../controllers/listitems.js';
import { getFood } from '../controllers/getfood.js';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

router.get('/items', listFoods)

router.get('/items/:name', getFood)

export default router;