export default function applyExtraSetup(sequelize) {
  const { user, post } = sequelize.models;

  user.hasMany(post);
}
