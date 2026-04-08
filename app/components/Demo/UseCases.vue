<template>
  <section class="py-16 bg-[#f9f9fc]">
    <UContainer>
      <div class="text-center mb-20">
        <h2
          class="font-[Manrope] text-3xl font-bold text-[#002f55] mb-4 tracking-tight"
        >
          Cas d'Utilisation
        </h2>
        <p class="text-[#3f4945] max-w-xl mx-auto">
          Comment nos partenaires utilisent Sahel Tech Pro pour dominer leur
          marché.
        </p>
      </div>

      <div class="space-y-4">
        <!-- Case 1 -->
        <div
          class="flex flex-col md:flex-row items-center bg-[#f3f3f6] rounded-[0.5rem] overflow-hidden"
        >
          <div class="md:w-1/2 p-12">
            <h3 class="text-2xl font-[Manrope] font-bold text-[#002f55] mb-4">
              Coulisses & Culture
            </h3>
            <p class="text-[#3f4945] leading-relaxed mb-6">
              Humanisez votre marque en montrant l'envers du décor. Nos
              algorithmes sélectionnent les meilleurs moments de vos journées
              pour créer des capsules immersives qui renforcent la confiance.
            </p>
            <UButton variant="link" class="p-0 text-[#29695b] font-bold">
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
            <h3 class="text-2xl font-[Manrope] font-bold text-[#002f55] mb-4">
              Révélations de Produits
            </h3>
            <p class="text-[#3f4945] leading-relaxed mb-6">
              Créez l'anticipation avant chaque lancement. Des visuels
              mystérieux aux démonstrations techniques, nous orchestrons votre
              montée en puissance visuelle.
            </p>
            <UButton variant="link" class="p-0 text-[#29695b] font-bold">
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
    </UContainer>
  </section>
</template>
