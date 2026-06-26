/**
 * fields: 
 * userId
    date
    reason
    status
 */

import mongoose, { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    date: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" }
}, {
    timestamps: true
});

export default mongoose.model("Appointments", appointmentSchema);