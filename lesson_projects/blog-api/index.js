const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/api')

const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser)
app.use(urlencodedParser)

routes(app)

app.listen(2500, () => {
    console.log('app started on port 2500')
})