import express, { Router } from 'express';
const app = express();
import { candidates, columns, reasonsOptions } from './mocks/data.js';
import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = Router()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', userRouter)
app.get('/candidates', (req, res) => {
  res.send(candidates);
});

app.post('/candidates/:id', (req, res) => {
  const id = req.params.id;
  const { reason } = req.body;

  const candidateIndex = candidates.findIndex((candidate) => candidate.id == id);
  candidates[candidateIndex].reason = reason;

  res.send(candidates);
});

app.get('/columns', (req, res) => {
  const columnsList = Object.keys(columns).filter(column => columns[column]);
  res.send(columnsList);
});

app.post('/columns', (req, res) => {
  const { selectedColumns } = req.body;
  for (const key in columns) {
    columns[key] = selectedColumns.includes(key);
  }
  const columnsList = Object.keys(columns).filter(column => columns[column]);

  res.send(columnsList);
});

app.get('/availableColumns', (req, res) => {
  const availableColumns = Object.keys(columns);
  res.send(availableColumns);
});

app.get('/availableReasons', (req, res) => {
  res.send(reasonsOptions);
});

app.listen(4500)