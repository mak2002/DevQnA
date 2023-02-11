import express from "express";
const app = express();
import cors from "cors";
import sequelize from "./db.js";
import users from "./data/users.js";
import posts from "./data/posts.js";
import posts_routes from "./routes/Posts.js";
import users_routes from "./routes/Users.js";

const port = 3000;

await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");

sequelize
  .query(
    `ALTER TABLE post 
  ALTER COLUMN details2 TYPE varchar(3000),
  ALTER COLUMN content TYPE varchar(3000)`
  )
  .then(() => {
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>Column size changed successfully!"
    );
  })
  .catch((err) => {
    console.error("Error changing column size: ", err);
  });

await sequelize.models.user.bulkCreate(users);
await sequelize.models.post.bulkCreate(posts);

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/posts", posts_routes);
app.use("/api/users", users_routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// get all users
app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await sequelize.models.user.findAll();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

// put new user
app.post("/putNewUser", async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = await sequelize.models.user.create({
      username,
      email,
    });
    console.log(username, email);
    res.send(newUser);
  } catch (err) {
    console.log(err);
  }
});

export default sequelize;
