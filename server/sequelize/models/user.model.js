import { DataTypes } from "sequelize";

// This function will automatically receive as parameter the Sequelize connection object.
export default (sequelize) => {
  sequelize.define("user", {
    // The following specification of the 'id' attribute could be omitted
    // since it is the default.

    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        // We require usernames to have length of at least 3, and
        // only use letters, numbers and underscores.
        is: /^\w{3,}$/,
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
    },
    about: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    profileImage: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    age: {
      allownull: true,
      type: DataTypes.INTEGER,
    },
  });
};
