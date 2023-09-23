import express, { Request, Response } from 'express';
import appRouter from './route/index.route';
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Book Catalog Backend API!');
});


app.use("/api/v1/", appRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
