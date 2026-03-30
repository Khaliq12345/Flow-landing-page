<template>
  <section class="bg-[#f3f3f6] py-16">
    <UContainer>
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
      >
        <div class="max-w-xl">
          <h2
            class="font-[Manrope] text-3xl font-bold text-[#002f55] mb-4 tracking-tight"
          >
            Storytelling Vidéo
          </h2>
          <p class="text-[#3f4945]">
            Des formats courts optimisés pour l'engagement émotionnel et la
            conversion directe sur les réseaux sociaux.
          </p>
        </div>
        <div class="flex gap-2">
          <button
            class="text-[#002f55] p-2 border border-[#bfc9c4]/30 rounded-full cursor-pointer hover:bg-white transition-colors"
          >
            <UIcon name="i-lucide-arrow-left" />
          </button>
          <button
            class="text-[#002f55] p-2 border border-[#bfc9c4]/30 rounded-full cursor-pointer hover:bg-white transition-colors"
          >
            <UIcon name="i-lucide-arrow-right" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Main Video -->
        <div
          class="md:col-span-8 relative overflow-hidden rounded-[0.5rem] bg-[#e2e2e5] aspect-video group"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt="Modern office"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div
            class="absolute inset-0 bg-[#002f55]/20 flex items-center justify-center"
          >
            <button
              class="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform"
            >
              <UIcon name="i-lucide-play" class="w-8 h-8 text-[#002f55] ml-1" />
            </button>
          </div>
          <div class="absolute bottom-6 left-6 text-white">
            <p
              class="text-xs font-bold uppercase tracking-widest mb-1 opacity-80"
            >
              Documentaire de Marque
            </p>
            <h3 class="text-2xl font-bold font-[Manrope]">
              L'Innovation à Abidjan
            </h3>
          </div>
        </div>

        <!-- Side Video -->
        <div class="md:col-span-4 flex flex-col gap-8">
          <div
            class="relative overflow-hidden rounded-[0.5rem] bg-[#e2e2e5] h-full group"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Team working"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#002f55]/80 to-transparent flex flex-col justify-end p-6"
            >
              <UIcon
                name="i-lucide-trending-up"
                class="text-[#fabd00] mb-2 w-8 h-8"
              />
              <h4 class="text-white font-bold text-lg">Croissance B2B</h4>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
