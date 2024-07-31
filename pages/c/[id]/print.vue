<template>
  <span>Carregando...</span>
</template>

<script setup lang="ts">
import {
  useCertificateStore,
  type Certificate,
} from "~/stores/certificateStore";
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

defineOgImageComponent(
  "Certificate",
  {
    certificate,
    multiplier: 2.5,
    fonts: ["Roboto:300", "Roboto:400", "Roboto:700"],
  },
  {
    width: 1920,
    height: 1358,
  }
);
</script>
