

// import Service from "../models/ServiceSchema.js";

// // Update the Service
// export const updateService = async (req, res) => {
//     const id = req.params.id;

//     try {
//         console.log(`Updating Service with ID: ${id}`);
//         const updatedService = await Service.findByIdAndUpdate(id, { $set: req.body }, { new: true });
//         if (!updatedService) {
//             return res.status(404).json({ success: false, message: 'Service not found' });
//         }
//         res.status(200).json({ success: true, message: 'Successfully updated', data: updatedService });
//     } catch (error) {
//         console.error(`Failed to update Service with ID: ${id}`, error);
//         res.status(500).json({ success: false, message: 'Failed to update' });
//     }
// }

// // Delete the Service
// export const deleteService = async (req, res) => {
//     const id = req.params.id;

//     try {
//         console.log(`Deleting Service with ID: ${id}`);
//         const deletedService = await Service.findByIdAndDelete(id);
//         if (!deletedService) {
//             return res.status(404).json({ success: false, message: 'Service not found' });
//         }
//         res.status(200).json({ success: true, message: 'Successfully deleted' });
//     } catch (error) {
//         console.error(`Failed to delete Service with ID: ${id}`, error);
//         res.status(500).json({ success: false, message: 'Failed to delete' });
//     }
// }

// // Get a single Service
// export const getSingleService = async (req, res) => {
//     const id = req.params.id;

//     try {
        
//         const Service = await Service.findById(id).populate("reviews").select('-password');
//         if (!Service) {
//             return res.status(404).json({ success: false, message: 'Service not found' });
//         }
//         res.status(200).json({ success: true, message: 'Service found', data: service });
//     } catch (error) {
        
//         res.status(404).json({ success: false, message: 'No Service found' });
//     }
// }

// // Get all Services
// export const getAllService = async (req, res) => {
//     try {
//         const {query} = req.query
//         let services;
//         if(query){
//             services = await Service.find({
//                 isApproved: "approved",
//                 $or: [
//                     { name: { $regex: query, $options: 'i' } },
//                     { specialisation: { $regex: query, $options: 'i' } }
//                 ]
//             }).select("-password");
//         }else {
//             services=await Service.find({isApproved: "approved"}).select("-password");
//         }
//         // console.log('Fetching all Services');
//         //  services = await Service.find({}).select('-password');
//         res.status(200).json({ success: true, message: 'Services found', data: services });
//     } catch (error) {
//         // console.error('Failed to fetch Services', error);
//         res.status(404).json({ success: false, message: 'Not found' });
//     }
// }


import Service from "../models/ServiceSchema.js";

// Update the Service
export const updateService = async (req, res) => {
    const id = req.params.id;

    try {
        
        const updatedService = await Service.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        
        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedService });
    } catch (error) {
        
        res.status(500).json({ success: false, message: 'Failed to update' });
    }
}

// Delete the Service
export const deleteService = async (req, res) => {
    const id = req.params.id;

    try {
        
        //  
         await Service.findByIdAndDelete(id);
        
        res.status(200).json({ success: true, message: 'Successfully deleted' });
    } catch (error) {
        
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
}

// Get a single Service
export const getSingleService = async (req, res) => {
    const id = req.params.id;

    try {
        
        const service = await Service.findById(id).populate("reviews").select('-password');
        
        res.status(200).json({ success: true, message: 'Service found', data: service });
    } catch (error) {
       
        res.status(404).json({ success: false, message: 'No Service found' });
    }
}

// Get all Services
export const getAllService = async (req, res) => {

    try {
       
         const {query} = req.query
        let services;
        if(query){
            services = await Service.find({
                isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { specialisation: { $regex: query, $options: 'i' } }
                ]
            }).select("-password");
        }else {
             services=await Service.find({isApproved: "approved"}).select("-password");
        }

        // const services = await Service.find({}).select('-password');
        res.status(200).json({ success: true, message: 'Users found', data: services });
    } catch (error) {
        
        res.status(404).json({ success: false, message: 'Not found' });
    }
}
