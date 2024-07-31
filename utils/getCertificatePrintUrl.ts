export default function getCertificateImageUrl(certificateId: string) {
  const config = useRuntimeConfig();

  return `${config.public.siteUrl}/__og-image__/image/c/${certificateId}/print/og.png`;
}
