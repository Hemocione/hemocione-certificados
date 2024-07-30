<template>
  <div class="cert-page">
    <img :src="certificateImageUrl" alt="Certificado" class="certificate" />
    <div class="actions">
      <button>Adicionar ao Linkedin</button>
      <button>Compartilhar no WhatsApp</button>
      <button>Imprimir Certificado</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  useCertificateStore,
  type Certificate,
} from "~/stores/certificateStore";
import getCertificateImageUrl from "~/utils/getCertificateImageUrl";
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

const certificateImageUrl = getCertificateImageUrl(certificateId);

useServerSeoMeta({
  title: certificate?.title || "Seu Certificado",
});
</script>
<style scoped>
.cert-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
}

.certificate {
  /* max-height: 600px; */
  border-radius: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  aspect-ratio: 9/16;
  flex-grow: 1;
  object-fit: contain;
}
</style>
