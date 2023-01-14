import { DataTypes } from "sequelize";

// This function will automatically receive as parameter the Sequelize connection object.
export default (sequelize) => {
  sequelize.define(
    "emails",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      username: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
