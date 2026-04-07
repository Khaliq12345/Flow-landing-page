<template>
  <UPageSection>
    <UPageCTA
      title="Prêt à automatiser votre succès ?"
      :links="links"
      :ui="{
        root: 'bg-flow-blue-500 rounded-[1.5rem] relative overflow-hidden',
        title:
          'font-[Manrope] text-4xl md:text-5xl font-extrabold text-white tracking-tighter',
        links: 'justify-center',
      }"
    >
      <!-- Blob décoratif -->
      <template #top>
        <div
          class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        >
          <div
            class="absolute top-[-50%] left-[-20%] w-[140%] h-[140%] bg-linear-to-br from-flow-green-500 to-transparent rounded-full blur-[100px]"
          />
        </div>
      </template>
    </UPageCTA>
  </UPageSection>
</template>

<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Contactez-nous",
    size: "xl",
    ui: { base: "bg-[#fabd00] text-[#3c2b00] font-bold hover:bg-[#e6ac00]" },
  },
  {
    label: "Voir les tarifs",
    size: "xl",
    variant: "outline",
    ui: {
      base: "bg-white/10 backdrop-blur-md text-white border-white/20 font-bold hover:bg-white/20",
    },
  },
]);
</script>
