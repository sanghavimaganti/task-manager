const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

function readData(file) {
    return JSON.parse(fs.readFileSync(file));
}

function writeData(file, data) {
    fs.writeFileSync(file, JSON.stringify(data));
}

app.post("/signup", (req, res) => {

    const users = readData("users.json");

    users.push(req.body);

    writeData("users.json", users);

    res.json({ message: "Signup Successful" });
});

app.post("/login", (req, res) => {

    const users = readData("users.json");

    const user = users.find(
        u => u.username === req.body.username &&
        u.password === req.body.password
    );

    if(user) {
        res.json({ message: "Login Successful" });
    } else {
        res.json({ message: "Invalid Credentials" });
    }
});

app.get("/tasks", (req, res) => {

    const tasks = readData("tasks.json");

    res.json(tasks);
});

app.post("/tasks", (req, res) => {

    const tasks = readData("tasks.json");

    tasks.push(req.body);

    writeData("tasks.json", tasks);

    res.json({ message: "Task Added" });
});

app.delete("/tasks/:id", (req, res) => {

    let tasks = readData("tasks.json");

    tasks.splice(req.params.id, 1);

    writeData("tasks.json", tasks);

    res.json({ message: "Task Deleted" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});