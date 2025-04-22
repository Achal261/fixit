import Appointment from '../models/AppointmentSchema.js';
import User from '../models/UserSchema.js';
import Service from '../models/ServiceSchema.js';

export const createAppointment = async (req, res) => {
    try {
        const { serviceId, date, time, details } = req.body;
        const userId = req.userId; // Assuming you have middleware that adds userId to req

        // Validate service exists
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        // Create new appointment
        const appointment = new Appointment({
            userId,
            serviceId,
            date,
            time,
            details
        });

        await appointment.save();

        res.status(200).json({
            success: true,
            message: 'Appointment created successfully',
            data: appointment
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create appointment',
            error: err.message
        });
    }
};

export const getAppointments = async (req, res) => {
    try {
        const userId = req.userId;
        const role = req.role;

        let appointments;
        if (role === 'customer') {
            appointments = await Appointment.find({ userId })
                .populate('serviceId', 'name email photo')
                .sort({ createdAt: -1 });
        } else if (role === 'service') {
            appointments = await Appointment.find({ serviceId: userId })
                .populate('userId', 'name email photo')
                .sort({ createdAt: -1 });
        }

        res.status(200).json({
            success: true,
            data: appointments
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch appointments',
            error: err.message
        });
    }
};

export const updateAppointmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const appointment = await Appointment.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: 'Appointment not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Appointment status updated',
            data: appointment
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update appointment status',
            error: err.message
        });
    }
}; 