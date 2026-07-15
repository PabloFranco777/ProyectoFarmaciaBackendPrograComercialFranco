import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js';
import medicamentoRoutes from './routes/medicamentoRoutes.js'; // <-- NUEVA LÍNEA

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => res.json({ status: 'OK', message: 'API Farmacia funcionando' }));

// Rutas
app.use('/api/medicamentos', medicamentoRoutes); // <-- NUEVA LÍNEA

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: false }).then(() => {
    console.log('Base de datos conectada exitosamente.');
    app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
}).catch(err => console.error('Error al sincronizar la base de datos:', err));