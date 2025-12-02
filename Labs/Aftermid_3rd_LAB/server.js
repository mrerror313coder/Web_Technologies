const express = requre('express');
const path = requre('path')

const app  = express();

const PORT = process.env.PORT || 8282;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Server is running sucessfully</h1>')

})