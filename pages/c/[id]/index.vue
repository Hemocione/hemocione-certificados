<template>
  <div class="cert-page">
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
          <LoaderSpinnerDots />
        </div>
      </TransitionGroup>
    </div>
    <div class="actions">
      <NuxtLink
        style="display: flex; align-items: center; justify-content: center"
        :to="certificateLinkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        external
        @click="() => captureActionClick('linkedin')"
      >
        <NuxtImg
          class="action-img"
          src="/actions/linkedin.svg"
          alt="Compartilhar no LinkedIn"
          width="40"
          height="40"
        />
      </NuxtLink>
      <NuxtLink
        style="display: flex; align-items: center; justify-content: center"
        :to="certificateWhatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        external
        @click="() => captureActionClick('whatsapp')"
      >
        <NuxtImg
          class="action-img"
          src="/actions/whatsapp.svg"
          alt="Compartilhar no WhatsApp"
          width="40"
          height="40"
        />
      </NuxtLink>
      <NuxtImg
        class="action-img"
        src="/actions/pdf.svg"
        alt="Baixar Certificado como PDF"
        width="40"
        height="40"
        @click="printCertificate"
      />
      <a
        :href="certificateImageUrl"
        download="certificado.png"
        class="action"
        @click="() => captureActionClick('png')"
      >
        <NuxtImg
          class="action-img"
          src="/actions/png.svg"
          alt="Baixar Certificado como Imagem"
          width="40"
          height="40"
        />
      </a>
      <NuxtImg
        class="action-img printer"
        src="/actions/printer.svg"
        alt="Imprimir Certificado"
        width="40"
        height="40"
        @click="getCertificatePdf"
      />
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
let certificateLinkedinUrl = "";
let certificateWhatsappUrl = "";
try {
  certificate = await certificateStore.getCertificateById(certificateId);
  if (!certificate) {
    throw new Error("Certificate not found");
  }
  certificateLinkedinUrl = getCertificateLinkedinUrl(certificate);
  certificateWhatsappUrl = getCertificateWhatsappShareUrl(certificate);
} catch (error) {
  console.error(error);
  navigateTo("https://http.cat/status/404", { external: true });
}

const certificateImageUrl = getCertificatePrintUrl(certificateId);

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

onMounted(() => {
  setTimeout(() => {
    onPreviewLoad();
  }, 3000); // wait, at most, 3 seconds for the image to load before showing the image
});

const printCertificate = async () => {
  captureActionClick("print");
  print();
};

const getCertificatePdf = () => {
  captureActionClick("pdf");
  print();
};

const captureActionClick = (action: string) => {
  vercelTrack("Certificate Action Click", {
    certificateId,
    action,
  });
};
</script>
<style scoped>
.cert-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2rem;
  padding: 1rem;
  box-sizing: border-box;
}

.preview-wrapper {
  max-width: 95%;
  max-height: 70%;
  border-radius: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  aspect-ratio: 100/70.707;
  object-fit: contain;
  box-sizing: border-box;
}

.preview-wrapper:last-child {
  page-break-after: auto;
}

.certificate {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
}

.actions {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  max-width: 95%;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}

.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(90dvw, 750px);
}

.action-img {
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 8px;
  box-sizing: border-box;
}

.printer {
  background-color: var(--black-100);
  padding: 0.5rem;
  display: flex;
}

.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 12px;
  text-decoration: none;
  transition: transform 0.2s;
  max-width: 80px;
  text-align: center;
}

@media print {
  .actions {
    display: none;
  }

  .cert-page {
    display: block;
    height: 100vh;
    width: 100vw;
    padding: 0;
    page-break-after: auto; /* Ensures no extra page break */
  }

  .preview-wrapper {
    overflow: hidden;
    aspect-ratio: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0;
    box-shadow: none;
    page-break-after: auto; /* Ensures no extra page break */
  }

  .certificate {
    width: 100%;
    height: 100%;
    border-radius: 0;
    page-break-after: auto; /* Ensures no extra page break */
  }
}

@page {
  size: A4 landscape;
  margin: 0;
}
</style>
