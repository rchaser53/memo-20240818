const express = require('express')
const app = express();

app.use(express.json())
app.post('/abc/file/pass-validation', (req, res) => {
    console.log(req)
    res.send('222')
})


app.listen(3000, () => {
    console.log(732)
})