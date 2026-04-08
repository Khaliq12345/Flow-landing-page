<template>
  <UPageSection class="bg-flow-neutral-100">
    
      <div class="text-center">
        <h2
          class="font-[Manrope] text-3xl font-bold text-flow-blue-500 mb-4 tracking-tight"
        >
          Cas d'Utilisation
        </h2>
        <p class="text-flow-neutral-900 max-w-xl mx-auto">
          Comment nos partenaires utilisent Flow pour dominer leur
          marché.
        </p>
      </div>

      <div class="space-y-0">
        <!-- Case 1 -->
        <div
          class="flex flex-col md:flex-row items-center bg-flow-neutral-200 rounded-[0.5rem] overflow-hidden"
        >
          <div class="md:w-1/2 p-12">
            <h3 class="text-2xl font-[Manrope] font-bold text-flow-blue-500 mb-4">
              Coulisses & Culture
            </h3>
            <p class="text-flow-neutral-900 leading-relaxed mb-6">
              Humanisez votre marque en montrant l'envers du décor. Nos
              algorithmes sélectionnent les meilleurs moments de vos journées
              pour créer des capsules immersives qui renforcent la confiance.
            </p>
            <UButton variant="link" class="p-0 text-flow-green-500 font-bold">
              Voir les exemples
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
          </div>
          <div class="md:w-1/2 h-80">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80"
              alt="Work culture"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Case 2 -->
        <div
          class="flex flex-col md:flex-row-reverse items-center bg-white rounded-[0.5rem] overflow-hidden shadow-sm"
        >
          <div class="md:w-1/2 p-12">
            <h3 class="text-2xl font-[Manrope] font-bold text-flow-blue-500 mb-4">
              Révélations de Produits
            </h3>
            <p class="text-flow-neutral-900 leading-relaxed mb-6">
              Créez l'anticipation avant chaque lancement. Des visuels
              mystérieux aux démonstrations techniques, nous orchestrons votre
              montée en puissance visuelle.
            </p>
            <UButton variant="link" class="p-0 text-flow-green-500 font-bold">
              Explorer le module
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
          </div>
          <div class="md:w-1/2 h-80">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
              alt="Product reveal"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    
  </UPageSection>
</template>
