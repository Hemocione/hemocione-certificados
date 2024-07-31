import type { InferSchemaType } from "mongoose";
import { Schema, model } from "mongoose";

const CertificateSchema = new Schema({
    active: {
        type: Boolean,
        default: true,
        required: true
    },
    title: { type: String, required: true },
    person: {
        hemocioneId: { type: String, required: false },
        name: { type: String, required: true },
        document: { type: String, required: false },
        email: { type: String, required: true },
        phone: { type: String, required: false },
    },
    text: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        default: false,
    },
    emittedAt: {
        type: Date,
        required: true,
        default: () => new Date(),
    },
    emittedBy: {
        email: { type: String, required: true },
        name: { type: String, required: true },
        hemocioneId: { type: String, required: true },
    },
}, {
    timestamps: true,
})

CertificateSchema.index({ "_id": 1, active: 1 });

export type CertificateSchema = InferSchemaType<typeof CertificateSchema>;
export const Certificate = model<CertificateSchema>("Certificate", CertificateSchema);