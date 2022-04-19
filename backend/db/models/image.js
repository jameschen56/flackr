'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, {foreignKey: 'userId'})
    Image.hasMany(models.Comment, {foreignKey: 'imageId', onDelete: "cascade", hooks: true})
    Image.hasMany(models.Like, {foreignKey: 'imageId', onDelete: 'CASCADE', hooks: true })
  };
  return Image;
};