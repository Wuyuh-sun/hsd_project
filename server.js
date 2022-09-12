const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const testList = [{
  id:1,
  text:'text',
  user: 'yunha'
}];

app.get('/test', (req, res) => {
  res.json(testList);
})
app.post('/test', (req, res) => {
  const {text,user} = req.body;
  testList.push({
    id: id++,
    text,
    user
  })
  return res.send('success');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
})