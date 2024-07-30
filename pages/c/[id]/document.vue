<script setup lang="ts">
const route = useRoute();
const certificateStore = useCertificateStore();
const certificateId = String(route.params.id);

if (!certificateId) {
  navigateTo("https://http.cat/status/404", { external: true });
}

let certificate: Certificate | null = null;
try {
  certificate = await certificateStore.getCertificateById(certificateId);
} catch (error) {
  console.error(error);
  navigateTo("https://http.cat/status/404", { external: true });
}

useServerSeoMeta({
  title: certificate?.title || "Seu Certificado",
});

// setup OG Image for document that will be downloaded
</script>
