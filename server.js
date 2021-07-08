const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

const db = require("./server/models/index");

//Test DB
// db.authenticate()
//     .then(() => console.log("Database connected..."))
//     .catch((err) => console.log("Error" + err));

//Port
const port = process.env.PORT || 5000;

//Cors
app.use(cors());
/* Serve static files from the React app */
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    //app.use(cors());
    // app.use(morgan("tiny"));
    console.log("env develeopment");
}

//Routes and use them
const messagesRouter = require("./server/routes/messagesRouter");
const connectedUsersRouter = require("./server/routes/connectedUsersRouter");

app.use("/connected", connectedUsersRouter);
app.use("/messages", messagesRouter);

//Open socket
io.on("connection", (socket) => {
    socket.emit("your id", socket.id);
    socket.on("send", (body) => {
        io.emit("message", body);
    });
});

const dev = app.get("env") === "production";

if (dev) {
    app.use(express.static("client/build"));
    /* gets you to react generated index file - root of your application */
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

server.listen(port, () => console.log(`server is running on port ${port}`));