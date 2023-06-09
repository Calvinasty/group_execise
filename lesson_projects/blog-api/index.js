const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/api')
const methodOverride = require('method-override')

const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser)
app.use(urlencodedParser)

app.use(express.static('public'))

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method
        delete req.body._method
        return method
    }
}))
routes(app)

app.listen(2500, () => {
    console.log('app started on port 2500')
})