export default function getCertificateImageUrl(certificateId: string) {
  const config = useRuntimeConfig();

  return `${config.public.siteUrl}/${certificateId}/document`;
}
