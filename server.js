const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Student Management Application is running!");
});

app.get("/students", (req, res) => {
    res.json([
        { id: 1, name: "Rahul", course: "BCA" },
        { id: 2, name: "Priya", course: "BCA" }
    ]);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;