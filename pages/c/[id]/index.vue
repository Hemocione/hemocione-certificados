<template>
  <div class="cert-page">
    <NuxtImg src="/logos/principal.svg" alt="Logo Hemocione" width="200" />
    <div class="preview-wrapper">
      <TransitionGroup name="fade" appear>
        <img
          v-show="previewLoaded"
          :src="certificateImageUrl"
          alt="Certificado"
          class="certificate"
          @load="onPreviewLoad"
          key="certificate"
        />
        <div
          v-show="!previewLoaded"
          class="certificate loader-wrapper"
          key="loader"
        >
          <LoaderBubbleDots size="4px" />
        </div>
      </TransitionGroup>
    </div>
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
const route = useRoute();
const previewLoaded = ref(false);
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

const certificateImageUrl = getCertificatePreviewUrl(certificateId);

useServerSeoMeta({
  title: certificate?.title || "Seu Certificado",
});

defineOgImageComponent("Certificate", {
  certificate,
  fonts: ["Roboto:300", "Roboto:400", "Roboto:700"],
});

const onPreviewLoad = () => {
  previewLoaded.value = true;
};
</script>
<style scoped>
.cert-page {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 3rem;
  padding: 1rem;
  box-sizing: border-box;
}

.preview-wrapper {
  max-width: 90%;
  max-height: 70%;
  width: 100%;
  border-radius: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  aspect-ratio: 16/9;
  object-fit: contain;
  box-sizing: border-box;
}

.certificate {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 90%;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}

.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
