export default function getCertificateLinkedinUrl(certificate: Certificate) {
  const config = useRuntimeConfig();
  const certificateId = certificate._id;
  const certUrl = `${config.public.siteUrl}/c/${certificateId}`;
  const organizationId = config.public.linkedinOrganizationId;
  const emittedAt = new Date(certificate.emittedAt);
  const year = emittedAt.getFullYear();
  const month = emittedAt.getMonth() + 1;

  return encodeURI(
    `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${certificate.title}&organizationId=${organizationId}&certId=${certificateId}&certUrl=${certUrl}&issueYear=${year}&issueMonth=${month}`
  );
}
