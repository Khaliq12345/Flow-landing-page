<template>
  <UPageCTA
    title="Prêt à automatiser votre croissance ?"
    :links="links"
    :ui="{
      root: 'bg-[#f3f3f6] py-16',
      container: 'max-w-4xl text-center',
      title:
        'font-[Manrope] text-4xl md:text-5xl font-extrabold text-[#002f55] leading-tight',
    }"
  />
</template>

<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Commencez Maintenant",
    color: "neutral",
    size: "xl",
  },
  {
    label: "Contactez Nous",
    color: "neutral",
    variant: "outline",
    size: "xl",
  },
]);
</script>
