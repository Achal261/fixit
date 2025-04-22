// import User from "../models/UserSchema.js";
// //to update the users

// export const updateUser = async(req,res)=>{
//     const id=req.params.id;

//     try {
//         const updatedUser =await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})
//         res.status(200).json({success:true, message:'Successfully updated', data:updatedUser})
//     } catch (error) {
//         res.status(500).json({success:false, message:'Failed to update'});
//     }
// }

// export const deleteUser = async(req,res)=>{
//     const id=req.params.id;

//     try {
//         await User.findByIdAndDelete(id,);
//         res.status(200).json({success:true, message:'Successfully deleted'})
//     } catch (error) {
//         res.status(500).json({success:false, message:'Failed to delete'});
//     }
// }

// export const getSingleUser = async(req,res)=>{
//     const id=req.params.id;

//     try {
//         const user =await User.findById(id).select('-password')
//         res.status(200).json({success:true, message:'User found', data: user,})
//     } catch (error) {
//         res.status(404).json({success:false, message:'No User found'});
//     }
// }

// export const getAllUser = async(req,res)=>{
    
//     try {
//         const users =(await User.find({})).select('-password');
//         res.status(200).json({success:true, message:'Users found', data: users,})
//     } catch (error) {
//         res.status(404).json({success:false, message:'Not found'});
//     }
// }


import User from "../models/UserSchema.js";

// Update the user
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        // if (!updatedUser) {
            // return res.status(404).json({ success: false, message: 'User not found' });
        // }
        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser });
    } catch (error) {
        
        res.status(500).json({ success: false, message: 'Failed to update' });
    }
}

// Delete the user
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        
        //  
         await User.findByIdAndDelete(id);
        // if (!deletedUser) {
        //     return res.status(404).json({ success: false, message: 'User not found' });
        // }
        res.status(200).json({ success: true, message: 'Successfully deleted' });
    } catch (error) {
        
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
}

// Get a single user
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        
        const user = await User.findById(id).select('-password');
        // if (!user) {
        //     return res.status(404).json({ success: false, message: 'User not found' });
        // }
        res.status(200).json({ success: true, message: 'User found', data: user });
    } catch (error) {
       
        res.status(404).json({ success: false, message: 'No User found' });
    }
}

// Get all users
export const getAllUser = async (req, res) => {
    try {
       
        const users = await User.find({}).select('-password');
        res.status(200).json({ success: true, message: 'Users found', data: users });
    } catch (error) {
        
        res.status(404).json({ success: false, message: 'Not found' });
    }
}
