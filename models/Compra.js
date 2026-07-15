import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Compra = sequelize.define('Compra', {
  id_compra: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha_compra: { type: DataTypes.DATE },
  total_compra: { type: DataTypes.DECIMAL },
  estado_compra: { type: DataTypes.BOOLEAN },
  id_proveedor: { type: DataTypes.INTEGER },
}, {
  tableName: 'Compras', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Compra;
