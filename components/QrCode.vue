<template>
  <qrcode-vue
    :value="value"
    :level="level"
    :render-as="renderAs"
    :size="size"
  />
</template>

<script setup lang="ts">
import QrcodeVue, { type Level, type RenderAs } from "qrcode.vue";
const props = defineProps<{
  value: string;
  level?: Level;
  renderAs?: RenderAs;
  size?: number;
}>();

const value = props.value;
const level = props.level || "H";
const renderAs = props.renderAs || "svg";
const size = props.size || 200;
</script>
