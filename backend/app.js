import express from 'express';
import { routes } from './src/routes';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});