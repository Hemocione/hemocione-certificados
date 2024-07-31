<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style scoped>
.app {
  height: 100svh;
  width: 100dvw;
}

@media print {
  .app {
    height: 100vh;
    width: 100vw;
  }
}
</style>
