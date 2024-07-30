<template>
    <p>
        {{ dataStringified }}
    </p>
</template>
<script setup lang="ts">
const route = useRoute()
const certificateId = String(route.params.id)
if (!certificateId) {
    navigateTo('https://http.cat/status/404', { external: true })
}
const { data } = await useFetch(`/api/v1/certificates/${certificateId}`)

if (!data.value) {
    navigateTo('https://http.cat/status/404', { external: true })
}

useHead({
    title: data.value.title || "Seu Certificado"
})
const dataStringified = computed(() => JSON.stringify(data.value))

</script>
<style scoped></style>