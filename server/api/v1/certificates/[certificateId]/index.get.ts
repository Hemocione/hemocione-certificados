import { getPublicCertificateInfoById } from "~/server/services/certificate";

export default defineEventHandler(async (event) => {
    const certificateId = getRouterParam(event, "certificateId");
    if (!certificateId) {
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: "Missing certificateId",
        });
    }

    const certificate = await getPublicCertificateInfoById(certificateId);
    if (!certificate) {
        throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Certificate not found",
        });
    }

    return certificate;
});