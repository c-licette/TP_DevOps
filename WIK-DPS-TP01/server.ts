import ("dotenv").config();

var express = require("express");
var app = express();

const PORT = process.env.PING_LISTEN_PORT || 3000;
const startTime = Date.now();

app.get("/ping",(req: express.Request, res: express.Response) => {
    res.json({headers: req.headers});
});

app.get("/stats", (req: express.Request, res: express.Response) => {
  res.json({
    //NbrRequetes: ,
    Uptime: process.uptime()
  });
});

app.use("/", (req: express.Request, res: express.Response) => {
    res.status(404).end();
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




//FAeZmrXD9Y