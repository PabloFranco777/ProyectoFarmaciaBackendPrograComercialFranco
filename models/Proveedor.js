import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_proveedor: { type: DataTypes.STRING },
  estado_proveedor: { type: DataTypes.BOOLEAN },
  telefono_proveedor: { type: DataTypes.STRING },
  direccion_proveedor: { type: DataTypes.TEXT },
  correo_proveedor: { type: DataTypes.STRING },
  total_adquirido_proveedor: { type: DataTypes.DECIMAL },
  cantidad_adquirido_proveedor: { type: DataTypes.INTEGER },
  id_casa_medica: { type: DataTypes.INTEGER },
}, {
  tableName: 'Proveedor', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Proveedor;
