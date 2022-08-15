'use strict'

module.exports = (sequelize, DataTypes) => {

  let ArchivoUsuario = sequelize.define('archivo_usuario', { 
    id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true, 
      primaryKey: true, 
      allowNull: false 
    },
    nombre: {  //nombre con el que se identifica al archivo por si sube varios 
      type: DataTypes.STRING,
      allowNull: true,
    },
    file: { //nombre del archivo
      type: DataTypes.STRING,
      allowNull: true
    },
    original_name: {  //nombre original del archivo cuando se sube
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: { 
      type: DataTypes.DATE, 
      field: 'created_at', 
      defaultValue: DataTypes.NOW,
      allowNull: false 
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: { 
      type: DataTypes.DATE, 
      field: 'deleted_at' 
    }
  }, {
    paranoid: true, 
    freezeTableName: true, 
  })

  ArchivoUsuario.associate = models => {
    ArchivoUsuario.belongsTo(models.usuario) // un archivo pertenece a un usuario
  }

  return ArchivoUsuario
}

