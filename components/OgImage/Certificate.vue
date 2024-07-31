<template>
  <div
    :style="{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: `${String(8 * multiplier)}px`,
      backgroundColor: '#f2f2f2',
      fontSize: `${String(12 * multiplier)}px`,
      fontFamily: 'Roboto',
      position: 'relative',
      boxSizing: 'border-box',
      textAlign: 'center',
    }"
  >
    <img
      src="/utils/corner.svg"
      alt="left-corner"
      style="
        position: absolute;
        left: 0;
        transform: rotate(180deg);
        height: 100%;
        width: 15%;
      "
    />
    <img
      src="/utils/corner.svg"
      alt="right-corner"
      style="position: absolute; right: 0; height: 100%; width: 15%"
    />
    <QrCode
      :value="cerficateUrl"
      :size="100 * multiplier"
      level="M"
      :style="{
        position: 'absolute',
        bottom: `${25 * multiplier}px`,
        left: `${25 * multiplier}px`,
        padding: `${8 * multiplier}px`,
        backgroundColor: '#FFF',
        borderRadius: `${8 * multiplier}px`,
      }"
    />
    <img
      src="/logos/principal.svg"
      alt="Logo Hemocione"
      :width="200 * multiplier"
    />
    <h1 :style="{ fontSize: `${32 * multiplier}px`, maxWidth: '60%' }">
      {{ certificate.title }}
    </h1>
    <span :style="{ fontSize: `${16 * multiplier}px`, maxWidth: '60%' }"
      >Certificamos que</span
    >
    <h2 :style="{ fontSize: `${24 * multiplier}px`, maxWidth: '60%' }">
      {{ certificate.person?.name || "Você" }}
    </h2>
    <span
      v-html="certificate.text"
      :style="{ fontSize: `${16 * multiplier}px`, maxWidth: '60%' }"
    />
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        paddingTop: `${String(64 * multiplier)}px`,
        gap: `${String(8 * multiplier)}px`,
      }"
    >
      <hr
        :style="{
          height: '2px',
          width: `${String(200 * multiplier)}px`,
          backgroundColor: 'black',
        }"
      />
      <span>Vitor Pinheiro</span>
      <span>Presidente Hemocione</span>
      <span>Rio de Janeiro, {{ beautifulEmittionDate }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  certificate: Certificate;
  multiplier?: number;
}>(); // This is the certificate object that will be passed from the parent component
const cerficateUrl = getCertificateUrl(props.certificate._id);
const beautifulEmittionDate = new Date(
  props.certificate.emittedAt
).toLocaleDateString("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const multiplier = props.multiplier || 1;
</script>
