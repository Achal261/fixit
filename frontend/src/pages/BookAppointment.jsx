import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookAppointment = () => {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        serviceId: '',
        date: '',
        time: '',
        details: ''
    });

    useEffect(() => {
        // Fetch available services
        const fetchServices = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/v1/services');
                const result = await res.json();
                if (result.success) {
                    setServices(result.data);
                }
            } catch (err) {
                toast.error('Failed to fetch services');
            }
        };
        fetchServices();
    }, []);

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login to book an appointment');
                navigate('/login');
                return;
            }

            const res = await fetch('http://localhost:5000/api/v1/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            const result = await res.json();
            
            if (!res.ok) {
                throw new Error(result.message);
            }

            toast.success('Appointment booked successfully');
            navigate('/appointments');
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <section className='px-5 lg:px-0'>
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
                <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                    Book an <span className='text-blue-600'>Appointment</span>
                </h3>

                <form className='py-4 md:py-0' onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <select
                            name="serviceId"
                            value={formData.serviceId}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-sky-600 text-[16px]
                            leading-7 text-headingColor rounded-md cursor-pointer'
                        >
                            <option value="">Select Service</option>
                            {services.map(service => (
                                <option key={service._id} value={service._id}>
                                    {service.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='mb-5'>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-sky-600 text-[16px]
                            leading-7 text-headingColor rounded-md cursor-pointer'
                        />
                    </div>

                    <div className='mb-5'>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-sky-600 text-[16px]
                            leading-7 text-headingColor rounded-md cursor-pointer'
                        />
                    </div>

                    <div className='mb-5'>
                        <textarea
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                            placeholder="Enter appointment details"
                            required
                            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-sky-600 text-[16px]
                            leading-7 text-headingColor rounded-md cursor-pointer'
                            rows="4"
                        />
                    </div>

                    <div className='mt-7'>
                        <button
                            type="submit"
                            className='w-full bg-blue-500 text-white leading-[30px] rounded-lg px-4 py-3'
                        >
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BookAppointment; 