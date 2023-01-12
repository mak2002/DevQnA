import express from "express";
const app = express();
import cors from "cors";
import { Sequelize } from "sequelize";
import users from "./data/users.js";
import posts from "./data/posts.js";

// import dotnet config
import dotenv from "dotenv";
dotenv.config();

import applyExtraSetup from "./extra-setup.js";
import user from "./sequelize/models/user.model.js";
import post from "./sequelize/models/post.model.js";

const port = 3000;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    freezeTableName: true,
  },
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true,
    native: true,
  },
});

const modelDefiners = [user, post];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

await sequelize.sync({ force: true });
// console.log("All models were synchronized successfully.");

// seed data for users and posts from data folder
await sequelize.models.user.bulkCreate(users);
await sequelize.models.post.bulkCreate(posts);

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

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

// get all posts
app.get("/getAllPosts", async (req, res) => {
  try {
    const posts = await sequelize.models.post.findAll();
    res.send(posts);
  } catch (err) {
    console.log(err);
  }
});

// post a question
app.post("/postQuestion", async (req, res) => {
  try {
    const { title, content, authorId, postType, tags, userId } = req.body;
    const newPost = await sequelize.models.post.create({
      postType: postType,
      title,
      content,
      authorId,
      tags,
      userId
    });
    res.send(newPost);
  } catch (err) {
    console.log(err);
  }
});

export default sequelize;
