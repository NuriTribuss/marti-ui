<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute()
useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.martireisen.at' + route.path,
    },
  ],
}))
</script>