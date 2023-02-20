import Sequelize from "../db.js";

// get all posts
export const getQuestions = async (req, res) => {
  try {
    const questions = await Sequelize.models.post.findAll({
      where: {
        postType: "QUESTION",
      },
    });
    res.send(questions);
  } catch (err) {
    console.log(err);
  }
};

export const getQuestionsByTitle = async (req, res) => {
  try {
    console.log("req.body", req.body, req.params);
    const { id: title } = req.params;
    console.log("id", title);
    const questions = await Sequelize.models.post.findAll({
      where: {
        postType: "QUESTION",
        title: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("title")),
          "LIKE",
          "%" + title.toLowerCase() + "%"
        ),
      },
    });
    res.send(questions);
  } catch (err) {
    console.log(err);
  }
};

export const getAnswersByID = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const answers = await Sequelize.models.post.findAll({
      where: {
        parentPostId: id,
      },
    });
    res.send(answers);
    console.log("separate ans", answers);
  } catch (err) {
    console.log(err);
  }
};

// get a post by id
export const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Sequelize.models.post.findOne({
      where: {
        id: id,
      },
    });
    res.send(question);
  } catch (err) {
    console.log(err);
  }
};

// post a question
export const postQuestion = async (req, res) => {
  try {
    const { title, content, postType, tags, userEmail, parentPostId } =
      req.body;
    const newPost = await Sequelize.models.post.create({
      postType: postType,
      title: title,
      content: content,
      tags: tags,
      userEmail: userEmail,
      parentPostId: parentPostId,
    });
    console.log("newPost", newPost);
    res.send(newPost);
  } catch (err) {
    console.log(err);
  }
};

// delete a question
export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    await Sequelize.models.post.destroy({
      where: {
        id: id,
      },
    });
    res.send("deleted");
  } catch (err) {
    console.log(err);
  }
};

// update a question
export const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, tags, upvotes, downvotes } = req.body;
    const updatedQuestion = await Sequelize.models.post.update(
      {
        title: title,
        content: content,
        tags: tags,
        upvotes: upvotes,
        downvotes: downvotes,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.send(updatedQuestion);
  } catch (err) {
    console.log(err);
  }
};
