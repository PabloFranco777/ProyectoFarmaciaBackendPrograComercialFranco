import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
  id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  nombre_usuario: { type: DataTypes.STRING },
  telefono_usuario: { type: DataTypes.STRING },
  correo_usuario: { type: DataTypes.STRING },
  dpi_usuario: { type: DataTypes.STRING },
  estado_usuario: { type: DataTypes.BOOLEAN },
  id_rol: { type: DataTypes.INTEGER }
}, { 
  tableName: 'Usuarios', 
  timestamps: true, 
  createdAt: 'created_at', 
  updatedAt: 'updated_at' 
});

export default Usuario;