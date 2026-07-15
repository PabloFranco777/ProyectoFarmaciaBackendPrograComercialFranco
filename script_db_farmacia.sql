CREATE DATABASE IF NOT EXISTS farmacia_comercial_2026;
USE farmacia_comercial_2026;

CREATE TABLE Roles (
    id_rol INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL,
    estado_rol BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nombre_usuario VARCHAR(100) NOT NULL,
    telefono_usuario VARCHAR(20),
    correo_usuario VARCHAR(100),
    dpi_usuario VARCHAR(20),
    estado_usuario BOOLEAN DEFAULT TRUE,
    id_rol INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
);

CREATE TABLE Cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(100) NOT NULL,
    nit_cliente VARCHAR(20),
    estado_cliente BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE MetodosPago (
    id_metodo_pago INT AUTO_INCREMENT PRIMARY KEY,
    nombre_metodo_pago VARCHAR(50) NOT NULL,
    cuenta_metodo_pago VARCHAR(50),
    estado_metodo_pago BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Venta (
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    fecha_venta DATETIME NOT NULL,
    estado_venta BOOLEAN DEFAULT TRUE,
    total_venta DECIMAL(10,2) NOT NULL,
    id_usuario INT NOT NULL,
    id_cliente INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE DetalleMetodosPago (
    id_detalle_metodos_pago INT AUTO_INCREMENT PRIMARY KEY,
    cantidad_detalle_metodos_pago DECIMAL(10,2) NOT NULL,
    estado_detalle_metodos_pago BOOLEAN DEFAULT TRUE,
    id_venta INT NOT NULL,
    id_metodo_pago INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_venta) REFERENCES Venta(id_venta),
    FOREIGN KEY (id_metodo_pago) REFERENCES MetodosPago(id_metodo_pago)
);

CREATE TABLE Presentacion (
    id_presentacion INT AUTO_INCREMENT PRIMARY KEY,
    nombre_presentacion VARCHAR(100) NOT NULL,
    estado_presentacion BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Medicamento (
    id_medicamento INT AUTO_INCREMENT PRIMARY KEY,
    codigo_barras_medicamento VARCHAR(50),
    nombre_medicamento VARCHAR(150) NOT NULL,
    cantidad_por_paquete INT,
    precio_mayorista DECIMAL(10,2),
    precio_minimo DECIMAL(10,2),
    precio_venta DECIMAL(10,2) NOT NULL,
    componente_activo VARCHAR(150),
    estado_medicamento BOOLEAN DEFAULT TRUE,
    venta_libre BOOLEAN DEFAULT TRUE,
    existencia_total_medicamento INT DEFAULT 0,
    id_presentacion INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_presentacion) REFERENCES Presentacion(id_presentacion)
);

CREATE TABLE DetalleVenta (
    id_detalle_venta INT AUTO_INCREMENT PRIMARY KEY,
    cantidad_detalle_venta INT NOT NULL,
    subtotal_detalle_venta DECIMAL(10,2) NOT NULL,
    estado_detalle_venta BOOLEAN DEFAULT TRUE,
    id_medicamento INT NOT NULL,
    id_venta INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_medicamento) REFERENCES Medicamento(id_medicamento),
    FOREIGN KEY (id_venta) REFERENCES Venta(id_venta)
);

CREATE TABLE Lote (
    id_lote INT AUTO_INCREMENT PRIMARY KEY,
    fecha_vencimiento DATE NOT NULL,
    fecha_produccion DATE,
    precio_lote DECIMAL(10,2),
    estado_lote BOOLEAN DEFAULT TRUE,
    existencia_lote INT NOT NULL,
    id_medicamento INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_medicamento) REFERENCES Medicamento(id_medicamento)
);

CREATE TABLE CasaMedica (
    id_casa_medica INT AUTO_INCREMENT PRIMARY KEY,
    nombre_casa_medica VARCHAR(150) NOT NULL,
    estado_casa_medica BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Proveedor (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    nombre_proveedor VARCHAR(150) NOT NULL,
    estado_proveedor BOOLEAN DEFAULT TRUE,
    telefono_proveedor VARCHAR(20),
    direccion_proveedor TEXT,
    correo_proveedor VARCHAR(100),
    total_adquirido_proveedor DECIMAL(12,2) DEFAULT 0,
    cantidad_adquirido_proveedor INT DEFAULT 0,
    id_casa_medica INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_casa_medica) REFERENCES CasaMedica(id_casa_medica)
);

CREATE TABLE Compras (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    fecha_compra DATETIME NOT NULL,
    total_compra DECIMAL(10,2) NOT NULL,
    estado_compra BOOLEAN DEFAULT TRUE,
    id_proveedor INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_proveedor) REFERENCES Proveedor(id_proveedor)
);

CREATE TABLE DetalleCompra (
    id_detalle_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_compra INT NOT NULL,
    id_medicamento INT NOT NULL,
    cantidad_compra INT NOT NULL,
    subtotal_compra DECIMAL(10,2) NOT NULL,
    estado_compra BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_compra) REFERENCES Compras(id_compra),
    FOREIGN KEY (id_medicamento) REFERENCES Medicamento(id_medicamento)
);
