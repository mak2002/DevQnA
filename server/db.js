import dotenv from "dotenv";
dotenv.config();
import applyExtraSetup from "./extra-setup.js";
import user from "./models/user.model.js";
import post from "./models/post.model.js";

import Sequelize from "sequelize";
import express from "express";
const app = express();

const dbURL = process.env.DATABASE_URL || "";

const sequelize = new Sequelize(dbURL, {
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

export default sequelize;
