import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String
        }
    ],
    images: [
        {
            type: String
        }]
    ,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

export default mongoose.model('Car', carSchema);