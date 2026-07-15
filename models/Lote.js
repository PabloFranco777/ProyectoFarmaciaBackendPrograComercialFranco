import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Lote = sequelize.define('Lote', {
  id_lote: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha_vencimiento: { type: DataTypes.DATE },
  fecha_produccion: { type: DataTypes.DATE },
  precio_lote: { type: DataTypes.DECIMAL },
  estado_lote: { type: DataTypes.BOOLEAN },
  existencia_lote: { type: DataTypes.INTEGER },
  id_medicamento: { type: DataTypes.INTEGER },
}, {
  tableName: 'Lote', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Lote;
