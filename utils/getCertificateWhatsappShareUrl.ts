export default function getCertificateWhatsappShareUrl(
  certificate: Certificate
) {
  const config = useRuntimeConfig();
  const certUrl = `${config.public.siteUrl}/c/${certificate._id}`;
  const certTitle = certificate.title;
  const text = `Confira meu certificado "${certTitle}"`;
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(certUrl);
  return `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
}
