import { DataTypes } from "sequelize";

// This function will automatically receive as parameter the Sequelize connection object.
export default (sequelize) => {
  sequelize.define(
    "post",
    {
      // The following specification of the 'id' attribute could be omitted
      // since it is the default.
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      postType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      upvotes: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      downvotes: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      authorId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tags: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
