import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const DetalleVenta = sequelize.define('DetalleVenta', {
  id_detalle_venta: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cantidad_detalle_venta: { type: DataTypes.INTEGER },
  subtotal_detalle_venta: { type: DataTypes.DECIMAL },
  estado_detalle_venta: { type: DataTypes.BOOLEAN },
  id_medicamento: { type: DataTypes.INTEGER },
  id_venta: { type: DataTypes.INTEGER },
}, {
  tableName: 'DetalleVentas', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default DetalleVenta;
