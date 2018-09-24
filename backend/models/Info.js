import mongoose from 'mongoose';

let Info = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  message: {
    type: String
  }
});

export default mongoose.model('Info', Info);
