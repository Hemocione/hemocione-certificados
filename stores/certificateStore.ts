const fetchCertificateById = async (id: string) => {
  const { data } = await useFetch(`/api/v1/certificates/${id}`);
  return data;
};

export type Certificate = NonNullable<
  Awaited<ReturnType<typeof fetchCertificateById>>["value"]
>;

export const useCertificateStore = defineStore("certificates", {
  state: () => ({
    certificatesMap: new Map<string, Certificate>(),
  }),
  actions: {
    async getCertificateById(id: string) {
      if (!this.certificatesMap.has(id)) {
        const certificate = await fetchCertificateById(id);
        if (!certificate.value) {
          throw new Error("Certificate not found");
        }
        this.certificatesMap.set(id, certificate.value);
      }

      return this.certificatesMap.get(id) as Certificate;
    },
  },
});
