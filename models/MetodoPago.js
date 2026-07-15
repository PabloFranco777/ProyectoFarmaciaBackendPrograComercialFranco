import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const MetodoPago = sequelize.define('MetodoPago', {
  id_metodo_pago: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_metodo_pago: { type: DataTypes.STRING },
  cuenta_metodo_pago: { type: DataTypes.STRING },
  estado_metodo_pago: { type: DataTypes.BOOLEAN },
}, {
  tableName: 'MetodoPago', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default MetodoPago;
