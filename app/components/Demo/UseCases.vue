<template>
  <UPageSection class="bg-flow-neutral-100">
    <div class="text-center mb-12">
      <h2
        class="font-[Manrope] text-3xl md:text-4xl font-bold text-flow-blue-500 mb-4 tracking-tight"
      >
        Cas d'Utilisation
      </h2>
      <p class="text-flow-neutral-900 max-w-xl mx-auto">
        Comment nos partenaires utilisent Flow pour dominer leur marché.
      </p>
    </div>

    <div class="space-y-8">
      <div
        v-for="(item, index) in useCases"
        :key="index"
        :class="[
          'flex flex-col md:flex-row items-center overflow-hidden rounded-[0.5rem] transition-all hover:shadow-md',
          index % 2 !== 0
            ? 'md:flex-row-reverse bg-white'
            : 'bg-flow-neutral-200',
        ]"
      >
        <div class="md:w-1/2 p-8 md:p-16">
          <h3 class="text-2xl font-[Manrope] font-bold text-flow-blue-500 mb-4">
            {{ item.title }}
          </h3>
          <p class="text-flow-neutral-900 leading-relaxed mb-6">
            {{ item.description }}
          </p>
          <UButton
            variant="link"
            :to="item.link"
            class="p-0 text-flow-green-500 font-bold hover:no-underline group"
          >
            {{ item.cta }}
            <template #trailing>
              <UIcon
                name="i-lucide-arrow-right"
                class="transition-transform group-hover:translate-x-1"
              />
            </template>
          </UButton>
        </div>

        <div class="md:w-1/2 h-80 md:h-450px">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover shadow-inner"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const useCases = [
  {
    title: "Coulisses & Culture",
    description:
      "Humanisez votre marque en montrant l'envers du décor. Nos algorithmes sélectionnent les meilleurs moments de vos journées pour créer des capsules immersives qui renforcent la confiance.",
    cta: "Voir les exemples",
    link: "#gallery",
    image: "demo/images/culture.jpg",
  },
  {
    title: "Révélations de Produits",
    description:
      "Créez l'anticipation avant chaque lancement. Des visuels mystérieux aux démonstrations techniques, nous orchestrons votre montée en puissance visuelle.",
    cta: "Explorer le module",
    link: "#gallery",
    image: "demo/images/drums.jpg",
  },
];
</script>
