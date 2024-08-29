import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(routes)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
