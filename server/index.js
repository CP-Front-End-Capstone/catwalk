const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/../client/dist'));

app.get('https://app-hrsei-api.herokuapp.com/api/fec2/:hr-bld16/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





