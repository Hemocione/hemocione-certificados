import { Certificate } from "~/server/models/certificate";

export function getPublicCertificateInfoById(id: string) {
    return Certificate.findOne({ _id: id, active: true }).select({
        "person.name": 1,
        title: 1,
        text: 1,
        emittedAt: 1,
    }).lean();
}


export function createCertificate(data: Partial<CertificateSchema>) {
    return Certificate.create(data);
}