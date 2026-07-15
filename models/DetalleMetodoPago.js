import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const DetalleMetodoPago = sequelize.define('DetalleMetodoPago', {
  id_detalle_metodos_pago: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cantidad_detalle_metodos_pago: { type: DataTypes.DECIMAL },
  estado_detalle_metodos_pago: { type: DataTypes.BOOLEAN },
  id_venta: { type: DataTypes.INTEGER },
  id_metodo_pago: { type: DataTypes.INTEGER },
}, {
  tableName: 'DetalleMetodoPago', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default DetalleMetodoPago;
