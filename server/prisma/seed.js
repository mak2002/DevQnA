import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// const Users = require("../data/users");
// const Posts = require("../data/posts");
import users from "../data/users.js";
import posts from "../data/posts.js";

async function main() {
  // Users
  // await Promise.all(
  //   users.map(async (user) =>
  //     prisma.user.upsert({
  //       where: { id: user.id },
  //       update: {},
  //       create: user,
  //     })
  //   )
  // );

  // Posts
  await Promise.all(
    posts.map(async (post) =>
      prisma.post.upsert({
        where: { id: post.id },
        update: {},
        create: post,
      })
    )
  );

  // make 5 users
  // for (let i = 0; i < 5; i++) {
  //   const user = await prisma.user.create({
  //     data: {
  //       username: faker.helpers.unique(faker.internet.userName),
  //       email: faker.internet.email(),
  //       about: faker.lorem.paragraph(),
  //       profileImage: faker.image.avatar(),
  //       age: faker.datatype.number({
  //         min: 19,
  //         max: 100,
  //       })
  //     },
  //   });
  //   console.log(`Created user with id: ${user.id}`);
  // }

  // const users = await prisma.user.findMany();
  // console.log(users);

  // users.forEach(async (user) => {
  //   for (let i = 0; i < 2; i++) {
  //     await prisma.post.create({
  //       data: {
  //         postType: "QUESTION",
  //         createdAt: faker.date.past(),
  //         upvotes: faker.datatype.number(),
  //         downvotes: faker.datatype.number(),
  //         updatedAt: faker.date.recent(),
  //         title: faker.lorem.sentence(),
  //         content: faker.lorem.paragraph(),
  //         authorId: { connect: { id: user.id } },
  //         tags: faker.helpers.arrayElement([
  //           "javascript",
  //           "python",
  //           "c",
  //           "c++",
  //           "Ruby",
  //         ]),
  //       },
  //     });
  //   }
  // });

  // connect posts with users
  // const posts = await prisma.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  // });

  // await prisma.user.update({
  //   where: {
  //     id: user.id,
  //   },
  //   data: {
  //     posts: {
  //       connect: posts.map((post) => {
  //         return { id: post.id };
  //       }),
  //     },
  //   },
  // });

  // console.log(`Created user with id: ${user.id}`);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
