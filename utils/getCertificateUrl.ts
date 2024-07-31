export default function getCertificateUrl(certificateId: string) {
  const config = useRuntimeConfig();
  return `${config.public.siteUrl}/c/${certificateId}`;
}
