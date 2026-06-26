/* Fields: 
name
email
password
phone
 isVerified
loginAttempts
timeOut*/

import mongoose, {Schema, model} from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    loginAttempts: { type: Number, default: 0 },
    timeOut: { type: Date }
},
  {
    // timestamps: true, add automatically createdAt and updatedAt fields to the collection documents, which makes it easier to track when records were created or modified.
    timestamps: true,
    // strict: false, allows adding additional fields to the collection documents, which makes it easier to have flexibility in the data structure.
    strict: false,
  },
)

export default mongoose.model("Users", userSchema);