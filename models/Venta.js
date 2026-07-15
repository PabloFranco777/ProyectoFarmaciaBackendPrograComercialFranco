import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Venta = sequelize.define('Venta', {
  id_venta: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha_venta: { type: DataTypes.DATE },
  estado_venta: { type: DataTypes.BOOLEAN },
  total_venta: { type: DataTypes.DECIMAL },
  id_usuario: { type: DataTypes.INTEGER },
  id_cliente: { type: DataTypes.INTEGER },
}, {
  tableName: 'Ventas', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Venta;
