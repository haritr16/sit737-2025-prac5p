const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})


const port = 8081;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
