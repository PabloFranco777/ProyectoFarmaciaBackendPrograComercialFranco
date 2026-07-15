import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Medicamento = sequelize.define('Medicamento', {
  id_medicamento: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  codigo_barras_medicamento: { type: DataTypes.STRING },
  nombre_medicamento: { type: DataTypes.STRING },
  cantidad_por_paquete: { type: DataTypes.INTEGER },
  precio_mayorista: { type: DataTypes.DECIMAL },
  precio_minimo: { type: DataTypes.DECIMAL },
  precio_venta: { type: DataTypes.DECIMAL },
  componente_activo: { type: DataTypes.STRING },
  estado_medicamento: { type: DataTypes.BOOLEAN },
  venta_libre: { type: DataTypes.BOOLEAN },
  existencia_total_medicamento: { type: DataTypes.INTEGER },
  id_presentacion: { type: DataTypes.INTEGER },
}, {
  tableName: 'Medicamento', // Ajuste simple
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Medicamento;
