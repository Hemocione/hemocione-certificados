import z from "zod";
import { CertificateSchema } from "~/server/models/certificate";
import { assertSecretAuth } from "~/server/services/auth";
import { createCertificate } from "~/server/services/certificate";
import getCertificateUrl from "~/utils/getCertificateUrl";

const body = z.object({
  title: z.string(),
  person: z.object({
    hemocioneId: z.string().optional(),
    name: z.string(),
    document: z.string().optional(),
    email: z.string(),
    phone: z.string().optional(),
  }),
  text: z.string(),
  private: z.boolean().optional(),
  emittedBy: z.object({
    email: z.string(),
    name: z.string(),
    hemocioneId: z.string(),
  }),
});

export default defineEventHandler(async (event) => {
  assertSecretAuth(event);

  const { data } = await readValidatedBody(event, body.safeParse);
  const certificate = await createCertificate(
    data as Partial<CertificateSchema>
  );

  const certificateId = certificate._id;
  const url = getCertificateUrl(String(certificateId));

  return { certificate, url };
});
