import express from 'express';
import { createAppointment, getAppointments, updateAppointmentStatus } from '../Controllers/appointmentController.js';
import { verifyToken} from '../auth/verifyToken.js';

const router = express.Router();

// Create appointment
router.post('/', verifyToken, createAppointment);

// Get appointments
router.get('/', verifyToken, getAppointments);

// Update appointment status
router.put('/:id', verifyToken, updateAppointmentStatus);

export default router; 