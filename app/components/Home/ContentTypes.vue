<template>
  <UPageSection
    class="bg-flow-blue-500 text-white overflow-hidden"
    title="Une diversité de formats"
    :ui="{
      title: 'font-[Manrope] text-4xl md:text-5xl font-bold',
    }"
  >
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-175">
      <!-- Vertical Video -->
      <div
        class="md:col-span-4 bg-[#00457a]/10 rounded-[0.5rem] overflow-hidden relative group h-96 md:h-auto"
      >
        <img
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80"
          alt="Vertical video"
          class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-flow-blue-500 to-transparent"
        />
        <div class="absolute bottom-8 left-8">
          <span
            class="bg-flow-green-500 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block text-white"
            >Vidéos Reels/TikTok</span
          >
          <h3 class="text-2xl font-[Manrope] font-bold">Engagement Maximal</h3>
        </div>
      </div>

      <!-- Right Column -->
      <div class="md:col-span-8 grid grid-rows-2 gap-6">
        <div
          class="bg-[#00457a]/10 rounded-[0.5rem] overflow-hidden relative group h-64 md:h-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
            alt="Graphic design"
            class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div
            class="absolute inset-0 bg-linear-to-r from-flow-blue-500/80 to-transparent"
          />
          <div class="absolute bottom-8 left-8">
            <span
              class="bg-flow-amber-500 text-[#3c2b00] px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block"
              >Visuels & Affiches</span
            >
            <h3 class="text-2xl font-[Manrope] font-bold">Identité Forte</h3>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="(feature, index) in [
              {
                icon: 'i-lucide-sparkles',
                iconColor: 'text-secondary-muted',
                title: 'Mises à jour Quotidiennes',
                description: 'Jamais à court de contenu pour vos stories.',
              },
              {
                icon: 'i-lucide-bar-chart-3',
                iconColor: 'text-flow-amber-500',
                title: 'Impact Mesurable',
                description: 'Contenu optimisé pour les algorithmes actuels.',
              },
            ]"
            :key="index"
            class="bg-primary-muted/10 rounded-[0.5rem] p-8 flex flex-col justify-center border border-white/10"
          >
            <UIcon
              :name="feature.icon"
              class="text-4xl mb-4"
              :class="feature.iconColor"
            />
            <h4 class="text-xl font-[Manrope] font-bold">
              {{ feature.title }}
            </h4>
            <p class="text-sm opacity-70 mt-2">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
