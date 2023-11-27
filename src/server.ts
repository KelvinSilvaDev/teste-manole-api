import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", routes);

const port = 3333;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});