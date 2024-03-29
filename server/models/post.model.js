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
      userEmail: {
        allowNull: true,
        type: DataTypes.STRING,
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
        allowNull: true,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      details2: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      tags: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      views: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      parentPostId: {
        allowNull: true,
        type: DataTypes.UUID,
        references: {
          model: "post",
          key: "id",
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
};
