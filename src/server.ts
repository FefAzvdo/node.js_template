import routes from './routes';
import express from 'express';

const app = express();

app.listen(3333, () => console.log('Rodando na porta 3333'));

app.use(routes);
