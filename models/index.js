import sequelize from '../config/database.js';
import Rol from './Rol.js';
import Usuario from './Usuario.js';
import Cliente from './Cliente.js';
import MetodoPago from './MetodoPago.js';
import Presentacion from './Presentacion.js';
import CasaMedica from './CasaMedica.js';
import Proveedor from './Proveedor.js';
import Medicamento from './Medicamento.js';
import Lote from './Lote.js';
import Compra from './Compra.js';
import DetalleCompra from './DetalleCompra.js';
import Venta from './Venta.js';
import DetalleVenta from './DetalleVenta.js';
import DetalleMetodoPago from './DetalleMetodoPago.js';

// Relaciones (1:M basadas en tu diagrama)
Rol.hasMany(Usuario, { foreignKey: 'id_rol' });
Usuario.belongsTo(Rol, { foreignKey: 'id_rol' });

CasaMedica.hasMany(Proveedor, { foreignKey: 'id_casa_medica' });
Proveedor.belongsTo(CasaMedica, { foreignKey: 'id_casa_medica' });

Presentacion.hasMany(Medicamento, { foreignKey: 'id_presentacion' });
Medicamento.belongsTo(Presentacion, { foreignKey: 'id_presentacion' });

Medicamento.hasMany(Lote, { foreignKey: 'id_medicamento' });
Lote.belongsTo(Medicamento, { foreignKey: 'id_medicamento' });

Proveedor.hasMany(Compra, { foreignKey: 'id_proveedor' });
Compra.belongsTo(Proveedor, { foreignKey: 'id_proveedor' });

Compra.hasMany(DetalleCompra, { foreignKey: 'id_compra' });
DetalleCompra.belongsTo(Compra, { foreignKey: 'id_compra' });

Medicamento.hasMany(DetalleCompra, { foreignKey: 'id_medicamento' });
DetalleCompra.belongsTo(Medicamento, { foreignKey: 'id_medicamento' });

Usuario.hasMany(Venta, { foreignKey: 'id_usuario' });
Venta.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Cliente.hasMany(Venta, { foreignKey: 'id_cliente' });
Venta.belongsTo(Cliente, { foreignKey: 'id_cliente' });

Venta.hasMany(DetalleVenta, { foreignKey: 'id_venta' });
DetalleVenta.belongsTo(Venta, { foreignKey: 'id_venta' });

Medicamento.hasMany(DetalleVenta, { foreignKey: 'id_medicamento' });
DetalleVenta.belongsTo(Medicamento, { foreignKey: 'id_medicamento' });

Venta.hasMany(DetalleMetodoPago, { foreignKey: 'id_venta' });
DetalleMetodoPago.belongsTo(Venta, { foreignKey: 'id_venta' });

MetodoPago.hasMany(DetalleMetodoPago, { foreignKey: 'id_metodo_pago' });
DetalleMetodoPago.belongsTo(MetodoPago, { foreignKey: 'id_metodo_pago' });

export { sequelize, Rol, Usuario, Cliente, MetodoPago, Presentacion, CasaMedica, Proveedor, Medicamento, Lote, Compra, DetalleCompra, Venta, DetalleVenta, DetalleMetodoPago };