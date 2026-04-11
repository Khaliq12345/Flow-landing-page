<template>
  <UPageCTA
    title="Prêt à automatiser votre croissance ?"
    :links="links"
    :ui="{
      root: 'bg-flow-neutral-200 py-16',
      container: 'max-w-4xl text-center',
      title:
        'font-[Manrope] text-4xl md:text-5xl font-extrabold text-flow-blue-500 leading-tight',
    }"
  />
</template>

<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const { links } = UseLinks();
</script>
