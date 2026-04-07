<template>
  <UPageSection class="bg-flow-neutral-200">
    <div class="flex flex-col md:flex-row justify-between items-end gap-4">
      <div class="max-w-xl">
        <h2
          class="font-[Manrope] text-3xl font-bold text-flow-blue-500 mb-4 tracking-tight"
        >
          Storytelling Vidéo
        </h2>
        <p class="text-flow-neutral-900">
          Des formats courts optimisés pour l'engagement émotionnel et la
          conversion directe sur les réseaux sociaux.
        </p>
      </div>
      <div class="flex gap-2">
        <button
          v-for="icon in ['i-lucide-arrow-left', 'i-lucide-arrow-right']"
          :key="icon"
          class="text-flow-blue-500 p-3 border border-flow-neutral-700/30 rounded-full cursor-pointer hover:bg-white transition-colors"
        >
          <UIcon :name="icon" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-stretch">
      <!-- Main Video -->
      <div
        class="md:col-span-8 relative overflow-hidden rounded-[0.5rem] bg-flow-neutral-500 aspect-video group"
      >
        <video
          src="/vid1.mp4"
          autoplay
          loop
          muted
          playsinline
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
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
      <div class="md:col-span-4">
        <div
          class="relative overflow-hidden rounded-[0.5rem] bg-flow-neutral-500 h-full group"
        >
          <video
            src="/vid2.mp4"
            autoplay
            loop
            muted
            playsinline
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-flow-blue-500/80 to-transparent flex flex-col justify-end p-6"
          >
            <UIcon
              name="i-lucide-trending-up"
              class="text-flow-amber-500 mb-2 w-8 h-8"
            />
            <h4 class="text-white font-bold text-lg">Croissance B2B</h4>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
