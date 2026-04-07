<template>
  <UPageHero
    headline="L'avenir du marketing B2B"
    title="Solution de Génération de Contenu Automatisée"
    description="Propulsez votre marque avec des vidéos et visuels premium générés automatiquement. Plus rapide, 70% moins cher, et sans besoin d'une équipe de montage dédiée."
    orientation="horizontal"
    :links="links"
    :ui="{
      root: 'pt-16 pb-20 overflow-hidden',
      headline:
        'inline-flex items-center px-3 py-1 rounded-full bg-[#acedda] text-[#065043] text-xs font-bold tracking-wider uppercase',
      title:
        'font-[Manrope] text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-flow-blue-500',
      description: 'text-lg md:text-xl text-flow-neutral-900 leading-relaxed',
    }"
  >
    <!-- Slot par défaut : illustration à droite -->
    <div class="relative">
      <div
        class="relative z-10 rounded-md overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
      >
        <video
          src="/vid1.mp4"
          autoplay
          loop
          muted
          playsinline
          class="w-full aspect-4/5 object-cover"
        ></video>
      </div>

      <div
        class="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-md shadow-xl flex items-center gap-4 max-w-xs"
      >
        <div class="bg-[#acedda] text-[#065043] p-3 rounded-full">
          <UIcon name="i-lucide-zap" class="w-6 h-6" />
        </div>
        <div>
          <div class="text-sm font-bold text-flow-blue-500">
            Automatisation Totale
          </div>
          <div class="text-xs text-flow-neutral-900">
            Production 24/7 pour votre business
          </div>
        </div>
      </div>
    </div>

    <!-- Surcharge du slot title pour le span coloré -->
    <template #title>
      Solution de Génération de Contenu
      <span class="text-flow-green-500">Automatisée</span>
    </template>
  </UPageHero>
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
    label: "Prendre un RDV",
    color: "neutral",
    variant: "outline",
    size: "xl",
    leadingIcon: "i-lucide-calendar",
  },
]);
</script>
