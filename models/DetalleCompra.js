import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const DetalleCompra = sequelize.define('DetalleCompra', {
  id_detalle_compra: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_compra: { type: DataTypes.INTEGER },
  id_medicamento: { type: DataTypes.INTEGER },
  cantidad_compra: { type: DataTypes.INTEGER },
  subtotal_compra: { type: DataTypes.DECIMAL },
  estado_compra: { type: DataTypes.BOOLEAN },
}, {
  tableName: 'DetalleCompras', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default DetalleCompra;
