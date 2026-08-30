const express = require("express");

const app = express();

const port = 3000;

let Users = [];

// ** Middleware

app.use(express.json());

//** Read */
app.get("/", (req, res) => {
  res.send(Users);
});

// * Create
app.post("/create", (req, res) => {
  const body = req.body;

  Users.push(body);

  res.send("created successfully");
});

//**  Update

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const updatedUser = Users.map((user) =>
    user.id === id ? { ...user, name: body.name } : user,
  );

  Users = updatedUser;

  res.send(updatedUser);
});

// ** Delete

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const deletedUser = Users.filter((user) => user.id !== id);

  Users = deletedUser;

  res.send("User Deleted Successfully");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
