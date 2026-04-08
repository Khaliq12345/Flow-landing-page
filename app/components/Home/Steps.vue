<template>
  <UPageSection
    class="py-16 bg-flow-neutral-100"
    title="Comment ça marche"
    description=" Un processus transparent en 4 étapes pour digitaliser votre présence."
    :ui="{
      title: 'font-[Manrope] text-4xl font-extrabold text-flow-blue-500 mb-4',
      description: 'text-flow-neutral-900',
    }"
  >
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="['relative group', index % 2 === 1 ? 'md:mt-16' : '']"
      >
        <div
          class="bg-white p-8 border-l-4 h-full rounded-[0.25rem] shadow-sm"
          :class="
            index % 2 === 0 ? 'border-flow-blue-500' : 'border-flow-green-500'
          "
        >
          <p
            class="font-[Manrope] font-black text-4xl mb-4 opacity-30"
            :class="
              index % 2 === 0 ? 'text-flow-blue-500' : 'text-flow-green-500'
            "
          >
            0{{ index + 1 }}
          </p>
          <h4 class="font-[Manrope] font-bold text-lg mb-2 text-flow-blue-500">
            {{ step.title }}
          </h4>
          <p class="text-sm text-flow-neutral-900">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const steps = [
  {
    title: "Informations Client",
    description:
      "Nous analysons vos besoins spécifiques et vos objectifs commerciaux.",
  },
  {
    title: "Identité de Marque",
    description:
      "Intégration de vos couleurs, logos et ton de voix pour un contenu unique.",
  },
  {
    title: "Collecte de Média",
    description:
      "Visites sur site 2x par semaine pour capturer l'essence de votre activité.",
  },
  {
    title: "Livraison Auto",
    description:
      "Réception automatique de vos contenus prêts à être publiés sur vos réseaux.",
  },
];
</script>
