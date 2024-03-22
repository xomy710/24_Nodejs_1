const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/jjeong'))


app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html')
}) 

app.get('/about', (req, res) => {
  res.sendfile(__dirname + '/about.html')
}) 

app.get('/news', (req, res) => {
  res.send('today news is ...')
}) 

app.get('/shop', (req, res) => {
  res.send('this is shopping page ...')
}) 