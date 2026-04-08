<template>
  <UPageSection class="py-16 bg-flow-neutral-200">
    <div
      class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
    >
      <div class="max-w-2xl">
        <h2
          class="font-[Manrope] text-4xl md:text-5xl font-extrabold text-flow-blue-500 mb-6"
        >
          Pourquoi choisir Flow ?
        </h2>
        <p class="text-flow-neutral-900 text-lg leading-relaxed">
          Nous redéfinissons la création de contenu pour les entreprises
          africaines en alliant technologie de pointe et expertise locale.
        </p>
      </div>
      <div
        class="text-flow-green-500 font-[Manrope] font-bold text-6xl opacity-20 hidden md:block"
      >
        01
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(benefit, index) in benefits"
        :key="index"
        class="bg-white p-10 rounded-[0.25rem] hover:-translate-y-2 transition-transform duration-300 shadow-sm"
      >
        <UIcon :name="benefit.icon" class="text-4xl text-flow-green-500 mb-6" />
        <h3 class="font-[Manrope] text-xl font-bold text-flow-blue-500 mb-4">
          {{ benefit.title }}
        </h3>
        <p class="text-flow-neutral-900 leading-relaxed">
          {{ benefit.description }}
        </p>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: "i-lucide-piggy-bank",
    title: "Réduction des Coûts",
    description:
      "Économisez sur les frais d'agence et les salaires fixes. Payez uniquement pour la performance.",
  },
  {
    icon: "i-lucide-video",
    title: "Équipe Simplifiée",
    description:
      "Plus besoin de gérer des monteurs vidéo ou des graphistes. Notre IA et nos experts s'occupent de tout.",
  },
  {
    icon: "i-lucide-award",
    title: "Qualité Supérieure",
    description:
      "Un rendu professionnel constant, aligné sur les standards internationaux de design.",
  },
];
</script>
