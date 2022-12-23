import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
import cors from "cors";

const port = 3000;

const prisma = new PrismaClient();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/posts", async (req, res) => {
  try {
    const users = await prisma.post.findMany();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

app.get(`/posts/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.post(`/postQuestion`, async (req, res) => {
  try {
    const { title, content, authorId, postType, tags } = req.body;
    const post = await prisma.post.create({
      data: {
        title: title,
        postType: postType,
        content: content,
        authorId: authorId,
        tags: 'someTag',
      },
    });
    res.send(post);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
