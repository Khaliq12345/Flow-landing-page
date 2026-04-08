<template>
  <section class="py-16 bg-[#002f55] text-white overflow-hidden">
    <UContainer>
      <h2
        class="font-[Manrope] text-4xl md:text-5xl font-extrabold mb-12 text-center"
      >
        Une diversité de formats
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
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
            class="absolute inset-0 bg-gradient-to-t from-[#002f55] to-transparent"
          />
          <div class="absolute bottom-8 left-8">
            <span
              class="bg-[#29695b] px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block text-white"
              >Vidéos Reels/TikTok</span
            >
            <h3 class="text-2xl font-[Manrope] font-bold">
              Engagement Maximal
            </h3>
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
              class="absolute inset-0 bg-gradient-to-r from-[#002f55]/80 to-transparent"
            />
            <div class="absolute bottom-8 left-8">
              <span
                class="bg-[#fabd00] text-[#3c2b00] px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block"
                >Visuels & Affiches</span
              >
              <h3 class="text-2xl font-[Manrope] font-bold">Identité Forte</h3>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div
              class="bg-[#00457a]/10 rounded-[0.5rem] p-8 flex flex-col justify-center border border-white/10"
            >
              <UIcon
                name="i-lucide-sparkles"
                class="text-4xl text-[#acedda] mb-4"
              />
              <h4 class="text-xl font-[Manrope] font-bold">
                Mises à jour Quotidiennes
              </h4>
              <p class="text-sm opacity-70 mt-2">
                Jamais à court de contenu pour vos stories.
              </p>
            </div>

            <div
              class="bg-[#00457a]/10 rounded-[0.5rem] p-8 flex flex-col justify-center border border-white/10"
            >
              <UIcon
                name="i-lucide-bar-chart-3"
                class="text-4xl text-[#fabd00] mb-4"
              />
              <h4 class="text-xl font-[Manrope] font-bold">Impact Mesurable</h4>
              <p class="text-sm opacity-70 mt-2">
                Contenu optimisé pour les algorithmes actuels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
