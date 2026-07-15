import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Presentacion = sequelize.define('Presentacion', {
  id_presentacion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_presentacion: { type: DataTypes.STRING },
  estado_presentacion: { type: DataTypes.BOOLEAN },
}, {
  tableName: 'Presentacion', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Presentacion;
