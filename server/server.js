import  express from 'express';
import { render } from "./render"

const app = express();
const port = 3000;


app.get('/', handleErrors(async function(req, res) {
    render(req.url, res);
  }))


function handleErrors(fn) {
    return async function(req, res, next) {
      try {
        return await fn(req, res);
      } catch (x) {
        next(x);
      }
    };
  }

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})