import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Cliente = sequelize.define('Cliente', {
  id_cliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_cliente: { type: DataTypes.STRING },
  nit_cliente: { type: DataTypes.STRING },
  estado_cliente: { type: DataTypes.BOOLEAN },
}, {
  tableName: 'Cliente', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Cliente;
