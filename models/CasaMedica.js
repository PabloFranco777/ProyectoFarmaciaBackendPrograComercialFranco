import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const CasaMedica = sequelize.define('CasaMedica', {
  id_casa_medica: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_casa_medica: { type: DataTypes.STRING },
  estado_casa_medica: { type: DataTypes.BOOLEAN },
}, {
  tableName: 'CasaMedicas', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default CasaMedica;
