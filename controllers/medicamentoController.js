import { Medicamento } from '../models/index.js';

export const obtenerMedicamentos = async (req, res) => {
    try {
        const medicamentos = await Medicamento.findAll();
        res.json(medicamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los medicamentos' });
    }
};